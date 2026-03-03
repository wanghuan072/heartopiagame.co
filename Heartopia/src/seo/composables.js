import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import i18n from '@/i18n/index.js'
import { seoConfig } from './config.js'

/**
 * SEO composable：设置 TDK、Canonical、OG/Twitter、结构化数据
 */
export function useSEO() {
  const route = useRoute()
  const currentSEO = ref({})

  const currentPath = computed(() => route.path)

  const canonicalUrl = computed(() => {
    return `${seoConfig.fullDomain}${currentPath.value}`
  })

  const setSEO = (seoData) => {
    currentSEO.value = {
      ...seoConfig.defaults,
      ...seoData,
    }
    updateMetaTags()
  }

  const updateMetaTags = () => {
    if (typeof document === 'undefined') return
    const seo = currentSEO.value

    document.title = seo.title || seoConfig.defaults.title

    updateMetaTag('description', seo.description)
    updateMetaTag('keywords', seo.keywords)
    updateMetaTag('author', seo.author)

    updateMetaTag('og:title', seo.title, 'property')
    updateMetaTag('og:description', seo.description, 'property')
    updateMetaTag('og:image', seo.image, 'property')
    updateMetaTag('og:url', canonicalUrl.value, 'property')
    updateMetaTag('og:type', seo.type || 'website', 'property')
    updateMetaTag('og:site_name', 'Heartopia Guide', 'property')

    updateMetaTag('twitter:card', 'summary_large_image', 'name')
    updateMetaTag('twitter:title', seo.title, 'name')
    updateMetaTag('twitter:description', seo.description, 'name')
    updateMetaTag('twitter:image', seo.image, 'name')
    updateMetaTag('twitter:site', seoConfig.social.twitter, 'name')

    updateCanonicalLink()
  }

  const updateMetaTag = (name, content, attribute = 'name') => {
    if (!content) return
    let tag = document.querySelector(`meta[${attribute}="${name}"]`)
    if (tag) {
      tag.setAttribute('content', content)
    } else {
      tag = document.createElement('meta')
      tag.setAttribute(attribute, name)
      tag.setAttribute('content', content)
      document.head.appendChild(tag)
    }
  }

  const updateCanonicalLink = () => {
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl.value)
  }

  const generateStructuredData = (pageType = 'WebPage') => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': pageType,
      name: currentSEO.value.title,
      description: currentSEO.value.description,
      url: canonicalUrl.value,
      publisher: {
        '@type': 'Organization',
        name: 'Heartopia Guide',
        url: seoConfig.fullDomain,
        logo: {
          '@type': 'ImageObject',
          url: `${seoConfig.fullDomain}/og-image.png`,
        },
        sameAs: [
          `https://twitter.com/${seoConfig.social.twitter.replace('@', '')}`,
          `https://facebook.com/${seoConfig.social.facebook}`,
          `https://instagram.com/${seoConfig.social.instagram}`,
          `https://discord.gg/${seoConfig.social.discord}`,
        ],
      },
    }

    if (pageType === 'Article') {
      baseData.author = {
        '@type': 'Organization',
        name: 'Heartopia Guide',
      }
      baseData.datePublished = new Date().toISOString()
      baseData.dateModified = new Date().toISOString()
    }

    return baseData
  }

  const addStructuredData = (data) => {
    if (typeof document === 'undefined') return
    const existing = document.querySelector('script[type="application/ld+json"]')
    if (existing) existing.remove()
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(data)
    document.head.appendChild(script)
  }

  return {
    currentSEO,
    currentPath,
    canonicalUrl,
    setSEO,
    updateMetaTags,
    generateStructuredData,
    addStructuredData,
  }
}

/** 自动 SEO：从 i18n seo.* 读取 TDK 替换默认值（参考 vein-game） */
export function useAutoSEO() {
  const { setSEO, generateStructuredData, addStructuredData } = useSEO()
  const route = useRoute()
  const { locale } = useI18n()

  const handleSEO = () => {
    const seoKey = route.meta?.seoKey
    let finalSEO = { ...seoConfig.defaults }

    if (seoKey) {
      const localeMessages = i18n.global.getLocaleMessage(locale.value) || i18n.global.getLocaleMessage('en')
      const seo = localeMessages?.seo?.[seoKey]
      if (seo?.title) {
        finalSEO = { ...finalSEO, title: seo.title, description: seo.description, keywords: seo.keywords }
      }
    }

    setSEO(finalSEO)
    addStructuredData(generateStructuredData('WebPage'))
  }

  watch([() => route.fullPath, locale], handleSEO, { immediate: true })
}
