import { createRouter, createWebHistory } from 'vue-router'
import i18n from '@/i18n/index.js'
import { supportedLocales } from '@/i18n/index.js'

// 英文无前缀，其他语言路径加 /locale 前缀
function createRoutePath(path, locale = 'en') {
  if (locale === 'en') return path
  return `/${locale}${path}`
}

const baseRoutes = [
  { path: '/', name: 'home', component: () => import('@/views/HomeView.vue'), meta: { seoKey: 'home' } },
  { path: '/codes', name: 'codes', component: () => import('@/views/CodesView.vue'), meta: { seoKey: 'codes' } },
  { path: '/characters', name: 'characters', component: () => import('@/views/CharactersView.vue'), meta: { seoKey: 'characters' } },
  { path: '/map', name: 'map', component: () => import('@/views/MapView.vue'), meta: { seoKey: 'map' } },
  { path: '/events', name: 'events', component: () => import('@/views/events/EventsListView.vue'), meta: { seoKey: 'events' } },
  { path: '/events/mlp', name: 'events-mlp', component: () => import('@/views/events/MLPCollabView.vue'), meta: { seoKey: 'events-mlp' } },
  { path: '/events/winter-frost', name: 'events-winter', component: () => import('@/views/events/WinterFrostView.vue'), meta: { seoKey: 'events-winter' } },
  { path: '/wiki', name: 'wiki', component: () => import('@/views/wiki/WikiListView.vue'), meta: { seoKey: 'wiki' } },
  { path: '/wiki/recipes', name: 'wiki-recipes', component: () => import('@/views/wiki/RecipesView.vue'), meta: { seoKey: 'wiki-recipes' } },
  { path: '/wiki/achievements', name: 'wiki-achievements', component: () => import('@/views/wiki/AchievementsView.vue'), meta: { seoKey: 'wiki-achievements' } },
  { path: '/wiki/fish', name: 'wiki-fish', component: () => import('@/views/wiki/FishView.vue'), meta: { seoKey: 'wiki-fish' } },
  { path: '/wiki/insects', name: 'wiki-insects', component: () => import('@/views/wiki/InsectsView.vue'), meta: { seoKey: 'wiki-insects' } },
  { path: '/wiki/birds', name: 'wiki-birds', component: () => import('@/views/wiki/BirdsView.vue'), meta: { seoKey: 'wiki-birds' } },
  { path: '/wiki/crops', name: 'wiki-crops', component: () => import('@/views/wiki/CropsView.vue'), meta: { seoKey: 'wiki-crops' } },
  { path: '/wiki/flowers', name: 'wiki-flowers', component: () => import('@/views/wiki/FlowersView.vue'), meta: { seoKey: 'wiki-flowers' } },
  { path: '/wiki/foraging', name: 'wiki-foraging', component: () => import('@/views/wiki/ForagingView.vue'), meta: { seoKey: 'wiki-foraging' } },
  { path: '/wiki/wild-animals', name: 'wiki-wild-animals', component: () => import('@/views/wiki/WildAnimalsView.vue'), meta: { seoKey: 'wiki-wild-animals' } },
  { path: '/wiki/pets', name: 'wiki-pets', component: () => import('@/views/wiki/PetsView.vue'), meta: { seoKey: 'wiki-pets' } },
  { path: '/guide', name: 'guide-list', component: () => import('@/views/guide/GuidesListView.vue'), meta: { seoKey: 'guide-list' } },
  { path: '/guide/:addressBar', name: 'guide-detail', component: () => import('@/views/guide/GuideDetailView.vue'), meta: { seoKey: 'guide-detail' } },
  { path: '/about', name: 'about', component: () => import('@/views/legal/AboutView.vue'), meta: { seoKey: 'about' } },
  { path: '/contact', name: 'contact', component: () => import('@/views/legal/ContactView.vue'), meta: { seoKey: 'contact' } },
  { path: '/privacy', name: 'privacy', component: () => import('@/views/legal/PrivacyView.vue'), meta: { seoKey: 'privacy' } },
  { path: '/terms', name: 'terms', component: () => import('@/views/legal/TermsView.vue'), meta: { seoKey: 'terms' } },
  { path: '/cookies', name: 'cookies', component: () => import('@/views/legal/CookiesView.vue'), meta: { seoKey: 'cookies' } },
]

const routes = []
baseRoutes.forEach((route) => {
  routes.push({
    ...route,
    path: route.path,
    meta: { ...route.meta, locale: 'en' },
  })
  supportedLocales.filter((l) => l !== 'en').forEach((locale) => {
    routes.push({
      ...route,
      path: createRoutePath(route.path, locale),
      name: route.name ? `${route.name}-${locale}` : undefined,
      meta: { ...route.meta, locale },
    })
  })
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

// 从 URL 首段设置语言，保证详情页等不会误用默认语言
router.beforeEach((to, _from, next) => {
  const segments = to.path.split('/').filter(Boolean)
  const first = segments[0]
  const locale = supportedLocales.includes(first) ? first : 'en'
  i18n.global.locale.value = locale
  if (typeof document !== 'undefined') {
    document.documentElement.lang = locale
  }
  next()
})

export default router
export { baseRoutes, createRoutePath, supportedLocales }
