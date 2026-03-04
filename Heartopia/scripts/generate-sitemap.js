import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import { seoConfig } from '../src/seo/config.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fullDomain = seoConfig.fullDomain

/** 与 i18n 一致：默认英语无前缀，其他语言 URL 加 /de/、/zh/、/th/ 等 */
const supportedLocales = ['en', 'de', 'fa', 'id', 'es', 'pt', 'zh', 'th']

function createLocalizedPath(routePath, locale = 'en') {
  if (locale === 'en') return routePath
  return `/${locale}${routePath}`
}

const staticRoutes = [
  { path: '/', name: 'home' },
  { path: '/codes', name: 'codes' },
  { path: '/characters', name: 'characters' },
  { path: '/map', name: 'map' },
  { path: '/events', name: 'events' },
  { path: '/events/mlp', name: 'events-mlp' },
  { path: '/events/winter-frost', name: 'events-winter' },
  { path: '/wiki', name: 'wiki' },
  { path: '/wiki/recipes', name: 'wiki-recipes' },
  { path: '/wiki/achievements', name: 'wiki-achievements' },
  { path: '/wiki/fish', name: 'wiki-fish' },
  { path: '/wiki/insects', name: 'wiki-insects' },
  { path: '/wiki/birds', name: 'wiki-birds' },
  { path: '/wiki/crops', name: 'wiki-crops' },
  { path: '/wiki/flowers', name: 'wiki-flowers' },
  { path: '/wiki/foraging', name: 'wiki-foraging' },
  { path: '/wiki/wild-animals', name: 'wiki-wild-animals' },
  { path: '/wiki/pets', name: 'wiki-pets' },
  { path: '/guide', name: 'guide-list' },
  { path: '/about', name: 'about' },
  { path: '/contact', name: 'contact' },
  { path: '/privacy', name: 'privacy' },
  { path: '/terms', name: 'terms' },
  { path: '/cookies', name: 'cookies' },
]

function getPriority(name) {
  return (seoConfig.priorities && seoConfig.priorities[name]) ?? 0.8
}

function getChangefreq(name) {
  return (seoConfig.changefreq && seoConfig.changefreq[name]) ?? 'monthly'
}

function urlNode(loc, lastmod, changefreq, priority) {
  const p = (priority ?? 0.8).toFixed(1)
  return `  <url>
    <loc>${fullDomain}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${p}</priority>
  </url>`
}

async function loadGuides(locale) {
  try {
    const mod = await import(`../src/data/guides/${locale}.js`)
    const list = mod.default || mod.guides || []
    return Array.isArray(list) ? list : []
  } catch (e) {
    return []
  }
}

async function generate() {
  const lastmod = new Date().toISOString().split('T')[0]

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

  for (const locale of supportedLocales) {
    for (const r of staticRoutes) {
      const localizedPath = createLocalizedPath(r.path, locale)
      xml += `\n${urlNode(localizedPath, lastmod, getChangefreq(r.name), getPriority(r.name))}`
    }
  }

  for (const locale of supportedLocales) {
    const guides = await loadGuides(locale)
    for (const g of guides) {
      if (!g || !g.addressBar) continue
      const slug = g.addressBar.replace(/^\/+|\/+$/g, '')
      const guidePath = createLocalizedPath(`/guide/${slug}`, locale)
      const date = g.publishDate ? g.publishDate.split('T')[0] : lastmod
      xml += `\n${urlNode(guidePath, date, 'monthly', 0.7)}`
    }
  }

  xml += '\n</urlset>'

  const publicPath = path.join(__dirname, '../public/sitemap.xml')
  const publicDir = path.dirname(publicPath)
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }
  fs.writeFileSync(publicPath, xml, 'utf8')
  console.log('✅ Sitemap written to public/sitemap.xml')

  const count = (xml.match(/<url>/g) || []).length
  console.log(`   Total URLs: ${count} (${supportedLocales.length} locales)`)
}

generate().catch((err) => {
  console.error(err)
  process.exit(1)
})
