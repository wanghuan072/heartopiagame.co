<template>
  <div class="fish-page">
    <div class="container">
      <section class="wiki-hero fish-hero">
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
          <span class="wiki-crumb-current">{{ t('WikiFish.breadcrumbCurrent') }}</span>
        </nav>

        <div class="wiki-hero__inner">
          <h1 class="wiki-hero__title">{{ t('WikiFish.heroTitle') }}</h1>
          <p class="wiki-hero__subtitle">{{ t('WikiFish.heroSubtitle') }}</p>
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
                <option v-for="t in fishLocationTypes" :key="t" :value="t">{{ t }}</option>
              </select>
            </label>
            <label class="wiki-filter">
              <span class="wiki-filter__label">{{ t('WikiDetail.filterShadow') }}</span>
              <select v-model="filterShadow" class="wiki-select">
                <option value="">{{ t('WikiDetail.filterAll') }}</option>
                <option v-for="s in fishShadowSizes" :key="s" :value="s">{{ s }}</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <p class="fish-count">{{ t('WikiFish.count', { n: filteredFish.length }) }}</p>

      <div class="fish-list">
        <article v-for="f in filteredFish" :key="f.slug" class="fish-row">
          <div class="fish-row-img">
            <img :src="getFishImage(f)" :alt="f.imageAlt || f.name" class="fish-img" loading="lazy" />
          </div>
          <div class="fish-row-body">
            <div class="fish-row-main">
              <span class="fish-name">{{ f.name }}</span>
              <span class="fish-meta">Lv.{{ f.level }} · {{ f.location }}</span>
            </div>
            <div class="fish-tags">
              <div v-if="f.shadowSize" class="fish-tags-row">
                <span class="fish-tag-label">{{ t('WikiDetail.labelShadow') }}</span>
                <span class="fish-tag">{{ f.shadowSize }}</span>
              </div>
              <div class="fish-tags-row">
                <span class="fish-tag-label">{{ t('WikiDetail.labelWeather') }}</span>
                <span v-for="w in f.weather" :key="w" class="fish-tag">{{ w }}</span>
              </div>
              <div class="fish-tags-row">
                <span class="fish-tag-label">{{ t('WikiDetail.labelTime') }}</span>
                <span v-for="tm in f.time" :key="tm" class="fish-tag">{{ tm }}</span>
              </div>
            </div>
            <div v-if="f.sellPrices && f.sellPrices.length" class="fish-sell-prices">
              <span class="fish-sell-title">{{ t('WikiDetail.sellPricesTitle') }}</span>
              <div class="fish-sell-list">
                <span v-for="(price, i) in f.sellPrices" :key="i" class="fish-sell-item">
                  <span class="fish-stars" :aria-label="`${i + 1} star`">{{ '★'.repeat(i + 1) }}</span>
                  <span class="fish-price-num">{{ price }}</span>
                </span>
              </div>
            </div>
            <p v-else class="fish-prices">{{ t('WikiDetail.sellEmpty') }}</p>
          </div>
        </article>
      </div>

      <section class="fish-intro">
        <h2 class="fish-intro__title">{{ t('WikiFish.introTitle') }}</h2>
        <p class="fish-intro__lead">{{ t('WikiFish.introLead') }}</p>
        <p class="fish-intro__text">{{ t('WikiFish.introTextPart1') }}<a :href="getLocalizedPath('/wiki')">{{ t('WikiDetail.breadcrumbWiki') }}</a>{{ t('WikiFish.introTextPart2') }}<a :href="getLocalizedPath('/wiki/recipes')">{{ t('WikiDetail.recipes') }}</a>{{ t('WikiFish.introTextPart3') }}<a :href="getLocalizedPath('/wiki/crops')">{{ t('WikiDetail.crops') }}</a>{{ t('WikiFish.introTextPart4') }}<a :href="getLocalizedPath('/')">{{ t('WikiDetail.homePage') }}</a>{{ t('WikiFish.introTextPart5') }}<a :href="getLocalizedPath('/map')">{{ t('WikiDetail.map') }}</a>, <a :href="getLocalizedPath('/codes')">{{ t('WikiDetail.giftCodes') }}</a>{{ t('WikiFish.introTextPart6') }}{{ t('WikiFish.introTextPart7') }}<a :href="getLocalizedPath('/guide')">{{ t('WikiDetail.guides') }}</a>{{ t('WikiFish.introTextPart8') }}</p>
      </section>

      <section class="fish-faq">
        <h2 class="fish-faq__title">{{ t('WikiFish.faqTitle') }}</h2>
        <div class="fish-faq-list">
          <div class="fish-faq-item">
            <h3 class="fish-faq-q">{{ t('WikiFish.faqQ1') }}</h3>
            <p class="fish-faq-a">{{ t('WikiFish.faqA1') }}</p>
          </div>
          <div class="fish-faq-item">
            <h3 class="fish-faq-q">{{ t('WikiFish.faqQ2') }}</h3>
            <p class="fish-faq-a">{{ t('WikiFish.faqA2') }}</p>
          </div>
          <div class="fish-faq-item">
            <h3 class="fish-faq-q">{{ t('WikiFish.faqQ3') }}</h3>
            <p class="fish-faq-a">{{ t('WikiFish.faqA3') }}</p>
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
const { data: fish, loadData } = useWikiData('fish')

onMounted(() => loadData('fish'))
watch(() => locale.value, () => loadData('fish'))

const fishLocationTypes = ['Sea', 'Lake', 'River']
const fishShadowSizes = ['S', 'M', 'L', 'Golden', 'Blue']
function getFishImage(f) {
  return f.imageSrc || f.image || `https://placehold.co/72x72/c8e6e0/5a9b85?text=🐟`
}

const filterLevel = ref('')
const filterLocation = ref('')
const filterShadow = ref('')

const filteredFish = computed(() => {
  return (fish.value || []).filter((f) => {
    if (filterLevel.value !== '' && f.level !== Number(filterLevel.value)) return false
    if (filterLocation.value && f.locationType !== filterLocation.value) return false
    if (filterShadow.value && (!f.shadowSize || !f.shadowSize.includes(filterShadow.value))) return false
    return true
  })
})

</script>

<style scoped>
.fish-page {
  padding: 0 0 4rem;
}

/* Hero 配色：偏海洋/青绿 */
.fish-hero {
  --wiki-hero-accent: #1a7f6e;
  --wiki-hero-bg-from: #eef8f6;
  --wiki-hero-bg-to: #e2f2ef;
  --wiki-hero-border: rgba(26, 127, 110, 0.2);
  --wiki-hero-crumb: #5a6b64;
  --wiki-hero-crumb-sep: #7a8a84;
  --wiki-hero-current: #1a7f6e;
  --wiki-hero-title: #1d3d36;
  --wiki-hero-desc: #4a5c56;
  --wiki-hero-field-border: rgba(26, 127, 110, 0.28);
  --wiki-hero-field-text: #1d3d36;
  --wiki-hero-focus-ring: rgba(26, 127, 110, 0.15);
}

.fish-count {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin: 0 0 1rem;
}

.fish-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}
@media (max-width: 560px) {
  .fish-list {
    grid-template-columns: 1fr;
  }
}

.fish-row {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(74, 85, 104, 0.08);
  border-left: 4px solid rgba(90, 160, 180, 0.5);
  box-shadow: 0 2px 10px rgba(74, 85, 104, 0.04);
}

.fish-row-img {
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(200, 230, 224, 0.4);
}
.fish-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.fish-row-body {
  min-width: 0;
  flex: 1;
}

.fish-row-main {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.35rem;
}
.fish-name {
  font-weight: 600;
  font-size: 1rem;
  color: var(--color-text);
}
.fish-meta {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.fish-tags {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-bottom: 0.25rem;
}
.fish-tags-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
}
.fish-tag-label {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-right: 0.15rem;
}
.fish-tag {
  font-size: 0.75rem;
  padding: 0.15rem 0.45rem;
  border-radius: 6px;
  background: rgba(74, 85, 104, 0.08);
  color: var(--color-text-soft);
}

.fish-sell-prices {
  margin: 0;
}
.fish-sell-title {
  display: block;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  margin-bottom: 0.35rem;
  text-transform: uppercase;
}
.fish-sell-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem 1rem;
}
.fish-sell-item {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}
.fish-stars {
  color: #d4a84b;
  font-size: 0.9rem;
  line-height: 1;
  letter-spacing: 0.02em;
}
.fish-price-num {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}
.fish-prices {
  margin: 0;
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.fish-intro {
  margin-top: 2.5rem;
  padding: 1.5rem;
  border-radius: 12px;
  background: var(--color-surface);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}
.fish-intro__title {
  margin: 0 0 0.75rem;
  font-size: 1.25rem;
  font-weight: 600;
}
.fish-intro__lead {
  margin: 0 0 0.75rem;
  line-height: 1.6;
  color: var(--color-text);
}
.fish-intro__text {
  margin: 0;
  font-size: 0.95rem;
  color: var(--color-text-muted);
}
.fish-intro a {
  color: var(--color-primary);
  text-decoration: none;
}
.fish-intro a:hover {
  text-decoration: underline;
}

.fish-faq {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}
.fish-faq__title {
  margin: 0 0 1rem;
  font-size: 1.25rem;
  font-weight: 600;
}
.fish-faq-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.fish-faq-item {
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-border);
}
.fish-faq-item:last-child {
  border-bottom: none;
}
.fish-faq-q {
  margin: 0 0 0.35rem;
  font-size: 1rem;
  font-weight: 600;
}
.fish-faq-a {
  margin: 0;
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.55;
}

/* ---------- 响应式：1024 iPad / 768 移动端 ---------- */
@media (max-width: 1024px) {
  .fish-list {
    gap: 0.75rem;
  }
  .fish-row {
    padding: 0.75rem;
  }
  .fish-intro {
    margin-top: 1.5rem;
    padding: 1.25rem;
  }
  .fish-faq {
    margin-top: 1.5rem;
    padding-top: 1.25rem;
  }
}

@media (max-width: 768px) {
  .fish-page {
    --m-h1: 1.5rem;
    --m-h2: 1.3rem;
    --m-h3: 1.1rem;
    --m-p: 0.8rem;
    --m-line: 1.2;
    --m-gap: 0.7rem;
    --m-block: 1rem;
    --m-tight: 0.75rem;
  }
  .fish-hero .wiki-hero__title {
    font-size: var(--m-h1);
    line-height: var(--m-line);
  }
  .fish-hero .wiki-hero__subtitle {
    font-size: var(--m-p);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .fish-hero .wiki-hero {
    margin-bottom: var(--m-block);
    padding: var(--m-block);
  }
  .fish-hero .wiki-filters {
    gap: var(--m-gap);
  }
  .fish-count {
    font-size: var(--m-p);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .fish-list {
    gap: var(--m-tight);
  }
  .fish-row {
    padding: var(--m-block);
    flex-direction: column;
    align-items: flex-start;
  }
  .fish-row-img {
    width: 56px;
    height: 56px;
  }
  .fish-name {
    font-size: var(--m-h3);
    line-height: var(--m-line);
  }
  .fish-meta,
  .fish-tag,
  .fish-price-num,
  .fish-prices {
    font-size: var(--m-p);
    line-height: var(--m-line);
  }
  .fish-intro {
    margin-top: var(--m-block);
    padding: var(--m-block);
  }
  .fish-intro__title {
    font-size: var(--m-h2);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .fish-intro__lead,
  .fish-intro__text {
    font-size: var(--m-p);
    line-height: var(--m-line);
  }
  .fish-faq {
    margin-top: var(--m-block);
    padding-top: var(--m-block);
  }
  .fish-faq__title {
    font-size: var(--m-h2);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .fish-faq-item {
    padding-bottom: var(--m-gap);
  }
  .fish-faq-q {
    font-size: var(--m-h3);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .fish-faq-a {
    font-size: var(--m-p);
    line-height: var(--m-line);
  }
}
</style>
