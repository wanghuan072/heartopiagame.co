import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

/**
 * Characters 数据 composable（动态 import 按语言加载）
 */
export function useCharactersData() {
  const { locale } = useI18n()
  const charactersData = ref([])
  const loading = ref(false)
  const error = ref(null)

  const loadData = async (lang = null) => {
    loading.value = true
    error.value = null
    const currentLang = lang || locale.value || 'en'
    try {
      const module = await import(`../data/characters/${currentLang}.js`)
      const list = module.default || module.characters || []
      charactersData.value = Array.isArray(list) ? list : []
    } catch (err) {
      if (currentLang !== 'en') {
        try {
          const fallback = await import(`../data/characters/en.js`)
          const list = fallback.default || fallback.characters || []
          charactersData.value = Array.isArray(list) ? list : []
        } catch {
          charactersData.value = []
        }
      } else {
        error.value = err.message || 'Failed to load characters data'
        charactersData.value = []
      }
    } finally {
      loading.value = false
    }
  }

  return {
    characters: charactersData,
    loading,
    error,
    loadData,
  }
}
