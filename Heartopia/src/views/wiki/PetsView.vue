<template>
  <div class="pets-page">
    <div class="container">
      <section class="wiki-hero pets-hero">
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
          <span class="wiki-crumb-current">{{ t('WikiPets.breadcrumbCurrent') }}</span>
        </nav>

        <div class="wiki-hero__inner">
          <h1 class="wiki-hero__title">{{ t('WikiPets.heroTitle') }}</h1>
          <p class="wiki-hero__subtitle">{{ t('WikiPets.heroSubtitle') }}</p>
        </div>
      </section>

      <section class="pets-guide">
        <div class="pets-guide-overview">
          <span class="pets-guide-stat">{{ t('WikiPets.overviewCats') }}</span>
          <span class="pets-guide-stat">{{ t('WikiPets.overviewDogs') }}</span>
          <span class="pets-guide-stat">{{ t('WikiPets.overviewCapacity') }}</span>
          <span class="pets-guide-stat">{{ t('WikiPets.overviewUnlockLevel') }}</span>
        </div>

        <div class="pets-guide-block">
          <h2 class="pets-guide-title">{{ t('WikiPets.howToUnlockTitle') }}</h2>
          <ol class="pets-guide-steps">
            <li>{{ t('WikiPets.unlockStep1') }}</li>
            <li>{{ t('WikiPets.unlockStep2') }}</li>
            <li>{{ t('WikiPets.unlockStep3') }}</li>
            <li>{{ t('WikiPets.unlockStep4') }}</li>
            <li>{{ t('WikiPets.unlockStep5') }}</li>
            <li>{{ t('WikiPets.unlockStep6') }}</li>
          </ol>
          <p class="pets-guide-tip">{{ t('WikiPets.unlockTip') }}</p>
        </div>

        <div class="pets-guide-block">
          <h2 class="pets-guide-title">{{ t('WikiPets.howToGetMoreTitle') }}</h2>
          <p class="pets-guide-desc">{{ t('WikiPets.getMoreDesc') }}</p>
          <div class="pets-guide-levels">
            <div class="pets-guide-level-group">
              <h3 class="pets-guide-subtitle">{{ t('WikiPets.catCaringLevels') }}</h3>
              <ul class="pets-guide-list">
                <li>{{ t('WikiPets.catLv1') }}</li>
                <li>{{ t('WikiPets.catLv2') }}</li>
                <li>{{ t('WikiPets.catLv5') }}</li>
                <li>{{ t('WikiPets.catLv7') }}</li>
                <li>{{ t('WikiPets.catLv9') }}</li>
              </ul>
            </div>
            <div class="pets-guide-level-group">
              <h3 class="pets-guide-subtitle">{{ t('WikiPets.dogCaringLevels') }}</h3>
              <ul class="pets-guide-list">
                <li>{{ t('WikiPets.dogLv1') }}</li>
                <li>{{ t('WikiPets.dogLv4') }}</li>
                <li>{{ t('WikiPets.dogLv8') }}</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="pets-guide-block">
          <h2 class="pets-guide-title">{{ t('WikiPets.howToCareTitle') }}</h2>
          <p class="pets-guide-desc">{{ t('WikiPets.careDesc') }}</p>
          <ul class="pets-guide-care">
            <li>{{ t('WikiPets.carePetting') }}</li>
            <li>{{ t('WikiPets.careFeeding') }}</li>
            <li>{{ t('WikiPets.careBathing') }}</li>
            <li>{{ t('WikiPets.careHangingOut') }}</li>
            <li>{{ t('WikiPets.careFurniture') }}</li>
            <li>{{ t('WikiPets.careTricks') }}</li>
            <li>{{ t('WikiPets.careWalks') }}</li>
          </ul>
        </div>
      </section>

      <section class="pets-section">
        <h2 class="pets-section-title">{{ t('WikiPets.sectionCats') }}</h2>
        <p class="pets-section-desc">{{ t('WikiPets.sectionCatsDesc') }}</p>
        <p class="pets-count">{{ t('WikiPets.countCats', { n: petCats.length }) }}</p>
        <div class="pets-list">
          <article v-for="p in petCats" :key="p.slug" class="pets-row">
            <div class="pets-row-img">
              <img :src="getPetImage(p)" :alt="p.imageAlt || p.name" class="pets-img" loading="lazy" />
            </div>
            <div class="pets-row-body">
              <div class="pets-row-main">
                <span class="pets-name">{{ p.name }}</span>
              </div>
              <div class="pets-info">
                <div class="pets-info-row">
                  <span class="pets-tag-label">{{ t('WikiDetail.favoriteFood') }}</span>
                  <span class="pets-tag">{{ p.favoriteFood }}</span>
                </div>
                <div v-if="p.specialAbility" class="pets-info-row">
                  <span class="pets-tag-label">{{ t('WikiDetail.ability') }}</span>
                  <span class="pets-tag pets-tag--ability">{{ p.specialAbility }}</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="pets-section">
        <h2 class="pets-section-title">{{ t('WikiPets.sectionDogs') }}</h2>
        <p class="pets-section-desc">{{ t('WikiPets.sectionDogsDesc') }}</p>
        <div class="wiki-filters pets-section-filters">
          <label class="wiki-filter">
            <span class="wiki-filter__label">{{ t('WikiPets.filterSize') }}</span>
            <select v-model="filterDogSize" class="wiki-select">
              <option value="">{{ t('WikiDetail.filterAll') }}</option>
              <option v-for="s in petSizes" :key="s" :value="s">{{ s }}</option>
            </select>
          </label>
        </div>
        <p class="pets-count">{{ t('WikiPets.countDogs', { n: filteredDogs.length }) }}</p>
        <div class="pets-list">
          <article v-for="p in filteredDogs" :key="p.slug" class="pets-row">
            <div class="pets-row-img">
              <img :src="getPetImage(p)" :alt="p.imageAlt || p.name" class="pets-img" loading="lazy" />
            </div>
            <div class="pets-row-body">
              <div class="pets-row-main">
                <span class="pets-name">{{ p.name }}</span>
                <span class="pets-meta">{{ p.size }}</span>
              </div>
              <div class="pets-info">
                <div class="pets-info-row">
                  <span class="pets-tag-label">{{ t('WikiDetail.favoriteFood') }}</span>
                  <span class="pets-tag">{{ p.favoriteFood }}</span>
                </div>
                <div v-if="p.specialAbility" class="pets-info-row">
                  <span class="pets-tag-label">{{ t('WikiDetail.ability') }}</span>
                  <span class="pets-tag pets-tag--ability">{{ p.specialAbility }}</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="pets-intro">
        <h2 class="pets-intro__title">{{ t('WikiPets.introTitle') }}</h2>
        <p class="pets-intro__lead">{{ t('WikiPets.introLead') }}</p>
        <p class="pets-intro__text">{{ t('WikiPets.introTextPart1') }}<a :href="getLocalizedPath('/wiki')">{{ t('WikiDetail.breadcrumbWiki') }}</a>{{ t('WikiPets.introTextPart2') }}<a :href="getLocalizedPath('/wiki/wild-animals')">{{ t('WikiWildAnimals.breadcrumbCurrent') }}</a>{{ t('WikiPets.introTextPart3') }}<a :href="getLocalizedPath('/wiki/fish')">{{ t('WikiDetail.fish') }}</a>{{ t('WikiPets.introTextPart4') }}<a :href="getLocalizedPath('/')">{{ t('WikiDetail.homePage') }}</a>{{ t('WikiPets.introTextPart5') }}<a :href="getLocalizedPath('/map')">{{ t('WikiDetail.map') }}</a>{{ t('WikiPets.introTextPart6') }}<a :href="getLocalizedPath('/codes')">{{ t('WikiDetail.giftCodes') }}</a>{{ t('WikiPets.introTextPart7') }}<a :href="getLocalizedPath('/characters')">{{ t('WikiDetail.characters') }}</a>{{ t('WikiPets.introTextPart8') }}</p>
      </section>

      <section class="pets-faq">
        <h2 class="pets-faq__title">{{ t('WikiPets.faqTitle') }}</h2>
        <div class="pets-faq-list">
          <div class="pets-faq-item">
            <h3 class="pets-faq-q">{{ t('WikiPets.faqQ1') }}</h3>
            <p class="pets-faq-a">{{ t('WikiPets.faqA1') }}</p>
          </div>
          <div class="pets-faq-item">
            <h3 class="pets-faq-q">{{ t('WikiPets.faqQ2') }}</h3>
            <p class="pets-faq-a">{{ t('WikiPets.faqA2') }}</p>
          </div>
          <div class="pets-faq-item">
            <h3 class="pets-faq-q">{{ t('WikiPets.faqQ3') }}</h3>
            <p class="pets-faq-a">{{ t('WikiPets.faqA3') }}</p>
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
const { data: pets, loadData } = useWikiData('pets')

onMounted(() => loadData('pets'))
watch(() => locale.value, () => loadData('pets'))

const petCats = computed(() => (pets.value || []).filter((p) => p.type === 'cat'))
const petDogs = computed(() => (pets.value || []).filter((p) => p.type === 'dog'))
const petSizes = ['small', 'medium', 'large']
function getPetImage(p) {
  return p.imageSrc || p.image || `https://placehold.co/72x72/fce4ec/c2185b?text=${p.type === 'cat' ? '🐱' : '🐕'}`
}

const filterDogSize = ref('')

const filteredDogs = computed(() => {
  if (!filterDogSize.value) return petDogs.value
  return petDogs.value.filter((p) => p.size === filterDogSize.value)
})
</script>

<style scoped>
.pets-page {
  padding: 0 0 4rem;
}

/* Hero accent: pet / heart theme */
.pets-hero {
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

/* Guide content */
.pets-guide {
  margin-bottom: 2rem;
  padding: 1.25rem 1.5rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(74, 85, 104, 0.08);
  box-shadow: 0 2px 10px rgba(74, 85, 104, 0.04);
}
.pets-guide-overview {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.25rem;
  margin-bottom: 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(74, 85, 104, 0.1);
}
.pets-guide-stat {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-primary-dark);
}
.pets-guide-block {
  margin-bottom: 1.25rem;
}
.pets-guide-block:last-child {
  margin-bottom: 0;
}
.pets-guide-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 0.5rem;
}
.pets-guide-desc {
  font-size: 0.9rem;
  color: var(--color-text-soft);
  margin: 0 0 0.5rem;
  line-height: 1.5;
}
.pets-guide-steps {
  margin: 0 0 0.5rem;
  padding-left: 1.25rem;
  font-size: 0.9rem;
  color: var(--color-text-soft);
  line-height: 1.6;
}
.pets-guide-tip {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin: 0;
  padding: 0.5rem 0.75rem;
  background: rgba(194, 24, 91, 0.06);
  border-radius: 8px;
  border-left: 3px solid rgba(194, 24, 91, 0.35);
  line-height: 1.5;
}
.pets-guide-levels {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 0.5rem;
}
.pets-guide-level-group {
  padding: 0.75rem 1rem;
  border-radius: 10px;
  background: rgba(74, 85, 104, 0.04);
}
.pets-guide-subtitle {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 0.35rem;
}
.pets-guide-list {
  margin: 0;
  padding-left: 1rem;
  font-size: 0.85rem;
  color: var(--color-text-soft);
  line-height: 1.6;
}
.pets-guide-care {
  margin: 0;
  padding-left: 1.25rem;
  font-size: 0.9rem;
  color: var(--color-text-soft);
  line-height: 1.65;
}
.pets-guide-care li {
  margin-bottom: 0.25rem;
}

/* Section: Cat / Dog lists */
.pets-section {
  margin-bottom: 2rem;
}
.pets-section-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 0.25rem;
}
.pets-section-desc {
  font-size: 0.9rem;
  color: var(--color-text-soft);
  margin: 0 0 0.75rem;
  line-height: 1.5;
}
.pets-section-filters {
  margin-bottom: 0.5rem;
}
.pets-count {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin: 0 0 0.75rem;
}

.pets-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}
@media (max-width: 560px) {
  .pets-list {
    grid-template-columns: 1fr;
  }
}

.pets-row {
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

.pets-row-img {
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(252, 228, 236, 0.6);
}
.pets-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.pets-row-body {
  min-width: 0;
  flex: 1;
}

.pets-row-main {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.35rem;
}
.pets-name {
  font-weight: 600;
  font-size: 1rem;
  color: var(--color-text);
}
.pets-meta {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.pets-info {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.pets-info-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem;
}
.pets-tag-label {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-right: 0.15rem;
}
.pets-tag {
  font-size: 0.75rem;
  padding: 0.15rem 0.45rem;
  border-radius: 6px;
  background: rgba(74, 85, 104, 0.08);
  color: var(--color-text-soft);
}
.pets-tag--ability {
  background: rgba(194, 24, 91, 0.1);
  color: var(--wiki-hero-accent);
  font-weight: 500;
}

.pets-intro {
  margin-top: 2.5rem;
  padding: 1.5rem;
  border-radius: 12px;
  background: var(--color-surface);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}
.pets-intro__title { margin: 0 0 0.75rem; font-size: 1.25rem; font-weight: 600; }
.pets-intro__lead { margin: 0 0 0.75rem; line-height: 1.6; color: var(--color-text); }
.pets-intro__text { margin: 0; font-size: 0.95rem; color: var(--color-text-muted); }
.pets-intro a { color: var(--color-primary); text-decoration: none; }
.pets-intro a:hover { text-decoration: underline; }

.pets-faq {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}
.pets-faq__title { margin: 0 0 1rem; font-size: 1.25rem; font-weight: 600; }
.pets-faq-list { display: flex; flex-direction: column; gap: 0; }
.pets-faq-item {
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-border);
}
.pets-faq-item:last-child { border-bottom: none; }
.pets-faq-q { margin: 0 0 0.35rem; font-size: 1rem; font-weight: 600; }
.pets-faq-a {
  margin: 0;
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.55;
}

@media (max-width: 1024px) {
  .pets-list { gap: 0.75rem; }
  .pets-intro { margin-top: 1.5rem; padding: 1.25rem; }
  .pets-faq { margin-top: 1.5rem; padding-top: 1.25rem; }
}

@media (max-width: 768px) {
  .pets-page {
    --m-h1: 1.5rem; --m-h2: 1.3rem; --m-h3: 1.1rem; --m-p: 0.8rem; --m-line: 1.2; --m-gap: 0.7rem; --m-block: 1rem; --m-tight: 0.75rem;
  }
  .pets-hero .wiki-hero__title { font-size: var(--m-h1); line-height: var(--m-line); }
  .pets-hero .wiki-hero__subtitle { font-size: var(--m-p); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .pets-hero .wiki-hero { margin-bottom: var(--m-block); padding: var(--m-block); }
  .pets-count { font-size: var(--m-p); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .pets-list { gap: var(--m-tight); }
  .pets-row { padding: var(--m-block); }
  .pets-name { font-size: var(--m-h3); line-height: var(--m-line); }
  .pets-meta, .pets-tag { font-size: var(--m-p); line-height: var(--m-line); }
  .pets-intro { margin-top: var(--m-block); padding: var(--m-block); }
  .pets-intro__title { font-size: var(--m-h2); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .pets-intro__lead, .pets-intro__text { font-size: var(--m-p); line-height: var(--m-line); }
  .pets-faq { margin-top: var(--m-block); padding-top: var(--m-block); }
  .pets-faq__title { font-size: var(--m-h2); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .pets-faq-item { padding-bottom: var(--m-gap); }
  .pets-faq-q { font-size: var(--m-h3); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .pets-faq-a { font-size: var(--m-p); line-height: var(--m-line); }
}
</style>
