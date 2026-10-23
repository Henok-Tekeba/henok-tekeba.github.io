import { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

/*
 * GithubContributionCard — adapted from Opensource UI
 * (https://opensourceui.in/components/github-contribution, MIT license),
 * ported to this site's plain CSS design system.
 *
 * Like the original, it renders a 53-week Sunday-first GitHub-style heatmap
 * where each day's intensity is derived from its share of the year's max.
 * Unlike the original, it pulls real data for the selected calendar year
 * from the GitHub contributions API instead of receiving counts as props.
 */

const username = 'Henok-Tekeba'
const contributionsUrl = year => `https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const DAY_LABELS = [
  { row: 1, label: 'Mon' },
  { row: 3, label: 'Wed' },
  { row: 5, label: 'Fri' },
]

const WEEKS = 53
const COL = 11 // cell 9px + gap 2px, like the original card's 10px + 3px

function pad(n) {
  return n.toString().padStart(2, '0')
}

function toDateKey(year, month, day) {
  return `${year}-${pad(month + 1)}-${pad(day)}`
}

function getGraphStart(year) {
  const jan1 = new Date(year, 0, 1)
  const start = new Date(jan1)
  start.setDate(jan1.getDate() - jan1.getDay())
  start.setHours(0, 0, 0, 0)
  return start
}

function countToLevel(count, max) {
  if (count <= 0 || max <= 0) return 0
  const ratio = count / max
  if (ratio <= 0.25) return 1
  if (ratio <= 0.5) return 2
  if (ratio <= 0.75) return 3
  return 4
}

// Graph cells: { level, count, date, inYear } per day, 53 weeks x 7 rows.
function buildGraph(year, contributions) {
  const map = new Map()
  for (const { date, count } of contributions) {
    if (count > 0) map.set(date, count)
  }

  const max = Math.max(0, ...map.values())
  let total = 0
  const start = getGraphStart(year)

  const grid = Array.from({ length: WEEKS }, (_, week) =>
    Array.from({ length: 7 }, (_, day) => {
      const date = new Date(start)
      date.setDate(start.getDate() + week * 7 + day)
      const inYear = date.getFullYear() === year

      if (!inYear) {
        return { level: 0, count: 0, date, inYear: false }
      }

      const count = map.get(toDateKey(date.getFullYear(), date.getMonth(), date.getDate())) ?? 0
      total += count

      return {
        level: countToLevel(count, max),
        count,
        date,
        inYear: true,
      }
    })
  )

  return { grid, total }
}

function computeMonthLabels(year) {
  const start = getGraphStart(year)
  const labels = []
  let lastMonth = -1

  for (let week = 0; week < WEEKS; week += 1) {
    const date = new Date(start)
    date.setDate(start.getDate() + week * 7)

    if (date.getMonth() !== lastMonth) {
      labels.push({ label: MONTHS[date.getMonth()], week })
      lastMonth = date.getMonth()
    }
  }

  return labels
}

function formatTooltip(date, count) {
  const label = date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
  if (count === 0) return `No contributions on ${label}`
  return `${count} contribution${count === 1 ? '' : 's'} on ${label} — ${username}`
}

function YearDropdown({ years, value, onChange }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    if (!open) return

    const handlePointerDown = event => {
      if (!rootRef.current?.contains(event.target)) setOpen(false)
    }

    const handleKeyDown = event => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  return (
    <div ref={rootRef} className="ghc-year">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={`Contribution year, ${value}`}
        className={open ? 'ghc-year-btn is-open' : 'ghc-year-btn'}
        onClick={() => setOpen(current => !current)}
      >
        <span>{value}</span>
        {open ? <ChevronUp size={12} strokeWidth={1.5} /> : <ChevronDown size={12} strokeWidth={1.5} />}
      </button>

      {open && (
        <ul className="ghc-year-list">
          {years.map(y => (
            <li key={y}>
              <button
                type="button"
                className={y === value ? 'ghc-year-item is-selected' : 'ghc-year-item'}
                onClick={() => {
                  onChange(y)
                  setOpen(false)
                }}
              >
                {y}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function GithubContributionCard() {
  const currentYear = new Date().getFullYear()
  const [year, setYear] = useState(currentYear)
  const [years, setYears] = useState(null)
  const [data, setData] = useState(null)
  const [status, setStatus] = useState('loading')
  const cacheRef = useMemo(() => new Map(), [])

  // Years run back to the account's first year when GitHub tells us; a fixed
  // 4-year window is the fallback if the profile request fails.
  useEffect(() => {
    let cancelled = false
    const fallback = [currentYear, currentYear - 1, currentYear - 2, currentYear - 3]

    async function loadYears() {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`)
        if (!res.ok) throw new Error(`Request failed with ${res.status}`)
        const profile = await res.json()
        if (cancelled) return

        const created = new Date(profile.created_at).getFullYear()
        if (!Number.isFinite(created)) {
          setYears(fallback)
          return
        }

        const first = Math.min(created, currentYear)
        const list = []
        for (let y = currentYear; y >= first; y -= 1) list.push(y)

        setYears(list.length ? list : fallback)
      } catch {
        if (!cancelled) setYears(fallback)
      }
    }

    loadYears()
    return () => {
      cancelled = true
    }
  }, [currentYear])

  useEffect(() => {
    let cancelled = false
    const controller = new AbortController()

    async function load() {
      if (cacheRef.current.has(year)) {
        setData(cacheRef.current.get(year))
        setStatus('ready')
        return
      }

      setStatus('loading')
      try {
        const res = await fetch(contributionsUrl(year), { signal: controller.signal })
        if (!res.ok) throw new Error(`Request failed with ${res.status}`)
        const json = await res.json()
        if (cancelled) return

        const contributions = (json.contributions ?? []).map(entry => ({
          date: entry.date,
          count: entry.count,
        }))
        const total = json.total?.[String(year)] ?? contributions.reduce((sum, entry) => sum + entry.count, 0)
        const entry = { contributions, total }

        cacheRef.current.set(year, entry)
        setData(entry)
        setStatus('ready')
      } catch (error) {
        if (error.name === 'AbortError' || cancelled) return
        setStatus('error')
      }
    }

    load()
    return () => {
      cancelled = true
      controller.abort()
    }
  }, [year, cacheRef])

  const graph = useMemo(() => {
    if (status !== 'ready' || !data) return null
    return {
      ...buildGraph(year, data.contributions),
      total: data.total,
    }
  }, [status, data, year])

  const monthLabels = useMemo(() => computeMonthLabels(year), [year])

  return (
    <div className="ghc-card" data-slot="github-contribution-card">
      <div className="ghc-header" data-slot="github-contribution-card-header">
        <p className="ghc-total">
          {status === 'ready' && graph ? (
            <>
              <strong>{graph.total.toLocaleString('en-US')}</strong> contributions in {year}
            </>
          ) : (
            <>
              <strong>&mdash;</strong> contributions in {year}
            </>
          )}
        </p>

        {years && (
          <YearDropdown
            years={years}
            value={year}
            onChange={setYear}
          />
        )}
      </div>

      {status === 'loading' && (
        <div className="ghc-state" aria-hidden="true">
          <div className="ghc-skeleton-grid">
            {Array.from({ length: WEEKS * 7 }, (_, i) => (
              <div key={i} className="ghc-skeleton-cell" />
            ))}
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="ghc-state">
          <span>Could not load {year} contributions</span>
          <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer">
            Open GitHub profile
          </a>
        </div>
      )}

      {status === 'ready' && graph && (
        <>
          <div className="ghc-body">
            <div className="ghc-days" aria-hidden="true">
              {['', 'Mon', '', 'Wed', '', 'Fri', ''].map((label, row) => (
                <span key={row}>{label}</span>
              ))}
            </div>

            <div className="ghc-scroll">
              <div className="ghc-board">
                <div className="ghc-months" aria-hidden="true">
                  {monthLabels.map(({ label, week }) => (
                    <span key={`${label}-${week}`} style={{ left: week * COL }}>
                      {label}
                    </span>
                  ))}
                </div>

                <div
                  className="ghc-grid"
                  role="img"
                  aria-label={`GitHub contribution heatmap for ${username}`}
                >
                  {graph.grid.map(week => (
                    <div
                      key={toDateKey(
                        week[0].date.getFullYear(),
                        week[0].date.getMonth(),
                        week[0].date.getDate(),
                      )}
                      className="ghc-week"
                    >
                      {week.map(cell => (
                        <div
                          key={toDateKey(
                            cell.date.getFullYear(),
                            cell.date.getMonth(),
                            cell.date.getDate(),
                          )}
                          className={`ghc-cell ${cell.inYear ? `ghc-l${cell.level}` : 'is-out'}`}
                          title={cell.inYear ? formatTooltip(cell.date, cell.count) : undefined}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="ghc-footer" data-slot="github-contribution-card-footer" aria-hidden="true">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map(level => (
              <span key={level} className={`ghc-cell is-swatch ghc-l${level}`} />
            ))}
            <span>More</span>
          </div>
        </>
      )}
    </div>
  )
}
