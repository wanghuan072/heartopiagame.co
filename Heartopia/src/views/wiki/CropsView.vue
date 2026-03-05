<template>
  <div class="crops-page">
    <div class="container">
      <section class="wiki-hero crops-hero">
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
          <span class="wiki-crumb-current">{{ t('WikiCrops.breadcrumbCurrent') }}</span>
        </nav>

        <div class="wiki-hero__inner">
          <h1 class="wiki-hero__title">{{ t('WikiCrops.heroTitle') }}</h1>
          <p class="wiki-hero__subtitle">{{ t('WikiCrops.heroSubtitle') }}</p>
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

      <p class="crops-count">{{ t('WikiCrops.count', { n: filteredCrops.length }) }}</p>

      <div class="crops-list">
        <article v-for="c in filteredCrops" :key="c.slug" class="crops-row">
          <div class="crops-row-img">
            <img :src="getCropImage(c)" :alt="c.imageAlt || c.name" class="crops-img" loading="lazy" />
          </div>
          <div class="crops-row-body">
            <div class="crops-row-main">
              <span class="crops-name">{{ c.name }}</span>
              <span class="crops-meta">Lv.{{ c.level }}</span>
            </div>
            <div class="crops-info">
              <div v-if="c.growthTime" class="crops-info-row">
                <span class="crops-tag-label">{{ t('WikiDetail.labelGrowth') }}</span>
                <span class="crops-tag">{{ c.growthTime }}</span>
              </div>
              <div class="crops-info-row">
                <span class="crops-tag-label">{{ t('WikiDetail.labelSeed') }}</span>
                <span class="crops-tag">{{ t('WikiDetail.labelBuy') }}: {{ c.seedBuy }}</span>
                <span v-if="c.seedSell != null" class="crops-tag">{{ t('WikiDetail.labelSell') }}: {{ c.seedSell }}</span>
              </div>
            </div>
            <div v-if="c.sellPrices && c.sellPrices.length" class="crops-sell-prices">
              <span class="crops-sell-title">{{ t('WikiDetail.sellPricesTitle') }}</span>
              <div class="crops-sell-list">
                <span v-for="(price, idx) in c.sellPrices" :key="idx" class="crops-sell-item">
                  <span class="crops-stars" :aria-label="`${idx + 1} star`">{{ '★'.repeat(idx + 1) }}</span>
                  <span class="crops-price-num">{{ price }}</span>
                </span>
              </div>
            </div>
            <p v-else class="crops-prices">{{ t('WikiDetail.sellEmpty') }}</p>
          </div>
        </article>
      </div>

      <section class="crops-intro">
        <h2 class="crops-intro__title">{{ t('WikiCrops.introTitle') }}</h2>
        <p class="crops-intro__lead">{{ t('WikiCrops.introLead') }}</p>
        <p class="crops-intro__text">{{ t('WikiCrops.introTextPart1') }}<a :href="getLocalizedPath('/wiki')">{{ t('WikiDetail.breadcrumbWiki') }}</a>{{ t('WikiCrops.introTextPart2') }}<a :href="getLocalizedPath('/wiki/recipes')">{{ t('WikiDetail.recipes') }}</a>{{ t('WikiCrops.introTextPart3') }}<a :href="getLocalizedPath('/wiki/fish')">{{ t('WikiDetail.fish') }}</a>{{ t('WikiCrops.introTextPart4') }}<a :href="getLocalizedPath('/')">{{ t('WikiDetail.homePage') }}</a>{{ t('WikiCrops.introTextPart5') }}<a :href="getLocalizedPath('/map')">{{ t('WikiDetail.map') }}</a>{{ t('WikiCrops.introTextPart6') }}<a :href="getLocalizedPath('/codes')">{{ t('WikiDetail.giftCodes') }}</a>{{ t('WikiCrops.introTextPart7') }}<a :href="getLocalizedPath('/guide')">{{ t('WikiDetail.guides') }}</a>{{ t('WikiCrops.introTextPart8') }}</p>
      </section>

      <section class="crops-faq">
        <h2 class="crops-faq__title">{{ t('WikiCrops.faqTitle') }}</h2>
        <div class="crops-faq-list">
          <div class="crops-faq-item">
            <h3 class="crops-faq-q">{{ t('WikiCrops.faqQ1') }}</h3>
            <p class="crops-faq-a">{{ t('WikiCrops.faqA1') }}</p>
          </div>
          <div class="crops-faq-item">
            <h3 class="crops-faq-q">{{ t('WikiCrops.faqQ2') }}</h3>
            <p class="crops-faq-a">{{ t('WikiCrops.faqA2') }}</p>
          </div>
          <div class="crops-faq-item">
            <h3 class="crops-faq-q">{{ t('WikiCrops.faqQ3') }}</h3>
            <p class="crops-faq-a">{{ t('WikiCrops.faqA3') }}</p>
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
const { data: crops, loadData } = useWikiData('crops')

onMounted(() => loadData('crops'))
watch(() => locale.value, () => loadData('crops'))

function getCropImage(c) {
  return c.imageSrc || c.image || `https://placehold.co/72x72/e8f0e8/6B9B7B?text=🌱`
}

const filterLevel = ref('')

const filteredCrops = computed(() => {
  return (crops.value || []).filter((c) => {
    if (filterLevel.value !== '' && c.level !== Number(filterLevel.value)) return false
    return true
  })
})
</script>

<style scoped>
.crops-page {
  padding: 0 0 4rem;
}

/* Hero accent: green / farming theme */
.crops-hero {
  --wiki-hero-accent: #2d7d4a;
  --wiki-hero-bg-from: #f0f8f2;
  --wiki-hero-bg-to: #e6f3ea;
  --wiki-hero-border: rgba(45, 125, 74, 0.18);
  --wiki-hero-crumb: #4a5c52;
  --wiki-hero-crumb-sep: #6a7a70;
  --wiki-hero-current: #1d5c35;
  --wiki-hero-title: #1d3d28;
  --wiki-hero-desc: #4a5c52;
  --wiki-hero-field-border: rgba(45, 125, 74, 0.28);
  --wiki-hero-field-text: #1d3d28;
  --wiki-hero-focus-ring: rgba(45, 125, 74, 0.15);
}

.crops-count {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin: 0 0 1rem;
}

.crops-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}
@media (max-width: 560px) {
  .crops-list {
    grid-template-columns: 1fr;
  }
}

.crops-row {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(74, 85, 104, 0.08);
  border-left: 4px solid rgba(45, 125, 74, 0.5);
  box-shadow: 0 2px 10px rgba(74, 85, 104, 0.04);
}

.crops-row-img {
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(230, 243, 234, 0.6);
}
.crops-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.crops-row-body {
  min-width: 0;
  flex: 1;
}

.crops-row-main {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.35rem;
}
.crops-name {
  font-weight: 600;
  font-size: 1rem;
  color: var(--color-text);
}
.crops-meta {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.crops-info {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-bottom: 0.25rem;
}
.crops-info-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
}
.crops-tag-label {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-right: 0.15rem;
}
.crops-tag {
  font-size: 0.75rem;
  padding: 0.15rem 0.45rem;
  border-radius: 6px;
  background: rgba(74, 85, 104, 0.08);
  color: var(--color-text-soft);
}

.crops-sell-prices {
  margin: 0;
}
.crops-sell-title {
  display: block;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  margin-bottom: 0.35rem;
  text-transform: uppercase;
}
.crops-sell-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem 1rem;
}
.crops-sell-item {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}
.crops-stars {
  color: #d4a84b;
  font-size: 0.9rem;
  line-height: 1;
  letter-spacing: 0.02em;
}
.crops-price-num {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}
.crops-prices {
  margin: 0;
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.crops-intro {
  margin-top: 2.5rem;
  padding: 1.5rem;
  border-radius: 12px;
  background: var(--color-surface);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}
.crops-intro__title { margin: 0 0 0.75rem; font-size: 1.25rem; font-weight: 600; }
.crops-intro__lead { margin: 0 0 0.75rem; line-height: 1.6; color: var(--color-text); }
.crops-intro__text { margin: 0; font-size: 0.95rem; color: var(--color-text-muted); }
.crops-intro a { color: var(--color-primary); text-decoration: none; }
.crops-intro a:hover { text-decoration: underline; }

.crops-faq {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}
.crops-faq__title { margin: 0 0 1rem; font-size: 1.25rem; font-weight: 600; }
.crops-faq-list { display: flex; flex-direction: column; gap: 0; }
.crops-faq-item {
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-border);
}
.crops-faq-item:last-child { border-bottom: none; }
.crops-faq-q { margin: 0 0 0.35rem; font-size: 1rem; font-weight: 600; }
.crops-faq-a {
  margin: 0;
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.55;
}

@media (max-width: 1024px) {
  .crops-list { gap: 0.75rem; }
  .crops-intro { margin-top: 1.5rem; padding: 1.25rem; }
  .crops-faq { margin-top: 1.5rem; padding-top: 1.25rem; }
}

@media (max-width: 768px) {
  .crops-page {
    --m-h1: 1.5rem; --m-h2: 1.3rem; --m-h3: 1.1rem; --m-p: 0.8rem; --m-line: 1.2; --m-gap: 0.7rem; --m-block: 1rem; --m-tight: 0.75rem;
  }
  .crops-hero .wiki-hero__title { font-size: var(--m-h1); line-height: var(--m-line); }
  .crops-hero .wiki-hero__subtitle { font-size: var(--m-p); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .crops-hero .wiki-hero { margin-bottom: var(--m-block); padding: var(--m-block); }
  .crops-count { font-size: var(--m-p); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .crops-list { gap: var(--m-tight); }
  .crops-row { padding: var(--m-block); }
  .crops-name { font-size: var(--m-h3); line-height: var(--m-line); }
  .crops-meta, .crops-info, .crops-tag { font-size: var(--m-p); line-height: var(--m-line); }
  .crops-intro { margin-top: var(--m-block); padding: var(--m-block); }
  .crops-intro__title { font-size: var(--m-h2); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .crops-intro__lead, .crops-intro__text { font-size: var(--m-p); line-height: var(--m-line); }
  .crops-faq { margin-top: var(--m-block); padding-top: var(--m-block); }
  .crops-faq__title { font-size: var(--m-h2); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .crops-faq-item { padding-bottom: var(--m-gap); }
  .crops-faq-q { font-size: var(--m-h3); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .crops-faq-a { font-size: var(--m-p); line-height: var(--m-line); }
}
</style>
