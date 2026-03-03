import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
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

/**
 * 根据路由 meta.seoKey 从 i18n 解析 TDK，自动设置 TDK、Canonical、结构化数据
 */
export function useAutoSEO() {
  const { setSEO, generateStructuredData, addStructuredData } = useSEO()
  const route = useRoute()
  const { t, locale } = useI18n()

  const handleSEO = () => {
    const seoKey = route.meta?.seoKey
    const defaults = { ...seoConfig.defaults }

    const finalSEO = seoKey
      ? {
          ...defaults,
          title: t(`seo.${seoKey}.title`) || defaults.title,
          description: t(`seo.${seoKey}.description`) || defaults.description,
          keywords: t(`seo.${seoKey}.keywords`) || defaults.keywords,
          type: 'website',
        }
      : defaults

    setSEO(finalSEO)
    const pageType = finalSEO.type === 'article' ? 'Article' : 'WebPage'
    addStructuredData(generateStructuredData(pageType))
  }

  watch(
    () => [route.fullPath, locale.value],
    () => handleSEO(),
    { immediate: true }
  )
}
