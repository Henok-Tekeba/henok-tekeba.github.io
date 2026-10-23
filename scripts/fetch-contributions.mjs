/*
 * Prebuild snapshot of GitHub contributions.
 *
 * Fetches yearly contribution counts from the GitHub contributions API and
 * writes public/contributions.json, so the site's GithubContributionCard can
 * always render from the bundled snapshot even when the runtime API request
 * fails or hangs. The snapshot is regenerated on every build; years already
 * known to GitHub keep their data so a flaky network never breaks a build.
 */
import { readFile, writeFile } from 'node:fs/promises'

const username = 'Henok-Tekeba'
const apiUrl = year => `https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`
const snapshotPath = new URL('../public/contributions.json', import.meta.url)

const currentYear = new Date().getFullYear()
const previous = await readFile(snapshotPath, 'utf8').then(JSON.parse).catch(() => null)
const years = await collectYears()

const next = { generatedAt: new Date().toISOString(), years: {} }
for (const year of years) {
  const fresh = await fetchYear(year)
  if (fresh) {
    next.years[year] = fresh
  } else if (previous?.years?.[year]) {
    next.years[year] = previous.years[year]
  }
}

await writeFile(snapshotPath, JSON.stringify(next))

console.log(`contributions snapshot: ${Object.keys(next.years).join(', ') || 'none'}`)

async function collectYears() {
  const known = new Set([currentYear])

  for (const key of Object.keys(previous?.years ?? {})) {
    const year = Number(key)
    if (Number.isFinite(year)) known.add(year)
  }

  const profile = await fetchProfile()
  if (profile?.created_at) {
    const created = new Date(profile.created_at).getFullYear()
    if (Number.isFinite(created)) {
      for (let y = currentYear; y >= created; y -= 1) known.add(y)
    }
  }

  return [...known].filter(y => y >= 1 && y <= currentYear).sort((a, b) => b - a)
}

async function fetchProfile() {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`)
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}

async function fetchYear(year) {
  const attempts = 3

  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      const res = await fetch(apiUrl(year))
      if (!res.ok) throw new Error(`Request failed with ${res.status}`)

      const json = await res.json()
      const entries = (json.contributions ?? []).map(entry => ({
        date: entry.date,
        count: entry.count,
      }))
      if (!entries.length) throw new Error('Empty response')
      return entries
    } catch {
      await new Promise(resolve => setTimeout(resolve, 1000 * (attempt + 1)))
    }
  }
  return null
}
