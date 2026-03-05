<template>
  <div class="guide-detail-page">
    <div class="container">
      <a :href="getLocalizedPath('/guide')" class="guide-detail-back">← Guides</a>

      <template v-if="guide">
        <header class="guide-detail-hero">
          <h1 class="guide-detail-title">{{ guide.title }}</h1>
          <p class="guide-detail-desc">{{ guide.description }}</p>
          <time class="guide-detail-date" :datetime="guide.publishDate">{{ formatDate(guide.publishDate) }}</time>
          <div class="guide-detail-img-wrap">
            <img :src="guide.imageSrc" :alt="guide.imageAlt" class="guide-detail-img" />
          </div>
        </header>

        <article class="guide-detail-body" v-html="guide.detailsHtml"></article>
      </template>

      <div v-else class="guide-detail-missing">
        <h1>Guide not found</h1>
        <p>This guide may have been removed or the link is incorrect.</p>
        <a href="/guide" class="guide-detail-back">← Back to Guides</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useGuideData } from '@/composables/useGuideData'
import { useLocalizedPath } from '@/composables/useLocalizedPath'
import { useSEO } from '@/seo/composables.js'

const route = useRoute()
const { locale } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
const { guides, loadData, findGuideByAddressBar } = useGuideData()
const { setSEO } = useSEO()
const guide = ref(null)

async function initGuide() {
  await loadData()
  guide.value = findGuideByAddressBar(route.params.addressBar)
}

onMounted(() => initGuide())
watch(() => route.params.addressBar, () => initGuide())
watch(() => route.fullPath, (cur, prev) => { if (prev && cur !== prev) initGuide() })
watch(() => locale.value, () => initGuide())

watch(
  guide,
  (g) => {
    if (g?.seo && (g.seo.title || g.seo.description || g.seo.keywords)) {
      setSEO({
        title: g.seo.title,
        description: g.seo.description,
        keywords: g.seo.keywords,
      })
    }
  },
  { immediate: true }
)

function formatDate(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<style scoped>
.guide-detail-page {
  min-height: 100vh;
  padding: 2rem 0 4rem;
  background: linear-gradient(180deg, #f8fbfa 0%, #fff 100%);
}

.guide-detail-back {
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-primary-dark);
  margin-bottom: 1.5rem;
  text-decoration: none;
}
.guide-detail-back:hover {
  text-decoration: underline;
}

.guide-detail-hero {
  margin-bottom: 2rem;
}
.guide-detail-title {
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 0.5rem;
  letter-spacing: -0.02em;
  line-height: 1.25;
}
.guide-detail-desc {
  font-size: 1.05rem;
  color: var(--color-text-soft);
  margin: 0 0 0.75rem;
  line-height: 1.55;
}
.guide-detail-date {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin-bottom: 1.25rem;
  display: block;
}
.guide-detail-img-wrap {
  border-radius: 16px;
  overflow: hidden;
  background: rgba(74, 85, 104, 0.06);
  aspect-ratio: 16 / 9;
  max-width: 800px;
}
.guide-detail-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Prose for v-html content */
.guide-detail-body {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text);
}
.guide-detail-body :deep(h2) {
  font-size: 1.35rem;
  font-weight: 600;
  margin: 2rem 0 0.75rem;
  color: var(--color-text);
}
.guide-detail-body :deep(h2:first-child) {
  margin-top: 0;
}
.guide-detail-body :deep(h3) {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 1.5rem 0 0.5rem;
  color: var(--color-text);
}
.guide-detail-body :deep(p) {
  margin: 0 0 1rem;
  color: var(--color-text-soft);
}
.guide-detail-body :deep(ul) {
  margin: 0 0 1rem;
  padding-left: 1.5rem;
}
.guide-detail-body :deep(li) {
  margin-bottom: 0.35rem;
}
.guide-detail-body :deep(a) {
  color: var(--color-primary-dark);
  text-decoration: none;
}
.guide-detail-body :deep(a:hover) {
  text-decoration: underline;
}
.guide-detail-body :deep(strong) {
  font-weight: 600;
  color: var(--color-text);
}

.guide-detail-missing {
  padding: 3rem 0;
  text-align: center;
}
.guide-detail-missing h1 {
  font-size: 1.5rem;
  margin: 0 0 0.5rem;
}
.guide-detail-missing p {
  color: var(--color-text-soft);
  margin: 0 0 1rem;
}

@media (max-width: 1024px) {
  .guide-detail-page {
    padding: 1.5rem 0 3rem;
  }
  .guide-detail-hero {
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 768px) {
  .guide-detail-page {
    --m-h1: 1.5rem; --m-h2: 1.3rem; --m-h3: 1.1rem; --m-p: 0.8rem; --m-line: 1.2; --m-gap: 0.7rem; --m-block: 1rem;
    padding: var(--m-block) 0;
  }
  .guide-detail-back {
    margin-bottom: var(--m-gap);
    font-size: var(--m-p);
  }
  .guide-detail-hero {
    margin-bottom: var(--m-block);
  }
  .guide-detail-title {
    font-size: var(--m-h1);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .guide-detail-desc {
    font-size: var(--m-p);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .guide-detail-date {
    font-size: var(--m-p);
    margin-bottom: var(--m-gap);
  }
  .guide-detail-body {
    font-size: var(--m-p);
    line-height: var(--m-line);
  }
  .guide-detail-body :deep(h2) {
    font-size: var(--m-h2);
    margin: var(--m-block) 0 var(--m-gap);
    line-height: var(--m-line);
  }
  .guide-detail-body :deep(h3) {
    font-size: var(--m-h3);
    margin: var(--m-gap) 0 var(--m-gap);
    line-height: var(--m-line);
  }
  .guide-detail-body :deep(p) {
    margin: 0 0 var(--m-gap);
  }
  .guide-detail-missing h1 {
    font-size: var(--m-h1);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .guide-detail-missing p {
    font-size: var(--m-p);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
}
</style>
