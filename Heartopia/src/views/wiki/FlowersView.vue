<template>
  <div class="flowers-page">
    <div class="container">
      <section class="wiki-hero flowers-hero">
        <nav class="wiki-breadcrumb" aria-label="Breadcrumb">
          <a :href="getLocalizedPath('/')" class="wiki-crumb">
            <svg class="wiki-crumb__home-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 3.25a1 1 0 0 1 .66.25l8 7a1 1 0 1 1-1.32 1.5L19 11.28V20a1.75 1.75 0 0 1-1.75 1.75H6.75A1.75 1.75 0 0 1 5 20v-8.72l-.34.3A1 1 0 0 1 3.34 10.5l8-7a1 1 0 0 1 .66-.25Zm0 2.33L7 9.96V20c0 .14.11.25.25.25H10v-5.5c0-.97.78-1.75 1.75-1.75h.5c.97 0 1.75.78 1.75 1.75v5.5h2.75c.14 0 .25-.11.25-.25V9.96l-5-4.38Z"
              />
            </svg>
            <span>{{ t('WikiDetail.breadcrumbHome') }}</span>
          </a>
          <span class="wiki-crumb-sep">&gt;</span>
          <a :href="getLocalizedPath('/wiki')" class="wiki-crumb">{{ t('WikiDetail.breadcrumbWiki') }}</a>
          <span class="wiki-crumb-sep">&gt;</span>
          <span class="wiki-crumb-current">{{ t('WikiFlowers.breadcrumbCurrent') }}</span>
        </nav>

        <div class="wiki-hero__inner">
          <h1 class="wiki-hero__title">{{ t('WikiFlowers.heroTitle') }}</h1>
          <p class="wiki-hero__subtitle">{{ t('WikiFlowers.heroSubtitle') }}</p>
          <div class="wiki-filters">
            <label class="wiki-filter">
              <span class="wiki-filter__label">{{ t('WikiDetail.filterLevel') }}</span>
              <select v-model="filterLevel" class="wiki-select">
                <option value="">{{ t('WikiDetail.filterAll') }}</option>
                <option v-for="n in 13" :key="n" :value="n">{{ n }}</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <p class="flowers-count">{{ t('WikiFlowers.count', { n: filteredFlowers.length }) }}</p>

      <div class="flowers-list">
        <article v-for="f in filteredFlowers" :key="f.slug" class="flowers-row">
          <div class="flowers-row-img">
            <img :src="getFlowerImage(f)" :alt="f.imageAlt || f.name" class="flowers-img" loading="lazy" />
          </div>
          <div class="flowers-row-body">
            <div class="flowers-row-main">
              <span class="flowers-name">{{ f.name }}</span>
              <span class="flowers-meta">Lv.{{ f.level }}</span>
            </div>
            <div class="flowers-info">
              <div v-if="f.growthTime" class="flowers-info-row">
                <span class="flowers-tag-label">{{ t('WikiDetail.labelGrowth') }}</span>
                <span class="flowers-tag">{{ f.growthTime }}</span>
              </div>
              <div class="flowers-info-row">
                <span class="flowers-tag-label">{{ t('WikiDetail.labelSeed') }}</span>
                <span class="flowers-tag">{{ t('WikiDetail.labelBuy') }}: {{ f.seedBuy }}</span>
                <span v-if="f.seedSell != null" class="flowers-tag">{{ t('WikiDetail.labelSell') }}: {{ f.seedSell }}</span>
              </div>
            </div>
            <div v-if="f.sellPrices && f.sellPrices.length" class="flowers-sell-prices">
              <span class="flowers-sell-title">{{ t('WikiDetail.sellPricesTitle') }}</span>
              <div class="flowers-sell-list">
                <span v-for="(price, idx) in f.sellPrices" :key="idx" class="flowers-sell-item">
                  <span class="flowers-stars" :aria-label="`${idx + 1} star`">{{ '★'.repeat(idx + 1) }}</span>
                  <span class="flowers-price-num">{{ price }}</span>
                </span>
              </div>
            </div>
            <p v-else class="flowers-prices">{{ t('WikiDetail.sellEmpty') }}</p>
          </div>
        </article>
      </div>

      <section class="flowers-intro">
        <h2 class="flowers-intro__title">{{ t('WikiFlowers.introTitle') }}</h2>
        <p class="flowers-intro__lead">{{ t('WikiFlowers.introLead') }}</p>
        <p class="flowers-intro__text">{{ t('WikiFlowers.introTextPart1') }}<a :href="getLocalizedPath('/wiki')">{{ t('WikiDetail.breadcrumbWiki') }}</a>{{ t('WikiFlowers.introTextPart2') }}<a :href="getLocalizedPath('/wiki/crops')">{{ t('WikiDetail.crops') }}</a>{{ t('WikiFlowers.introTextPart3') }}<a :href="getLocalizedPath('/wiki/recipes')">{{ t('WikiDetail.recipes') }}</a>{{ t('WikiFlowers.introTextPart4') }}<a :href="getLocalizedPath('/')">{{ t('WikiDetail.homePage') }}</a>{{ t('WikiFlowers.introTextPart5') }}<a :href="getLocalizedPath('/map')">{{ t('WikiDetail.map') }}</a>{{ t('WikiFlowers.introTextPart6') }}<a :href="getLocalizedPath('/codes')">{{ t('WikiDetail.giftCodes') }}</a>{{ t('WikiFlowers.introTextPart7') }}<a :href="getLocalizedPath('/guide')">{{ t('WikiDetail.guides') }}</a>{{ t('WikiFlowers.introTextPart8') }}</p>
      </section>

      <section class="flowers-faq">
        <h2 class="flowers-faq__title">{{ t('WikiFlowers.faqTitle') }}</h2>
        <div class="flowers-faq-list">
          <div class="flowers-faq-item">
            <h3 class="flowers-faq-q">{{ t('WikiFlowers.faqQ1') }}</h3>
            <p class="flowers-faq-a">{{ t('WikiFlowers.faqA1') }}</p>
          </div>
          <div class="flowers-faq-item">
            <h3 class="flowers-faq-q">{{ t('WikiFlowers.faqQ2') }}</h3>
            <p class="flowers-faq-a">{{ t('WikiFlowers.faqA2') }}</p>
          </div>
          <div class="flowers-faq-item">
            <h3 class="flowers-faq-q">{{ t('WikiFlowers.faqQ3') }}</h3>
            <p class="flowers-faq-a">{{ t('WikiFlowers.faqA3') }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useWikiData } from '@/composables/useWikiData'
import { useLocalizedPath } from '@/composables/useLocalizedPath'

const { t, locale } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
const { data: flowers, loadData } = useWikiData('flowers')

onMounted(() => loadData('flowers'))
watch(() => locale.value, () => loadData('flowers'))

function getFlowerImage(f) {
  return f.imageSrc || f.image || `https://placehold.co/72x72/fce4ec/c2185b?text=🌸`
}

const filterLevel = ref('')

const filteredFlowers = computed(() => {
  return (flowers.value || []).filter((f) => {
    if (filterLevel.value !== '' && f.level !== Number(filterLevel.value)) return false
    return true
  })
})
</script>

<style scoped>
.flowers-page {
  padding: 0 0 4rem;
}

/* Hero accent: pink / flower theme */
.flowers-hero {
  --wiki-hero-accent: #c2185b;
  --wiki-hero-bg-from: #fdf2f8;
  --wiki-hero-bg-to: #fce4ec;
  --wiki-hero-border: rgba(194, 24, 91, 0.18);
  --wiki-hero-crumb: #6b4a5c;
  --wiki-hero-crumb-sep: #8a6a7a;
  --wiki-hero-current: #9c1d4a;
  --wiki-hero-title: #4a1d35;
  --wiki-hero-desc: #5c4a52;
  --wiki-hero-field-border: rgba(194, 24, 91, 0.28);
  --wiki-hero-field-text: #4a1d35;
  --wiki-hero-focus-ring: rgba(194, 24, 91, 0.15);
}

.flowers-count {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin: 0 0 1rem;
}

.flowers-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}
@media (max-width: 560px) {
  .flowers-list {
    grid-template-columns: 1fr;
  }
}

.flowers-row {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(74, 85, 104, 0.08);
  border-left: 4px solid rgba(194, 24, 91, 0.5);
  box-shadow: 0 2px 10px rgba(74, 85, 104, 0.04);
}

.flowers-row-img {
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(252, 228, 236, 0.6);
}
.flowers-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.flowers-row-body {
  min-width: 0;
  flex: 1;
}

.flowers-row-main {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.35rem;
}
.flowers-name {
  font-weight: 600;
  font-size: 1rem;
  color: var(--color-text);
}
.flowers-meta {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.flowers-info {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-bottom: 0.25rem;
}
.flowers-info-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
}
.flowers-tag-label {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-right: 0.15rem;
}
.flowers-tag {
  font-size: 0.75rem;
  padding: 0.15rem 0.45rem;
  border-radius: 6px;
  background: rgba(74, 85, 104, 0.08);
  color: var(--color-text-soft);
}

.flowers-sell-prices {
  margin: 0;
}
.flowers-sell-title {
  display: block;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  margin-bottom: 0.35rem;
  text-transform: uppercase;
}
.flowers-sell-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem 1rem;
}
.flowers-sell-item {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}
.flowers-stars {
  color: #d4a84b;
  font-size: 0.9rem;
  line-height: 1;
  letter-spacing: 0.02em;
}
.flowers-price-num {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}
.flowers-prices {
  margin: 0;
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.flowers-intro {
  margin-top: 2.5rem;
  padding: 1.5rem;
  border-radius: 12px;
  background: var(--color-surface);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}
.flowers-intro__title { margin: 0 0 0.75rem; font-size: 1.25rem; font-weight: 600; }
.flowers-intro__lead { margin: 0 0 0.75rem; line-height: 1.6; color: var(--color-text); }
.flowers-intro__text { margin: 0; font-size: 0.95rem; color: var(--color-text-muted); }
.flowers-intro a { color: var(--color-primary); text-decoration: none; }
.flowers-intro a:hover { text-decoration: underline; }

.flowers-faq {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}
.flowers-faq__title { margin: 0 0 1rem; font-size: 1.25rem; font-weight: 600; }
.flowers-faq-list { display: flex; flex-direction: column; gap: 0; }
.flowers-faq-item {
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-border);
}
.flowers-faq-item:last-child { border-bottom: none; }
.flowers-faq-q { margin: 0 0 0.35rem; font-size: 1rem; font-weight: 600; }
.flowers-faq-a {
  margin: 0;
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.55;
}

@media (max-width: 1024px) {
  .flowers-list { gap: 0.75rem; }
  .flowers-intro { margin-top: 1.5rem; padding: 1.25rem; }
  .flowers-faq { margin-top: 1.5rem; padding-top: 1.25rem; }
}

@media (max-width: 768px) {
  .flowers-page {
    --m-h1: 1.5rem; --m-h2: 1.3rem; --m-h3: 1.1rem; --m-p: 0.8rem; --m-line: 1.2; --m-gap: 0.7rem; --m-block: 1rem; --m-tight: 0.75rem;
  }
  .flowers-hero .wiki-hero__title { font-size: var(--m-h1); line-height: var(--m-line); }
  .flowers-hero .wiki-hero__subtitle { font-size: var(--m-p); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .flowers-hero .wiki-hero { margin-bottom: var(--m-block); padding: var(--m-block); }
  .flowers-count { font-size: var(--m-p); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .flowers-list { gap: var(--m-tight); }
  .flowers-row { padding: var(--m-block); }
  .flowers-name { font-size: var(--m-h3); line-height: var(--m-line); }
  .flowers-meta, .flowers-tag { font-size: var(--m-p); line-height: var(--m-line); }
  .flowers-intro { margin-top: var(--m-block); padding: var(--m-block); }
  .flowers-intro__title { font-size: var(--m-h2); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .flowers-intro__lead, .flowers-intro__text { font-size: var(--m-p); line-height: var(--m-line); }
  .flowers-faq { margin-top: var(--m-block); padding-top: var(--m-block); }
  .flowers-faq__title { font-size: var(--m-h2); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .flowers-faq-item { padding-bottom: var(--m-gap); }
  .flowers-faq-q { font-size: var(--m-h3); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .flowers-faq-a { font-size: var(--m-p); line-height: var(--m-line); }
}
</style>
