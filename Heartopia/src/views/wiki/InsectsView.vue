<template>
  <div class="insects-page">
    <div class="container">
      <section class="wiki-hero insects-hero">
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
          <span class="wiki-crumb-current">{{ t('WikiInsects.breadcrumbCurrent') }}</span>
        </nav>

        <div class="wiki-hero__inner">
          <h1 class="wiki-hero__title">{{ t('WikiInsects.heroTitle') }}</h1>
          <p class="wiki-hero__subtitle">{{ t('WikiInsects.heroSubtitle') }}</p>
          <div class="wiki-filters">
            <label class="wiki-filter">
              <span class="wiki-filter__label">{{ t('WikiDetail.filterLevel') }}</span>
              <select v-model="filterLevel" class="wiki-select">
                <option value="">{{ t('WikiDetail.filterAll') }}</option>
                <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
              </select>
            </label>
            <label class="wiki-filter">
              <span class="wiki-filter__label">{{ t('WikiDetail.filterType') }}</span>
              <select v-model="filterType" class="wiki-select">
                <option value="">{{ t('WikiDetail.filterAll') }}</option>
                <option v-for="ty in insectTypes" :key="ty" :value="ty">{{ ty }}</option>
              </select>
            </label>
            <label class="wiki-filter">
              <span class="wiki-filter__label">{{ t('WikiDetail.filterLocation') }}</span>
              <select v-model="filterLocation" class="wiki-select">
                <option value="">{{ t('WikiDetail.filterAll') }}</option>
                <option v-for="loc in insectLocations" :key="loc" :value="loc">{{ loc }}</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <p class="insects-count">{{ t('WikiInsects.count', { n: filteredInsects.length }) }}</p>

      <div class="insects-list">
        <article v-for="i in filteredInsects" :key="i.slug" class="insects-row">
          <div class="insects-row-img">
            <img :src="getInsectImage(i)" :alt="i.imageAlt || i.name" class="insects-img" loading="lazy" />
          </div>
          <div class="insects-row-body">
            <div class="insects-row-main">
              <span class="insects-name">{{ i.name }}</span>
              <span class="insects-meta">Lv.{{ i.level }} · {{ i.location }}</span>
            </div>
            <div class="insects-tags">
              <div class="insects-tags-row">
                <span class="insects-tag-label">{{ t('WikiDetail.labelType') }}</span>
                <span class="insects-tag">{{ i.type }}</span>
              </div>
              <div class="insects-tags-row">
                <span class="insects-tag-label">{{ t('WikiDetail.labelWeather') }}</span>
                <span v-for="w in i.weather" :key="w" class="insects-tag">{{ w }}</span>
              </div>
              <div class="insects-tags-row">
                <span class="insects-tag-label">{{ t('WikiDetail.labelTime') }}</span>
                <span v-for="tm in i.time" :key="tm" class="insects-tag">{{ tm }}</span>
              </div>
            </div>
            <div v-if="i.sellPrices && i.sellPrices.length" class="insects-sell-prices">
              <span class="insects-sell-title">{{ t('WikiDetail.sellPricesTitle') }}</span>
              <div class="insects-sell-list">
                <span v-for="(price, idx) in i.sellPrices" :key="idx" class="insects-sell-item">
                  <span class="insects-stars" :aria-label="`${idx + 1} star`">{{ '★'.repeat(idx + 1) }}</span>
                  <span class="insects-price-num">{{ price }}</span>
                </span>
              </div>
            </div>
            <p v-else class="insects-prices">{{ t('WikiDetail.sellEmpty') }}</p>
          </div>
        </article>
      </div>

      <section class="insects-intro">
        <h2 class="insects-intro__title">{{ t('WikiInsects.introTitle') }}</h2>
        <p class="insects-intro__lead">{{ t('WikiInsects.introLead') }}</p>
        <p class="insects-intro__text">{{ t('WikiInsects.introTextPart1') }}<a :href="getLocalizedPath('/wiki')">{{ t('WikiDetail.breadcrumbWiki') }}</a>{{ t('WikiInsects.introTextPart2') }}<a :href="getLocalizedPath('/wiki/fish')">{{ t('WikiDetail.fish') }}</a>{{ t('WikiInsects.introTextPart3') }}<a :href="getLocalizedPath('/wiki/birds')">{{ t('WikiDetail.birds') }}</a>{{ t('WikiInsects.introTextPart3') }}<a :href="getLocalizedPath('/wiki/crops')">{{ t('WikiDetail.crops') }}</a>{{ t('WikiInsects.introTextPart4') }}<a :href="getLocalizedPath('/')">{{ t('WikiDetail.homePage') }}</a>{{ t('WikiInsects.introTextPart5') }}<a :href="getLocalizedPath('/map')">{{ t('WikiDetail.map') }}</a>{{ t('WikiInsects.introTextPart6') }}<a :href="getLocalizedPath('/codes')">{{ t('WikiDetail.giftCodes') }}</a>{{ t('WikiInsects.introTextPart7') }}<a :href="getLocalizedPath('/guide')">{{ t('WikiDetail.guides') }}</a>{{ t('WikiInsects.introTextPart8') }}</p>
      </section>

      <section class="insects-faq">
        <h2 class="insects-faq__title">{{ t('WikiInsects.faqTitle') }}</h2>
        <div class="insects-faq-list">
          <div class="insects-faq-item">
            <h3 class="insects-faq-q">{{ t('WikiInsects.faqQ1') }}</h3>
            <p class="insects-faq-a">{{ t('WikiInsects.faqA1') }}</p>
          </div>
          <div class="insects-faq-item">
            <h3 class="insects-faq-q">{{ t('WikiInsects.faqQ2') }}</h3>
            <p class="insects-faq-a">{{ t('WikiInsects.faqA2') }}</p>
          </div>
          <div class="insects-faq-item">
            <h3 class="insects-faq-q">{{ t('WikiInsects.faqQ3') }}</h3>
            <p class="insects-faq-a">{{ t('WikiInsects.faqA3') }}</p>
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
const { data: insects, loadData } = useWikiData('insects')

onMounted(() => loadData('insects'))
watch(() => locale.value, () => loadData('insects'))

const insectLocations = computed(() => [...new Set((insects.value || []).map((i) => i.location))].sort())
const insectTypes = computed(() => [...new Set((insects.value || []).map((i) => i.type))].sort())
function getInsectImage(i) {
  return i.imageSrc || i.image || `https://placehold.co/72x72/e8f0e8/6B9B7B?text=🦋`
}

const filterLevel = ref('')
const filterType = ref('')
const filterLocation = ref('')

const filteredInsects = computed(() => {
  return (insects.value || []).filter((i) => {
    if (filterLevel.value !== '' && i.level !== Number(filterLevel.value)) return false
    if (filterType.value && i.type !== filterType.value) return false
    if (filterLocation.value && i.location !== filterLocation.value) return false
    return true
  })
})
</script>

<style scoped>
.insects-page {
  padding: 0 0 4rem;
}

/* Hero accent: warm amber / insect theme */
.insects-hero {
  --wiki-hero-accent: #c17a3a;
  --wiki-hero-bg-from: #fdf8f2;
  --wiki-hero-bg-to: #f6ede3;
  --wiki-hero-border: rgba(193, 122, 58, 0.18);
  --wiki-hero-crumb: #6b5c4a;
  --wiki-hero-crumb-sep: #8a7a65;
  --wiki-hero-current: #9a6b38;
  --wiki-hero-title: #3d3225;
  --wiki-hero-desc: #5c5144;
  --wiki-hero-field-border: rgba(193, 122, 58, 0.28);
  --wiki-hero-field-text: #3d3225;
  --wiki-hero-focus-ring: rgba(193, 122, 58, 0.15);
}

.insects-count {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin: 0 0 1rem;
}

.insects-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}
@media (max-width: 560px) {
  .insects-list {
    grid-template-columns: 1fr;
  }
}

.insects-row {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(74, 85, 104, 0.08);
  border-left: 4px solid rgba(193, 122, 58, 0.5);
  box-shadow: 0 2px 10px rgba(74, 85, 104, 0.04);
}

.insects-row-img {
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(243, 229, 211, 0.5);
}
.insects-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.insects-row-body {
  min-width: 0;
  flex: 1;
}

.insects-row-main {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.35rem;
}
.insects-name {
  font-weight: 600;
  font-size: 1rem;
  color: var(--color-text);
}
.insects-meta {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.insects-tags {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-bottom: 0.25rem;
}
.insects-tags-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
}
.insects-tag-label {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-right: 0.15rem;
}
.insects-tag {
  font-size: 0.75rem;
  padding: 0.15rem 0.45rem;
  border-radius: 6px;
  background: rgba(74, 85, 104, 0.08);
  color: var(--color-text-soft);
}

.insects-sell-prices {
  margin: 0;
}
.insects-sell-title {
  display: block;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  margin-bottom: 0.35rem;
  text-transform: uppercase;
}
.insects-sell-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem 1rem;
}
.insects-sell-item {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}
.insects-stars {
  color: #d4a84b;
  font-size: 0.9rem;
  line-height: 1;
  letter-spacing: 0.02em;
}
.insects-price-num {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}
.insects-prices {
  margin: 0;
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.insects-intro {
  margin-top: 2.5rem;
  padding: 1.5rem;
  border-radius: 12px;
  background: var(--color-surface);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}
.insects-intro__title {
  margin: 0 0 0.75rem;
  font-size: 1.25rem;
  font-weight: 600;
}
.insects-intro__lead {
  margin: 0 0 0.75rem;
  line-height: 1.6;
  color: var(--color-text);
}
.insects-intro__text {
  margin: 0;
  font-size: 0.95rem;
  color: var(--color-text-muted);
}
.insects-intro a {
  color: var(--color-primary);
  text-decoration: none;
}
.insects-intro a:hover {
  text-decoration: underline;
}

.insects-faq {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}
.insects-faq__title {
  margin: 0 0 1rem;
  font-size: 1.25rem;
  font-weight: 600;
}
.insects-faq-list { display: flex; flex-direction: column; gap: 0; }
.insects-faq-item {
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-border);
}
.insects-faq-item:last-child { border-bottom: none; }
.insects-faq-q {
  margin: 0 0 0.35rem;
  font-size: 1rem;
  font-weight: 600;
}
.insects-faq-a {
  margin: 0;
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.55;
}

@media (max-width: 1024px) {
  .insects-list { gap: 0.75rem; }
  .insects-intro { margin-top: 1.5rem; padding: 1.25rem; }
  .insects-faq { margin-top: 1.5rem; padding-top: 1.25rem; }
}

@media (max-width: 768px) {
  .insects-page {
    --m-h1: 1.5rem; --m-h2: 1.3rem; --m-h3: 1.1rem; --m-p: 0.8rem; --m-line: 1.2; --m-gap: 0.7rem; --m-block: 1rem; --m-tight: 0.75rem;
  }
  .insects-hero .wiki-hero__title { font-size: var(--m-h1); line-height: var(--m-line); }
  .insects-hero .wiki-hero__subtitle { font-size: var(--m-p); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .insects-hero .wiki-hero { margin-bottom: var(--m-block); padding: var(--m-block); }
  .insects-count { font-size: var(--m-p); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .insects-list { gap: var(--m-tight); }
  .insects-row { padding: var(--m-block); }
  .insects-name { font-size: var(--m-h3); line-height: var(--m-line); }
  .insects-meta, .insects-tag { font-size: var(--m-p); line-height: var(--m-line); }
  .insects-intro { margin-top: var(--m-block); padding: var(--m-block); }
  .insects-intro__title { font-size: var(--m-h2); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .insects-intro__lead, .insects-intro__text { font-size: var(--m-p); line-height: var(--m-line); }
  .insects-faq { margin-top: var(--m-block); padding-top: var(--m-block); }
  .insects-faq__title { font-size: var(--m-h2); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .insects-faq-item { padding-bottom: var(--m-gap); }
  .insects-faq-q { font-size: var(--m-h3); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .insects-faq-a { font-size: var(--m-p); line-height: var(--m-line); }
}
</style>
