import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

/**
 * Guide 数据 composable（按 vein-game 方式：动态 import 按语言加载，无 index）
 */
export function useGuideData() {
  const { locale } = useI18n()
  const guidesData = ref([])
  const loading = ref(false)
  const error = ref(null)

  const loadData = async (lang = null) => {
    loading.value = true
    error.value = null
    const currentLang = lang || locale.value || 'en'
    try {
      const module = await import(`../data/guides/${currentLang}.js`)
      const guides = module.guides || module.default || []
      guidesData.value = Array.isArray(guides) ? guides : []
    } catch (err) {
      if (currentLang !== 'en') {
        try {
          const fallback = await import(`../data/guides/en.js`)
          const guides = fallback.guides || fallback.default || []
          guidesData.value = Array.isArray(guides) ? guides : []
        } catch {
          guidesData.value = []
        }
      } else {
        error.value = err.message || 'Failed to load guide data'
        guidesData.value = []
      }
    } finally {
      loading.value = false
    }
  }

  const findGuideByAddressBar = (addressBar) => {
    const path = addressBar.startsWith('/') ? addressBar.replace(/^\/guide\/?/, '') : addressBar
    return guidesData.value.find((g) => (g.addressBar || '').replace(/^\//, '') === path) || null
  }

  const findGuideById = (id) => {
    return guidesData.value.find((g) => g.id === id) || null
  }

  return {
    guides: guidesData,
    loading,
    error,
    loadData,
    findGuideByAddressBar,
    findGuideById,
  }
}
