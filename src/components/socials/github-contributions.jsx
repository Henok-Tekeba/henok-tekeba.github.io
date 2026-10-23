import { useEffect, useState } from 'react'

import { GithubContributionCard } from './github-contribution'
import './socials.css'

const username = 'Henok-Tekeba'
const liveUrl = year => `https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`

/*
 * Real-data wiring for GithubContributionCard.
 *
 * The card stays exactly as published by Opensource UI and follows its
 * documented usage: <GithubContributionCard username="..." contributions=... />.
 * Data comes from the bundled snapshot (public/contributions.json, refreshed on
 * every build) so the graph always renders, with a live API refresh of the
 * current year on top so counts stay current between deploys.
 */
export default function GithubContributions() {
  const [contributions, setContributions] = useState(null)
  const [snapshotFailed, setSnapshotFailed] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const res = await fetch('/contributions.json')
        if (!res.ok) throw new Error(`Snapshot failed with ${res.status}`)
        const snapshot = await res.json()
        if (cancelled) return
        setContributions(Object.values(snapshot.years ?? {}).flat())
      } catch {
        if (!cancelled) setSnapshotFailed(true)
        return
      }

      try {
        const currentYear = String(new Date().getFullYear())
        const res = await fetch(liveUrl(new Date().getFullYear()), {
          signal: AbortSignal.timeout(8000),
        })
        if (!res.ok) throw new Error(`Request failed with ${res.status}`)
        const json = await res.json()
        const fresh = (json.contributions ?? []).map(entry => ({
          date: entry.date,
          count: entry.count,
        }))
        if (!fresh.length || cancelled) return

        setContributions(prev => [
          ...(prev ?? []).filter(entry => !entry.date.startsWith(currentYear)),
          ...fresh,
        ])
      } catch {
        // Snapshot data stands.
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  if (!contributions) {
    if (!snapshotFailed) return null
    return (
      <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer">
        View contributions on GitHub
      </a>
    )
  }

  return <GithubContributionCard username={username} contributions={contributions} className="max-w-none w-full" />
}
