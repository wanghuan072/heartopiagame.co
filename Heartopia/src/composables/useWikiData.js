import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

/** Wiki 子模块：achievements, recipes, fish, insects, birds, crops, flowers, forageables, wildAnimals, pets */
const WIKI_CATEGORIES = [
  'achievements',
  'recipes',
  'fish',
  'insects',
  'birds',
  'crops',
  'flowers',
  'forageables',
  'wildAnimals',
  'pets',
]

/**
 * 加载指定类别的 wiki 数据
 */
const loadWikiCategoryData = async (category, lang = 'en') => {
  try {
    const module = await import(`../data/wiki/${category}/${lang}.js`)
    const data = module.default || module.list || []
    return Array.isArray(data) ? data : []
  } catch (err) {
    if (lang !== 'en') {
      try {
        const fallback = await import(`../data/wiki/${category}/en.js`)
        const data = fallback.default || fallback.list || []
        return Array.isArray(data) ? data : []
      } catch {
        return []
      }
    }
    return []
  }
}

/**
 * Wiki 数据 composable（按 category 动态 import，如 recipes / fish / insects 等）
 */
export function useWikiData(initialCategory) {
  const { locale } = useI18n()
  const data = ref([])
  const loading = ref(false)
  const error = ref(null)
  const categoryRef = ref(initialCategory || '')

  const loadData = async (category = categoryRef.value, lang = null) => {
    if (!category) return
    categoryRef.value = category
    loading.value = true
    error.value = null
    const currentLang = lang ?? locale.value ?? 'en'
    try {
      data.value = await loadWikiCategoryData(category, currentLang)
    } catch (err) {
      error.value = err.message || 'Failed to load wiki data'
      data.value = []
    } finally {
      loading.value = false
    }
  }

  return {
    data,
    loading,
    error,
    loadData,
    categories: WIKI_CATEGORIES,
  }
}
