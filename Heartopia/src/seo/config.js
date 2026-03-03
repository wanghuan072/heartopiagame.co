// SEO 配置文件
export const seoConfig = {
  // 域名配置
  domain: 'heartopiagame.co',
  fullDomain: 'https://heartopiagame.co',
  protocol: 'https://',

  // 社交媒体配置
  social: {
    twitter: '@heartopiaguide',
    facebook: 'heartopiaguide',
    instagram: 'heartopiaguide',
    discord: 'heartopiaguide',
  },

  // 默认 SEO 设置（仅作 fallback，页面 TDK 以 i18n seo.* 为准）
  defaults: {
    title: 'Heartopia Guide & Wiki | Recipes, Map, Codes, Characters',
    description:
      'Complete Heartopia guide: gift codes, interactive map, recipes, fish, insects, birds, crops, characters & events. Your go-to Heartopia game resource. Find everything in one place.',
    keywords:
      'Heartopia, Heartopia guide, Heartopia wiki, Heartopia map, Heartopia recipes, Heartopia codes, Heartopia characters',
    author: 'Heartopia Guide',
    image: 'https://heartopiagame.co/og-image.png',
    type: 'website',
  },

  // 站点地图：页面优先级 (0.0–1.0)
  priorities: {
    home: 1.0,
    codes: 0.9,
    characters: 0.9,
    map: 0.9,
    events: 0.9,
    'events-mlp': 0.8,
    'events-winter': 0.8,
    wiki: 0.9,
    'wiki-recipes': 0.8,
    'wiki-achievements': 0.8,
    'wiki-fish': 0.8,
    'wiki-insects': 0.8,
    'wiki-birds': 0.8,
    'wiki-crops': 0.8,
    'wiki-flowers': 0.8,
    'wiki-foraging': 0.8,
    'wiki-wild-animals': 0.8,
    'wiki-pets': 0.8,
    'guide-list': 0.9,
    'guide-detail': 0.7,
    about: 0.5,
    contact: 0.5,
    privacy: 0.4,
    terms: 0.4,
    cookies: 0.4,
  },

  // 站点地图：更新频率
  changefreq: {
    home: 'weekly',
    codes: 'weekly',
    characters: 'monthly',
    map: 'monthly',
    events: 'weekly',
    'events-mlp': 'weekly',
    'events-winter': 'weekly',
    wiki: 'weekly',
    'wiki-recipes': 'monthly',
    'wiki-achievements': 'monthly',
    'wiki-fish': 'monthly',
    'wiki-insects': 'monthly',
    'wiki-birds': 'monthly',
    'wiki-crops': 'monthly',
    'wiki-flowers': 'monthly',
    'wiki-foraging': 'monthly',
    'wiki-wild-animals': 'monthly',
    'wiki-pets': 'monthly',
    'guide-list': 'weekly',
    'guide-detail': 'monthly',
    about: 'yearly',
    contact: 'yearly',
    privacy: 'yearly',
    terms: 'yearly',
    cookies: 'yearly',
  },
}
