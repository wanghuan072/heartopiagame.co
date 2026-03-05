<template>
  <div class="wild-animals-page">
    <div class="container">
      <section class="wiki-hero wild-animals-hero">
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
          <a href="/wiki" class="wiki-crumb">{{ t('WikiDetail.breadcrumbWiki') }}</a>
          <span class="wiki-crumb-sep">&gt;</span>
          <span class="wiki-crumb-current">{{ t('WikiWildAnimals.breadcrumbCurrent') }}</span>
        </nav>

        <div class="wiki-hero__inner">
          <h1 class="wiki-hero__title">{{ t('WikiWildAnimals.heroTitle') }}</h1>
          <p class="wiki-hero__subtitle">{{ t('WikiWildAnimals.heroSubtitle') }}</p>
          <div class="wiki-filters">
            <label class="wiki-filter">
              <span class="wiki-filter__label">{{ t('WikiDetail.filterLocation') }}</span>
              <select v-model="filterLocation" class="wiki-select">
                <option value="">{{ t('WikiDetail.filterAll') }}</option>
                <option v-for="loc in wildAnimalLocations" :key="loc" :value="loc">{{ loc }}</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <p class="wild-animals-count">{{ t('WikiWildAnimals.count', { n: filteredAnimals.length }) }}</p>

      <div class="wild-animals-list">
        <article v-for="a in filteredAnimals" :key="a.slug" class="wild-animals-row">
          <div class="wild-animals-row-img">
            <img :src="getWildAnimalImage(a)" :alt="a.imageAlt || a.name" class="wild-animals-img" loading="lazy" />
          </div>
          <div class="wild-animals-row-body">
            <div class="wild-animals-row-main">
              <span class="wild-animals-name">{{ a.name }}</span>
              <span class="wild-animals-meta">{{ a.location }}</span>
            </div>
            <div class="wild-animals-info">
              <div class="wild-animals-info-row">
                <span class="wild-animals-tag-label">{{ t('WikiDetail.favoriteFood') }}</span>
                <span v-for="food in a.favoriteFood" :key="food" class="wild-animals-tag">{{ food }}</span>
              </div>
              <div class="wild-animals-info-row">
                <span class="wild-animals-tag-label">{{ t('WikiDetail.labelWeather') }}</span>
                <span class="wild-animals-tag">{{ a.favoriteWeather }}</span>
              </div>
            </div>
          </div>
        </article>
      </div>

      <section class="wild-animals-intro">
        <h2 class="wild-animals-intro__title">{{ t('WikiWildAnimals.introTitle') }}</h2>
        <p class="wild-animals-intro__lead">{{ t('WikiWildAnimals.introLead') }}</p>
        <p class="wild-animals-intro__text">{{ t('WikiWildAnimals.introTextPart1') }}<a :href="getLocalizedPath('/wiki')">{{ t('WikiDetail.breadcrumbWiki') }}</a>{{ t('WikiWildAnimals.introTextPart2') }}<a :href="getLocalizedPath('/wiki/pets')">{{ t('WikiPets.breadcrumbCurrent') }}</a>{{ t('WikiWildAnimals.introTextPart3') }}<a :href="getLocalizedPath('/wiki/fish')">{{ t('WikiDetail.fish') }}</a>{{ t('WikiWildAnimals.introTextPart4') }}<a :href="getLocalizedPath('/')">{{ t('WikiDetail.homePage') }}</a>{{ t('WikiWildAnimals.introTextPart5') }}<a :href="getLocalizedPath('/map')">{{ t('WikiDetail.map') }}</a>{{ t('WikiWildAnimals.introTextPart6') }}<a :href="getLocalizedPath('/codes')">{{ t('WikiDetail.giftCodes') }}</a>{{ t('WikiWildAnimals.introTextPart7') }}<a :href="getLocalizedPath('/characters')">{{ t('WikiDetail.characters') }}</a>{{ t('WikiWildAnimals.introTextPart8') }}</p>
      </section>

      <section class="wild-animals-faq">
        <h2 class="wild-animals-faq__title">{{ t('WikiWildAnimals.faqTitle') }}</h2>
        <div class="wild-animals-faq-list">
          <div class="wild-animals-faq-item">
            <h3 class="wild-animals-faq-q">{{ t('WikiWildAnimals.faqQ1') }}</h3>
            <p class="wild-animals-faq-a">{{ t('WikiWildAnimals.faqA1') }}</p>
          </div>
          <div class="wild-animals-faq-item">
            <h3 class="wild-animals-faq-q">{{ t('WikiWildAnimals.faqQ2') }}</h3>
            <p class="wild-animals-faq-a">{{ t('WikiWildAnimals.faqA2') }}</p>
          </div>
          <div class="wild-animals-faq-item">
            <h3 class="wild-animals-faq-q">{{ t('WikiWildAnimals.faqQ3') }}</h3>
            <p class="wild-animals-faq-a">{{ t('WikiWildAnimals.faqA3') }}</p>
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
const { data: wildAnimals, loadData } = useWikiData('wildAnimals')

onMounted(() => loadData('wildAnimals'))
watch(() => locale.value, () => loadData('wildAnimals'))

const wildAnimalLocations = computed(() => [...new Set((wildAnimals.value || []).map((a) => a.location))].sort())
function getWildAnimalImage(a) {
  return a.imageSrc || a.image || `https://placehold.co/72x72/e8f0e8/6B9B7B?text=🐾`
}

const filterLocation = ref('')

const filteredAnimals = computed(() => {
  return (wildAnimals.value || []).filter((a) => {
    if (filterLocation.value && a.location !== filterLocation.value) return false
    return true
  })
})
</script>

<style scoped>
.wild-animals-page {
  padding: 0 0 4rem;
}

/* Hero accent: wildlife / nature theme */
.wild-animals-hero {
  --wiki-hero-accent: #5d4037;
  --wiki-hero-bg-from: #f5f2ef;
  --wiki-hero-bg-to: #ebe6e0;
  --wiki-hero-border: rgba(93, 64, 55, 0.18);
  --wiki-hero-crumb: #5c4a42;
  --wiki-hero-crumb-sep: #7a6a62;
  --wiki-hero-current: #3e2a24;
  --wiki-hero-title: #3d2d22;
  --wiki-hero-desc: #5c4a42;
  --wiki-hero-field-border: rgba(93, 64, 55, 0.28);
  --wiki-hero-field-text: #3d2d22;
  --wiki-hero-focus-ring: rgba(93, 64, 55, 0.15);
}

.wild-animals-count {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin: 0 0 1rem;
}

.wild-animals-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}
@media (max-width: 560px) {
  .wild-animals-list {
    grid-template-columns: 1fr;
  }
}

.wild-animals-row {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(74, 85, 104, 0.08);
  border-left: 4px solid rgba(93, 64, 55, 0.5);
  box-shadow: 0 2px 10px rgba(74, 85, 104, 0.04);
}

.wild-animals-row-img {
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(235, 230, 224, 0.6);
}
.wild-animals-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.wild-animals-row-body {
  min-width: 0;
  flex: 1;
}

.wild-animals-row-main {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.35rem;
}
.wild-animals-name {
  font-weight: 600;
  font-size: 1rem;
  color: var(--color-text);
}
.wild-animals-meta {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.wild-animals-info {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.wild-animals-info-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
}
.wild-animals-tag-label {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-right: 0.15rem;
}
.wild-animals-tag {
  font-size: 0.75rem;
  padding: 0.15rem 0.45rem;
  border-radius: 6px;
  background: rgba(74, 85, 104, 0.08);
  color: var(--color-text-soft);
}

.wild-animals-intro {
  margin-top: 2.5rem;
  padding: 1.5rem;
  border-radius: 12px;
  background: var(--color-surface);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}
.wild-animals-intro__title { margin: 0 0 0.75rem; font-size: 1.25rem; font-weight: 600; }
.wild-animals-intro__lead { margin: 0 0 0.75rem; line-height: 1.6; color: var(--color-text); }
.wild-animals-intro__text { margin: 0; font-size: 0.95rem; color: var(--color-text-muted); }
.wild-animals-intro a { color: var(--color-primary); text-decoration: none; }
.wild-animals-intro a:hover { text-decoration: underline; }

.wild-animals-faq {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}
.wild-animals-faq__title { margin: 0 0 1rem; font-size: 1.25rem; font-weight: 600; }
.wild-animals-faq-list { display: flex; flex-direction: column; gap: 0; }
.wild-animals-faq-item {
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-border);
}
.wild-animals-faq-item:last-child { border-bottom: none; }
.wild-animals-faq-q { margin: 0 0 0.35rem; font-size: 1rem; font-weight: 600; }
.wild-animals-faq-a {
  margin: 0;
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.55;
}

@media (max-width: 1024px) {
  .wild-animals-list { gap: 0.75rem; }
  .wild-animals-intro { margin-top: 1.5rem; padding: 1.25rem; }
  .wild-animals-faq { margin-top: 1.5rem; padding-top: 1.25rem; }
}

@media (max-width: 768px) {
  .wild-animals-page {
    --m-h1: 1.5rem; --m-h2: 1.3rem; --m-h3: 1.1rem; --m-p: 0.8rem; --m-line: 1.2; --m-gap: 0.7rem; --m-block: 1rem; --m-tight: 0.75rem;
  }
  .wild-animals-hero .wiki-hero__title { font-size: var(--m-h1); line-height: var(--m-line); }
  .wild-animals-hero .wiki-hero__subtitle { font-size: var(--m-p); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .wild-animals-hero .wiki-hero { margin-bottom: var(--m-block); padding: var(--m-block); }
  .wild-animals-count { font-size: var(--m-p); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .wild-animals-list { gap: var(--m-tight); }
  .wild-animals-row { padding: var(--m-block); }
  .wild-animals-name { font-size: var(--m-h3); line-height: var(--m-line); }
  .wild-animals-meta, .wild-animals-tag { font-size: var(--m-p); line-height: var(--m-line); }
  .wild-animals-intro { margin-top: var(--m-block); padding: var(--m-block); }
  .wild-animals-intro__title { font-size: var(--m-h2); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .wild-animals-intro__lead, .wild-animals-intro__text { font-size: var(--m-p); line-height: var(--m-line); }
  .wild-animals-faq { margin-top: var(--m-block); padding-top: var(--m-block); }
  .wild-animals-faq__title { font-size: var(--m-h2); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .wild-animals-faq-item { padding-bottom: var(--m-gap); }
  .wild-animals-faq-q { font-size: var(--m-h3); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .wild-animals-faq-a { font-size: var(--m-p); line-height: var(--m-line); }
}
</style>
