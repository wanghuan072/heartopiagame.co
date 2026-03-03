import { useRoute } from 'vue-router'
import { supportedLocales } from '@/i18n/index.js'

/**
 * 从路径中解析当前语言（与 router 约定一致：首段为语言码则为非默认语言）
 */
export function extractLocaleFromPath(path) {
  const segments = path.split('/').filter(Boolean)
  const first = segments[0]
  if (supportedLocales.includes(first)) {
    return first
  }
  return 'en'
}

/**
 * 获取带当前语言前缀的路径（用于所有站内链接，避免进入详情页等被重置为默认语言）
 */
export function useLocalizedPath() {
  const route = useRoute()

  const getLocalizedPath = (path) => {
    const currentLocale = extractLocaleFromPath(route.path)
    if (currentLocale === 'en') {
      return path
    }
    return `/${currentLocale}${path}`
  }

  const getCurrentLocale = () => extractLocaleFromPath(route.path)

  return {
    getLocalizedPath,
    getCurrentLocale,
    supportedLocales,
  }
}
