<template>
  <div class="foraging-page">
    <div class="container">
      <section class="wiki-hero foraging-hero">
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
          <span class="wiki-crumb-current">{{ t('WikiForaging.breadcrumbCurrent') }}</span>
        </nav>

        <div class="wiki-hero__inner">
          <h1 class="wiki-hero__title">{{ t('WikiForaging.heroTitle') }}</h1>
          <p class="wiki-hero__subtitle">{{ t('WikiForaging.heroSubtitle') }}</p>
          <div class="wiki-filters">
            <label class="wiki-filter">
              <span class="wiki-filter__label">{{ t('WikiDetail.filterLocation') }}</span>
              <select v-model="filterLocation" class="wiki-select">
                <option value="">{{ t('WikiDetail.filterAll') }}</option>
                <option v-for="loc in forageLocations" :key="loc" :value="loc">{{ loc }}</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <p class="foraging-count">{{ t('WikiForaging.count', { n: filteredForageables.length }) }}</p>

      <div class="foraging-list">
        <article v-for="item in filteredForageables" :key="item.slug" class="foraging-row">
          <div class="foraging-row-img">
            <img :src="getForageableImage(item)" :alt="item.imageAlt || item.name" class="foraging-img" loading="lazy" />
          </div>
          <div class="foraging-row-body">
            <div class="foraging-row-main">
              <span class="foraging-name">{{ item.name }}</span>
              <span class="foraging-meta">{{ item.location }}</span>
            </div>
            <div class="foraging-info">
              <div class="foraging-info-row">
                <span class="foraging-tag-label">{{ t('WikiDetail.labelSell') }}</span>
                <span class="foraging-tag">{{ item.sellPrice != null ? item.sellPrice : '—' }}</span>
              </div>
              <div v-if="item.energy != null" class="foraging-info-row">
                <span class="foraging-tag-label">{{ t('WikiDetail.labelEnergy') }}</span>
                <span class="foraging-tag">+{{ item.energy }}</span>
              </div>
            </div>
          </div>
        </article>
      </div>

      <section class="foraging-intro">
        <h2 class="foraging-intro__title">{{ t('WikiForaging.introTitle') }}</h2>
        <p class="foraging-intro__lead">{{ t('WikiForaging.introLead') }}</p>
        <p class="foraging-intro__text">{{ t('WikiForaging.introTextPart1') }}<a :href="getLocalizedPath('/wiki')">{{ t('WikiDetail.breadcrumbWiki') }}</a>{{ t('WikiForaging.introTextPart2') }}<a :href="getLocalizedPath('/wiki/crops')">{{ t('WikiDetail.crops') }}</a>{{ t('WikiForaging.introTextPart3') }}<a :href="getLocalizedPath('/wiki/fish')">{{ t('WikiDetail.fish') }}</a>{{ t('WikiForaging.introTextPart4') }}<a :href="getLocalizedPath('/')">{{ t('WikiDetail.homePage') }}</a>{{ t('WikiForaging.introTextPart5') }}<a :href="getLocalizedPath('/map')">{{ t('WikiDetail.map') }}</a>{{ t('WikiForaging.introTextPart6') }}<a :href="getLocalizedPath('/codes')">{{ t('WikiDetail.giftCodes') }}</a>{{ t('WikiForaging.introTextPart7') }}<a :href="getLocalizedPath('/guide')">{{ t('WikiDetail.guides') }}</a>{{ t('WikiForaging.introTextPart8') }}</p>
      </section>

      <section class="foraging-faq">
        <h2 class="foraging-faq__title">{{ t('WikiForaging.faqTitle') }}</h2>
        <div class="foraging-faq-list">
          <div class="foraging-faq-item">
            <h3 class="foraging-faq-q">{{ t('WikiForaging.faqQ1') }}</h3>
            <p class="foraging-faq-a">{{ t('WikiForaging.faqA1') }}</p>
          </div>
          <div class="foraging-faq-item">
            <h3 class="foraging-faq-q">{{ t('WikiForaging.faqQ2') }}</h3>
            <p class="foraging-faq-a">{{ t('WikiForaging.faqA2') }}</p>
          </div>
          <div class="foraging-faq-item">
            <h3 class="foraging-faq-q">{{ t('WikiForaging.faqQ3') }}</h3>
            <p class="foraging-faq-a">{{ t('WikiForaging.faqA3') }}</p>
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
const { data: forageables, loadData } = useWikiData('forageables')

onMounted(() => loadData('forageables'))
watch(() => locale.value, () => loadData('forageables'))

const forageLocations = computed(() => [...new Set((forageables.value || []).map((f) => f.location))].sort())
function getForageableImage(item) {
  return item.imageSrc || item.image || `https://placehold.co/72x72/e8f0e8/6B9B7B?text=🍃`
}

const filterLocation = ref('')

const filteredForageables = computed(() => {
  return (forageables.value || []).filter((item) => {
    if (filterLocation.value && item.location !== filterLocation.value) return false
    return true
  })
})
</script>

<style scoped>
.foraging-page {
  padding: 0 0 4rem;
}

/* Hero accent: earth / foraging theme */
.foraging-hero {
  --wiki-hero-accent: #6d4c3d;
  --wiki-hero-bg-from: #f8f5f2;
  --wiki-hero-bg-to: #efe8e2;
  --wiki-hero-border: rgba(109, 76, 61, 0.18);
  --wiki-hero-crumb: #5c4a42;
  --wiki-hero-crumb-sep: #7a6a62;
  --wiki-hero-current: #4d3528;
  --wiki-hero-title: #3d2d22;
  --wiki-hero-desc: #5c4a42;
  --wiki-hero-field-border: rgba(109, 76, 61, 0.28);
  --wiki-hero-field-text: #3d2d22;
  --wiki-hero-focus-ring: rgba(109, 76, 61, 0.15);
}

.foraging-count {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin: 0 0 1rem;
}

.foraging-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}
@media (max-width: 560px) {
  .foraging-list {
    grid-template-columns: 1fr;
  }
}

.foraging-row {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(74, 85, 104, 0.08);
  border-left: 4px solid rgba(109, 76, 61, 0.5);
  box-shadow: 0 2px 10px rgba(74, 85, 104, 0.04);
}

.foraging-row-img {
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(239, 232, 226, 0.6);
}
.foraging-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.foraging-row-body {
  min-width: 0;
  flex: 1;
}

.foraging-row-main {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.35rem;
}
.foraging-name {
  font-weight: 600;
  font-size: 1rem;
  color: var(--color-text);
}
.foraging-meta {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.foraging-info {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.foraging-info-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
}
.foraging-tag-label {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-right: 0.15rem;
}
.foraging-tag {
  font-size: 0.75rem;
  padding: 0.15rem 0.45rem;
  border-radius: 6px;
  background: rgba(74, 85, 104, 0.08);
  color: var(--color-text-soft);
}

.foraging-intro {
  margin-top: 2.5rem;
  padding: 1.5rem;
  border-radius: 12px;
  background: var(--color-surface);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}
.foraging-intro__title { margin: 0 0 0.75rem; font-size: 1.25rem; font-weight: 600; }
.foraging-intro__lead { margin: 0 0 0.75rem; line-height: 1.6; color: var(--color-text); }
.foraging-intro__text { margin: 0; font-size: 0.95rem; color: var(--color-text-muted); }
.foraging-intro a { color: var(--color-primary); text-decoration: none; }
.foraging-intro a:hover { text-decoration: underline; }

.foraging-faq {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}
.foraging-faq__title { margin: 0 0 1rem; font-size: 1.25rem; font-weight: 600; }
.foraging-faq-list { display: flex; flex-direction: column; gap: 0; }
.foraging-faq-item {
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-border);
}
.foraging-faq-item:last-child { border-bottom: none; }
.foraging-faq-q { margin: 0 0 0.35rem; font-size: 1rem; font-weight: 600; }
.foraging-faq-a {
  margin: 0;
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.55;
}

@media (max-width: 1024px) {
  .foraging-list { gap: 0.75rem; }
  .foraging-intro { margin-top: 1.5rem; padding: 1.25rem; }
  .foraging-faq { margin-top: 1.5rem; padding-top: 1.25rem; }
}

@media (max-width: 768px) {
  .foraging-page {
    --m-h1: 1.5rem; --m-h2: 1.3rem; --m-h3: 1.1rem; --m-p: 0.8rem; --m-line: 1.2; --m-gap: 0.7rem; --m-block: 1rem; --m-tight: 0.75rem;
  }
  .foraging-hero .wiki-hero__title { font-size: var(--m-h1); line-height: var(--m-line); }
  .foraging-hero .wiki-hero__subtitle { font-size: var(--m-p); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .foraging-hero .wiki-hero { margin-bottom: var(--m-block); padding: var(--m-block); }
  .foraging-count { font-size: var(--m-p); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .foraging-list { gap: var(--m-tight); }
  .foraging-row { padding: var(--m-block); }
  .foraging-name { font-size: var(--m-h3); line-height: var(--m-line); }
  .foraging-meta, .foraging-tag { font-size: var(--m-p); line-height: var(--m-line); }
  .foraging-intro { margin-top: var(--m-block); padding: var(--m-block); }
  .foraging-intro__title { font-size: var(--m-h2); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .foraging-intro__lead, .foraging-intro__text { font-size: var(--m-p); line-height: var(--m-line); }
  .foraging-faq { margin-top: var(--m-block); padding-top: var(--m-block); }
  .foraging-faq__title { font-size: var(--m-h2); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .foraging-faq-item { padding-bottom: var(--m-gap); }
  .foraging-faq-q { font-size: var(--m-h3); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .foraging-faq-a { font-size: var(--m-p); line-height: var(--m-line); }
}
</style>
