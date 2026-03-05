<template>
  <div class="birds-page">
    <div class="container">
      <section class="wiki-hero birds-hero">
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
          <span class="wiki-crumb-current">{{ t('WikiBirds.breadcrumbCurrent') }}</span>
        </nav>

        <div class="wiki-hero__inner">
          <h1 class="wiki-hero__title">{{ t('WikiBirds.heroTitle') }}</h1>
          <p class="wiki-hero__subtitle">{{ t('WikiBirds.heroSubtitle') }}</p>
          <div class="wiki-filters">
            <label class="wiki-filter">
              <span class="wiki-filter__label">{{ t('WikiDetail.filterLevel') }}</span>
              <select v-model="filterLevel" class="wiki-select">
                <option value="">{{ t('WikiDetail.filterAll') }}</option>
                <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
              </select>
            </label>
            <label class="wiki-filter">
              <span class="wiki-filter__label">{{ t('WikiDetail.filterLocation') }}</span>
              <select v-model="filterLocation" class="wiki-select">
                <option value="">{{ t('WikiDetail.filterAll') }}</option>
                <option v-for="loc in birdLocations" :key="loc" :value="loc">{{ loc }}</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <p class="birds-count">{{ t('WikiBirds.count', { n: filteredBirds.length }) }}</p>

      <div class="birds-list">
        <article v-for="b in filteredBirds" :key="b.slug" class="birds-row">
          <div class="birds-row-img">
            <img :src="getBirdImage(b)" :alt="b.imageAlt || b.name" class="birds-img" loading="lazy" />
          </div>
          <div class="birds-row-body">
            <div class="birds-row-main">
              <span class="birds-name">{{ b.name }}</span>
              <span class="birds-meta">Lv.{{ b.level }} · {{ b.location }}</span>
            </div>
            <div class="birds-tags">
              <div class="birds-tags-row">
                <span class="birds-tag-label">{{ t('WikiDetail.labelWeather') }}</span>
                <span v-for="w in b.weather" :key="w" class="birds-tag">{{ w }}</span>
              </div>
              <div class="birds-tags-row">
                <span class="birds-tag-label">{{ t('WikiDetail.labelTime') }}</span>
                <span v-for="tm in b.time" :key="tm" class="birds-tag">{{ tm }}</span>
              </div>
            </div>
            <div v-if="b.sellPrices && b.sellPrices.length" class="birds-sell-prices">
              <span class="birds-sell-title">{{ t('WikiDetail.sellPricesTitle') }}</span>
              <div class="birds-sell-list">
                <span v-for="(price, idx) in b.sellPrices" :key="idx" class="birds-sell-item">
                  <span class="birds-stars" :aria-label="`${idx + 1} star`">{{ '★'.repeat(idx + 1) }}</span>
                  <span class="birds-price-num">{{ price }}</span>
                </span>
              </div>
            </div>
            <p v-else class="birds-prices">{{ t('WikiDetail.sellEmpty') }}</p>
          </div>
        </article>
      </div>

      <section class="birds-intro">
        <h2 class="birds-intro__title">{{ t('WikiBirds.introTitle') }}</h2>
        <p class="birds-intro__lead">{{ t('WikiBirds.introLead') }}</p>
        <p class="birds-intro__text">{{ t('WikiBirds.introTextPart1') }}<a :href="getLocalizedPath('/wiki')">{{ t('WikiDetail.breadcrumbWiki') }}</a>{{ t('WikiBirds.introTextPart2') }}<a :href="getLocalizedPath('/wiki/fish')">{{ t('WikiDetail.fish') }}</a>{{ t('WikiBirds.introTextPart3') }}<a :href="getLocalizedPath('/wiki/insects')">{{ t('WikiDetail.insects') }}</a>{{ t('WikiBirds.introTextPart3') }}<a :href="getLocalizedPath('/wiki/crops')">{{ t('WikiDetail.crops') }}</a>{{ t('WikiBirds.introTextPart4') }}<a :href="getLocalizedPath('/')">{{ t('WikiDetail.homePage') }}</a>{{ t('WikiBirds.introTextPart5') }}<a :href="getLocalizedPath('/map')">{{ t('WikiDetail.map') }}</a>{{ t('WikiBirds.introTextPart6') }}<a :href="getLocalizedPath('/codes')">{{ t('WikiDetail.giftCodes') }}</a>{{ t('WikiBirds.introTextPart7') }}<a :href="getLocalizedPath('/guide')">{{ t('WikiDetail.guides') }}</a>{{ t('WikiBirds.introTextPart8') }}</p>
      </section>

      <section class="birds-faq">
        <h2 class="birds-faq__title">{{ t('WikiBirds.faqTitle') }}</h2>
        <div class="birds-faq-list">
          <div class="birds-faq-item">
            <h3 class="birds-faq-q">{{ t('WikiBirds.faqQ1') }}</h3>
            <p class="birds-faq-a">{{ t('WikiBirds.faqA1') }}</p>
          </div>
          <div class="birds-faq-item">
            <h3 class="birds-faq-q">{{ t('WikiBirds.faqQ2') }}</h3>
            <p class="birds-faq-a">{{ t('WikiBirds.faqA2') }}</p>
          </div>
          <div class="birds-faq-item">
            <h3 class="birds-faq-q">{{ t('WikiBirds.faqQ3') }}</h3>
            <p class="birds-faq-a">{{ t('WikiBirds.faqA3') }}</p>
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
const { data: birds, loadData } = useWikiData('birds')

onMounted(() => loadData('birds'))
watch(() => locale.value, () => loadData('birds'))

const birdLocations = computed(() => [...new Set((birds.value || []).map((b) => b.location))].sort())
function getBirdImage(b) {
  return b.imageSrc || b.image || `https://placehold.co/72x72/e8f0e8/6B9B7B?text=🐦`
}

const filterLevel = ref('')
const filterLocation = ref('')

const filteredBirds = computed(() => {
  return (birds.value || []).filter((b) => {
    if (filterLevel.value !== '' && b.level !== Number(filterLevel.value)) return false
    if (filterLocation.value && b.location !== filterLocation.value) return false
    return true
  })
})
</script>

<style scoped>
.birds-page {
  padding: 0 0 4rem;
}

/* Hero accent: sky blue / bird theme */
.birds-hero {
  --wiki-hero-accent: #3a7bc8;
  --wiki-hero-bg-from: #f2f8fd;
  --wiki-hero-bg-to: #e8f1fa;
  --wiki-hero-border: rgba(58, 123, 200, 0.18);
  --wiki-hero-crumb: #4a5c6b;
  --wiki-hero-crumb-sep: #6a7a8a;
  --wiki-hero-current: #2d6ab0;
  --wiki-hero-title: #1d2d3d;
  --wiki-hero-desc: #4a5c6b;
  --wiki-hero-field-border: rgba(58, 123, 200, 0.28);
  --wiki-hero-field-text: #1d2d3d;
  --wiki-hero-focus-ring: rgba(58, 123, 200, 0.15);
}

.birds-count {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin: 0 0 1rem;
}

.birds-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}
@media (max-width: 560px) {
  .birds-list {
    grid-template-columns: 1fr;
  }
}

.birds-row {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(74, 85, 104, 0.08);
  border-left: 4px solid rgba(58, 123, 200, 0.5);
  box-shadow: 0 2px 10px rgba(74, 85, 104, 0.04);
}

.birds-row-img {
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(232, 241, 250, 0.6);
}
.birds-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.birds-row-body {
  min-width: 0;
  flex: 1;
}

.birds-row-main {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.35rem;
}
.birds-name {
  font-weight: 600;
  font-size: 1rem;
  color: var(--color-text);
}
.birds-meta {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.birds-tags {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-bottom: 0.25rem;
}
.birds-tags-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
}
.birds-tag-label {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-right: 0.15rem;
}
.birds-tag {
  font-size: 0.75rem;
  padding: 0.15rem 0.45rem;
  border-radius: 6px;
  background: rgba(74, 85, 104, 0.08);
  color: var(--color-text-soft);
}

.birds-sell-prices {
  margin: 0;
}
.birds-sell-title {
  display: block;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  margin-bottom: 0.35rem;
  text-transform: uppercase;
}
.birds-sell-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem 1rem;
}
.birds-sell-item {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}
.birds-stars {
  color: #d4a84b;
  font-size: 0.9rem;
  line-height: 1;
  letter-spacing: 0.02em;
}
.birds-price-num {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}
.birds-prices {
  margin: 0;
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.birds-intro {
  margin-top: 2.5rem;
  padding: 1.5rem;
  border-radius: 12px;
  background: var(--color-surface);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}
.birds-intro__title { margin: 0 0 0.75rem; font-size: 1.25rem; font-weight: 600; }
.birds-intro__lead { margin: 0 0 0.75rem; line-height: 1.6; color: var(--color-text); }
.birds-intro__text { margin: 0; font-size: 0.95rem; color: var(--color-text-muted); }
.birds-intro a { color: var(--color-primary); text-decoration: none; }
.birds-intro a:hover { text-decoration: underline; }

.birds-faq {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}
.birds-faq__title { margin: 0 0 1rem; font-size: 1.25rem; font-weight: 600; }
.birds-faq-list { display: flex; flex-direction: column; gap: 0; }
.birds-faq-item {
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-border);
}
.birds-faq-item:last-child { border-bottom: none; }
.birds-faq-q { margin: 0 0 0.35rem; font-size: 1rem; font-weight: 600; }
.birds-faq-a {
  margin: 0;
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.55;
}

@media (max-width: 1024px) {
  .birds-list { gap: 0.75rem; }
  .birds-intro { margin-top: 1.5rem; padding: 1.25rem; }
  .birds-faq { margin-top: 1.5rem; padding-top: 1.25rem; }
}

@media (max-width: 768px) {
  .birds-page {
    --m-h1: 1.5rem; --m-h2: 1.3rem; --m-h3: 1.1rem; --m-p: 0.8rem; --m-line: 1.2; --m-gap: 0.7rem; --m-block: 1rem; --m-tight: 0.75rem;
  }
  .birds-hero .wiki-hero__title { font-size: var(--m-h1); line-height: var(--m-line); }
  .birds-hero .wiki-hero__subtitle { font-size: var(--m-p); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .birds-hero .wiki-hero { margin-bottom: var(--m-block); padding: var(--m-block); }
  .birds-count { font-size: var(--m-p); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .birds-list { gap: var(--m-tight); }
  .birds-row { padding: var(--m-block); }
  .birds-name { font-size: var(--m-h3); line-height: var(--m-line); }
  .birds-meta, .birds-tag { font-size: var(--m-p); line-height: var(--m-line); }
  .birds-intro { margin-top: var(--m-block); padding: var(--m-block); }
  .birds-intro__title { font-size: var(--m-h2); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .birds-intro__lead, .birds-intro__text { font-size: var(--m-p); line-height: var(--m-line); }
  .birds-faq { margin-top: var(--m-block); padding-top: var(--m-block); }
  .birds-faq__title { font-size: var(--m-h2); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .birds-faq-item { padding-bottom: var(--m-gap); }
  .birds-faq-q { font-size: var(--m-h3); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .birds-faq-a { font-size: var(--m-p); line-height: var(--m-line); }
}
</style>
