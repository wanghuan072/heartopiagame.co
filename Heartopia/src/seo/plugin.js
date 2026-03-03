// SEO 插件：全局更新 TDK、Canonical、OG、Twitter
export function createSEOPlugin() {
  return {
    install(app) {
      app.config.globalProperties.$updateSEO = (seoData) => {
        if (seoData.title) document.title = seoData.title
        updateMetaTag('description', seoData.description)
        updateMetaTag('keywords', seoData.keywords)
        updateMetaTag('author', seoData.author)
        updateMetaTag('og:title', seoData.title, 'property')
        updateMetaTag('og:description', seoData.description, 'property')
        updateMetaTag('og:image', seoData.image, 'property')
        updateMetaTag('og:type', seoData.type, 'property')
        updateMetaTag('twitter:title', seoData.title, 'name')
        updateMetaTag('twitter:description', seoData.description, 'name')
        updateMetaTag('twitter:image', seoData.image, 'name')
        if (seoData.canonicalUrl) updateCanonicalLink(seoData.canonicalUrl)
      }
    },
  }
}

function updateMetaTag(name, content, attribute = 'name') {
  if (!content) return
  let tag = document.querySelector(`meta[${attribute}="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function updateCanonicalLink(url) {
  if (!url) return
  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', url)
}
