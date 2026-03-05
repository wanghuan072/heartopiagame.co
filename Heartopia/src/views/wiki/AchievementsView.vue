<template>
  <div class="achievements-page">
    <div class="container">
      <section class="wiki-hero achievements-hero">
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
          <span class="wiki-crumb-current">{{ t('WikiAchievements.breadcrumbCurrent') }}</span>
        </nav>

        <div class="wiki-hero__inner">
          <h1 class="wiki-hero__title">{{ t('WikiAchievements.heroTitle') }}</h1>
          <p class="wiki-hero__subtitle">{{ t('WikiAchievements.heroSubtitle') }}</p>
          <div class="wiki-filters">
            <label class="wiki-filter">
              <span class="wiki-filter__label">{{ t('WikiDetail.filterCategory') }}</span>
              <select v-model="filterCategory" class="wiki-select">
              <option value="">{{ t('WikiDetail.filterAll') }}</option>
              <option v-for="c in achievementCategories" :key="c" :value="c">{{ c }}</option>
            </select>
            </label>
          </div>
        </div>
      </section>

      <div class="achievements-by-category">
        <section
          v-for="cat in categoriesWithAchievements"
          :key="cat.name"
          class="achievement-section"
        >
          <h2 class="achievement-section-title">{{ cat.name }}</h2>
          <ul class="achievement-list">
            <li v-for="a in cat.items" :key="a.slug" class="achievement-row">
              <div class="achievement-row-img">
                <img :src="getAchievementImage(a)" :alt="a.imageAlt || a.name" class="achievement-img" loading="lazy" />
              </div>
              <div class="achievement-row-body">
                <div class="achievement-row-main">
                  <span class="achievement-name">{{ a.name }}</span>
                  <span class="achievement-reward">{{ t('WikiAchievements.rewardPrefix') }} {{ a.rewardTitle }}</span>
                </div>
                <p class="achievement-unlock">{{ t('WikiDetail.howToUnlock') }}: {{ a.howToUnlock }}</p>
                <p v-if="a.tips" class="achievement-tips">{{ t('WikiDetail.tips') }}: {{ a.tips }}</p>
              </div>
            </li>
          </ul>
        </section>
      </div>

      <section class="achievements-intro">
        <h2 class="achievements-intro__title">{{ t('WikiAchievements.introTitle') }}</h2>
        <p class="achievements-intro__lead">{{ t('WikiAchievements.introLead') }}</p>
        <p class="achievements-intro__text">{{ t('WikiAchievements.introTextPart1') }}<a :href="getLocalizedPath('/wiki')">{{ t('WikiDetail.breadcrumbWiki') }}</a>{{ t('WikiAchievements.introTextPart2') }}<a :href="getLocalizedPath('/wiki/fish')">{{ t('WikiDetail.fish') }}</a>{{ t('WikiAchievements.introTextPart3') }}<a :href="getLocalizedPath('/wiki/recipes')">{{ t('WikiDetail.recipes') }}</a>{{ t('WikiAchievements.introTextPart4') }}<a :href="getLocalizedPath('/')">{{ t('WikiDetail.homePage') }}</a>{{ t('WikiAchievements.introTextPart5') }}<a :href="getLocalizedPath('/map')">{{ t('WikiDetail.map') }}</a>, <a :href="getLocalizedPath('/codes')">{{ t('WikiDetail.giftCodes') }}</a>{{ t('WikiAchievements.introTextPart6') }}<a :href="getLocalizedPath('/guide')">{{ t('WikiDetail.guides') }}</a>{{ t('WikiAchievements.introTextPart7') }}</p>
      </section>

      <section class="achievements-faq">
        <h2 class="achievements-faq__title">{{ t('WikiAchievements.faqTitle') }}</h2>
        <div class="achievements-faq-list">
          <div class="achievements-faq-item">
            <h3 class="achievements-faq-q">{{ t('WikiAchievements.faqQ1') }}</h3>
            <p class="achievements-faq-a">{{ t('WikiAchievements.faqA1') }}</p>
          </div>
          <div class="achievements-faq-item">
            <h3 class="achievements-faq-q">{{ t('WikiAchievements.faqQ2') }}</h3>
            <p class="achievements-faq-a">{{ t('WikiAchievements.faqA2') }}</p>
          </div>
          <div class="achievements-faq-item">
            <h3 class="achievements-faq-q">{{ t('WikiAchievements.faqQ3') }}</h3>
            <p class="achievements-faq-a">{{ t('WikiAchievements.faqA3') }}</p>
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
const { data: achievements, loadData } = useWikiData('achievements')

onMounted(() => loadData('achievements'))
watch(() => locale.value, () => loadData('achievements'))

const categoryOrder = ['General', 'Fishing', 'Gardening', 'Cooking', 'Birdwatching', 'Insect Catching', 'Cat Caring', 'Dog Caring', 'Seasonal', 'Social']
const achievementCategories = computed(() =>
  [...new Set((achievements.value || []).map((a) => a.category))].sort(
    (a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b) || a.localeCompare(b)
  )
)
function getAchievementImage(a) {
  return a.imageSrc || a.image || `https://placehold.co/72x72/ffdac1/6B9B7B?text=Achievements`
}

const filterCategory = ref('')

const categoriesWithAchievements = computed(() => {
  const order = [...achievementCategories.value]
  const list = achievements.value || []
  const groups = order.map((name) => ({
    name,
    items: list.filter((a) => a.category === name),
  })).filter((g) => g.items.length > 0)
  if (!filterCategory.value) return groups
  return groups.filter((g) => g.name === filterCategory.value)
})
</script>

<style scoped>
.achievements-page {
  padding: 0 0 4rem;
}

/* Hero 配色：偏成就/暖金 */
.achievements-hero {
  --wiki-hero-accent: #b8860b;
  --wiki-hero-bg-from: #faf6f0;
  --wiki-hero-bg-to: #f3ede3;
  --wiki-hero-border: rgba(184, 134, 11, 0.18);
  --wiki-hero-crumb: #6b5d4a;
  --wiki-hero-crumb-sep: #8a7a65;
  --wiki-hero-current: #8b6914;
  --wiki-hero-title: #3d3225;
  --wiki-hero-desc: #5c5144;
  --wiki-hero-field-border: rgba(184, 134, 11, 0.3);
  --wiki-hero-field-text: #3d3225;
  --wiki-hero-focus-ring: rgba(184, 134, 11, 0.12);
}

.achievements-intro {
  margin-bottom: 2rem;
  padding: 1.5rem 1.25rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(74, 85, 104, 0.08);
  box-shadow: 0 2px 12px rgba(74, 85, 104, 0.04);
}
.achievements-intro__title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 0.75rem;
}
.achievements-intro__lead,
.achievements-intro__text {
  font-size: 0.95rem;
  color: var(--color-text-soft);
  line-height: 1.6;
  margin: 0 0 0.5rem;
}
.achievements-intro__text:last-child {
  margin-bottom: 0;
}
.achievements-intro a,
.achievements-faq-a a {
  color: var(--color-primary-dark);
  text-decoration: none;
}
.achievements-intro a:hover,
.achievements-faq-a a:hover {
  text-decoration: underline;
}
.achievements-by-category {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.achievement-section {
  padding: 1.25rem 1.5rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(74, 85, 104, 0.08);
  box-shadow: 0 2px 12px rgba(74, 85, 104, 0.04);
}

.achievement-section-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-primary-dark);
  margin: 0 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(139, 189, 155, 0.3);
}

.achievement-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.achievement-row {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(74, 85, 104, 0.06);
}
.achievement-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
.achievement-row:first-child {
  padding-top: 0;
}

.achievement-row-img {
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(139, 189, 155, 0.12);
}
.achievement-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.achievement-row-body {
  min-width: 0;
  flex: 1;
}

.achievement-row-main {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.achievement-name {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--color-text);
}
.achievement-reward {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.achievement-unlock {
  margin: 0.35rem 0 0;
  font-size: 0.88rem;
  color: var(--color-text-soft);
  line-height: 1.45;
}

.achievement-tips {
  margin: 0.25rem 0 0;
  font-size: 0.82rem;
  color: var(--color-text-muted);
  line-height: 1.4;
  padding-left: 1rem;
  border-left: 3px solid rgba(139, 189, 155, 0.35);
}

.achievements-faq {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}
.achievements-faq__title { margin: 0 0 1rem; font-size: 1.25rem; font-weight: 600; }
.achievements-faq-list { display: flex; flex-direction: column; gap: 0; }
.achievements-faq-item {
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-border);
}
.achievements-faq-item:last-child { border-bottom: none; }
.achievements-faq-q { margin: 0 0 0.35rem; font-size: 1rem; font-weight: 600; }
.achievements-faq-a {
  margin: 0;
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.55;
}

@media (max-width: 1024px) {
  .achievements-by-category { gap: 0.75rem; }
  .achievements-intro { margin-top: 1.5rem; padding: 1.25rem; }
  .achievements-faq { margin-top: 1.5rem; padding-top: 1.25rem; }
}

@media (max-width: 768px) {
  .achievements-page {
    --m-h1: 1.5rem; --m-h2: 1.3rem; --m-h3: 1.1rem; --m-p: 0.8rem; --m-line: 1.2; --m-gap: 0.7rem; --m-block: 1rem; --m-tight: 0.75rem;
  }
  .achievements-hero .wiki-hero__title { font-size: var(--m-h1); line-height: var(--m-line); }
  .achievements-hero .wiki-hero__subtitle { font-size: var(--m-p); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .achievements-hero .wiki-hero { margin-bottom: var(--m-block); padding: var(--m-block); }
  .achievements-intro { margin-top: var(--m-block); padding: var(--m-block); }
  .achievements-intro__title { font-size: var(--m-h2); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .achievements-intro__lead, .achievements-intro__text { font-size: var(--m-p); line-height: var(--m-line); }
  .achievements-by-category { gap: var(--m-tight); }
  .achievement-card { padding: var(--m-block); }
  .achievement-title { font-size: var(--m-h3); line-height: var(--m-line); }
  .achievement-desc, .achievement-unlock, .achievement-tips { font-size: var(--m-p); line-height: var(--m-line); }
  .achievements-faq { margin-top: var(--m-block); padding-top: var(--m-block); }
  .achievements-faq__title { font-size: var(--m-h2); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .achievements-faq-item { padding-bottom: var(--m-gap); }
  .achievements-faq-q { font-size: var(--m-h3); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .achievements-faq-a { font-size: var(--m-p); line-height: var(--m-line); }
}
</style>
