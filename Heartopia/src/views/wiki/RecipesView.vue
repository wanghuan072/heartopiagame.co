<template>
  <div class="recipes-page">
    <div class="container">
      <section class="wiki-hero recipes-hero">
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
          <span class="wiki-crumb-current">{{ t('WikiRecipes.breadcrumbCurrent') }}</span>
        </nav>

        <div class="wiki-hero__inner">
          <h1 class="wiki-hero__title">{{ t('WikiRecipes.heroTitle') }}</h1>
          <p class="wiki-hero__subtitle">{{ t('WikiRecipes.heroSubtitle') }}</p>
          <div class="wiki-filters">
            <label class="wiki-filter">
              <span class="wiki-filter__label">{{ t('WikiDetail.filterLevel') }}</span>
              <select v-model="filterLevel" class="wiki-select">
                <option value="">{{ t('WikiDetail.filterAllLevels') }}</option>
                <option v-for="n in recipeLevels" :key="n" :value="n">Lv.{{ n }}</option>
              </select>
            </label>
            <label class="wiki-filter">
              <span class="wiki-filter__label">{{ t('WikiDetail.filterTool') }}</span>
              <select v-model="filterTool" class="wiki-select">
                <option value="">{{ t('WikiDetail.filterAllTools') }}</option>
                <option v-for="t in recipeTools" :key="t" :value="t">{{ t }}</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <p class="recipes-count">{{ t('WikiRecipes.count', { n: filteredRecipes.length }) }}</p>

      <div class="recipes-list">
        <article v-for="r in filteredRecipes" :key="r.slug" class="recipes-row">
          <div class="recipes-row-head">
            <span class="recipes-name">{{ r.name }}</span>
            <span class="recipes-meta">
              <template v-if="r.level != null">Lv.{{ r.level }}</template>
              <template v-if="r.tool"> · {{ r.tool }}</template>
            </span>
          </div>
          <div v-if="r.ingredients" class="recipes-ingredients">
            <span class="recipes-label">{{ t('WikiDetail.labelIngredients') }}</span>
            <span class="recipes-ing-text">{{ r.ingredients }}</span>
          </div>
          <div v-if="r.recipePrice != null || r.cost != null" class="recipes-cost-row">
            <template v-if="r.recipePrice != null">
              <span class="recipes-label">{{ t('WikiDetail.labelRecipe') }}</span>
              <span class="recipes-value">{{ r.recipePrice }}</span>
            </template>
            <template v-if="r.cost != null">
              <span class="recipes-label">{{ t('WikiDetail.labelCost') }}</span>
              <span class="recipes-value">{{ r.cost }}</span>
            </template>
          </div>
          <div v-if="r.sellPrices && r.sellPrices.length" class="recipes-sell">
            <span class="recipes-label">{{ t('WikiDetail.labelSellPrices') }}</span>
            <div class="recipes-sell-list">
              <span v-for="(price, i) in r.sellPrices" :key="i" class="recipes-sell-item">
                <span class="recipes-stars" :aria-label="`${i + 1} star`">{{ '★'.repeat(i + 1) }}</span>
                <span class="recipes-price-num">{{ price }}</span>
              </span>
            </div>
          </div>
          <div v-if="r.profit && r.profit.length" class="recipes-profit">
            <span class="recipes-label">{{ t('WikiDetail.labelProfit') }}</span>
            <span class="recipes-profit-text">{{ r.profit.map((p) => (p >= 0 ? '+' : '') + p).join(' · ') }}</span>
          </div>
          <div v-if="r.energyGained && r.energyGained.length" class="recipes-energy">
            <span class="recipes-label">{{ t('WikiDetail.labelEnergy') }}</span>
            <span class="recipes-energy-text">+{{ r.energyGained.join(' · +') }}</span>
          </div>
        </article>
      </div>

      <section class="recipes-intro">
        <h2 class="recipes-intro__title">{{ t('WikiRecipes.introTitle') }}</h2>
        <p class="recipes-intro__lead">{{ t('WikiRecipes.introLead') }}</p>
        <p class="recipes-intro__text">{{ t('WikiRecipes.introTextPart1') }}<a :href="getLocalizedPath('/wiki')">{{ t('WikiDetail.breadcrumbWiki') }}</a>{{ t('WikiRecipes.introTextPart2') }}<a :href="getLocalizedPath('/wiki/fish')">{{ t('WikiDetail.fish') }}</a>{{ t('WikiRecipes.introTextPart3') }}<a :href="getLocalizedPath('/wiki/crops')">{{ t('WikiDetail.crops') }}</a>{{ t('WikiRecipes.introTextPart4') }}<a :href="getLocalizedPath('/')">{{ t('WikiDetail.homePage') }}</a>{{ t('WikiRecipes.introTextPart5') }}<a :href="getLocalizedPath('/guide')">{{ t('WikiDetail.guides') }}</a>{{ t('WikiRecipes.introTextPart6') }}</p>
      </section>

      <section class="recipes-faq">
        <h2 class="recipes-faq__title">{{ t('WikiRecipes.faqTitle') }}</h2>
        <div class="recipes-faq-list">
          <div class="recipes-faq-item">
            <h3 class="recipes-faq-q">{{ t('WikiRecipes.faqQ1') }}</h3>
            <p class="recipes-faq-a">{{ t('WikiRecipes.faqA1') }}</p>
          </div>
          <div class="recipes-faq-item">
            <h3 class="recipes-faq-q">{{ t('WikiRecipes.faqQ2') }}</h3>
            <p class="recipes-faq-a">{{ t('WikiRecipes.faqA2') }}</p>
          </div>
          <div class="recipes-faq-item">
            <h3 class="recipes-faq-q">{{ t('WikiRecipes.faqQ3') }}</h3>
            <p class="recipes-faq-a">{{ t('WikiRecipes.faqA3') }}</p>
          </div>
          <div class="recipes-faq-item">
            <h3 class="recipes-faq-q">{{ t('WikiRecipes.faqQ4') }}</h3>
            <p class="recipes-faq-a">{{ t('WikiRecipes.faqA4Part1') }}<a :href="getLocalizedPath('/events')">{{ t('WikiDetail.events') }}</a>{{ t('WikiRecipes.faqA4Part2') }}<a :href="getLocalizedPath('/events')">{{ t('WikiDetail.events') }}</a>{{ t('WikiRecipes.faqA4Part3') }}<a :href="getLocalizedPath('/')">{{ t('WikiDetail.homePage') }}</a>{{ t('WikiRecipes.faqA4Part4') }}<a :href="getLocalizedPath('/codes')">{{ t('WikiDetail.giftCodes') }}</a>{{ t('WikiRecipes.faqA4Part5') }}</p>
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
const { data: recipeList, loadData } = useWikiData('recipes')

onMounted(() => loadData('recipes'))
watch(() => locale.value, () => loadData('recipes'))

const recipeLevels = computed(() => [...new Set((recipeList.value || []).map((r) => r.level).filter(Number))].sort((a, b) => a - b))
const recipeTools = ['Stove']

const filterLevel = ref('')
const filterTool = ref('')

const filteredRecipes = computed(() => {
  return (recipeList.value || []).filter((r) => {
    if (filterLevel.value !== '') {
      const lv = Number(filterLevel.value)
      if (r.level !== lv) return false
    }
    if (filterTool.value && r.tool !== filterTool.value) return false
    return true
  })
})
</script>

<style scoped>
.recipes-page {
  padding: 0 0 4rem;
}

.recipes-hero {
  --wiki-hero-accent: #b8860b;
  --wiki-hero-bg-from: #fdf9f0;
  --wiki-hero-bg-to: #f8f0e0;
  --wiki-hero-border: rgba(184, 134, 11, 0.2);
  --wiki-hero-crumb: #6b5c4a;
  --wiki-hero-crumb-sep: #8a7a65;
  --wiki-hero-current: #8b6914;
  --wiki-hero-title: #3d3225;
  --wiki-hero-desc: #5c5144;
  --wiki-hero-field-border: rgba(184, 134, 11, 0.28);
  --wiki-hero-field-text: #3d3225;
  --wiki-hero-focus-ring: rgba(184, 134, 11, 0.15);
}

.recipes-count {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin: 0 0 1rem;
}

.recipes-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}
@media (max-width: 560px) {
  .recipes-list {
    grid-template-columns: 1fr;
  }
}

.recipes-row {
  padding: 1rem 1.25rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(74, 85, 104, 0.08);
  border-left: 4px solid rgba(184, 134, 11, 0.5);
  box-shadow: 0 2px 10px rgba(74, 85, 104, 0.04);
}

.recipes-row-head {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
.recipes-name {
  font-weight: 600;
  font-size: 1rem;
  color: var(--color-text);
}
.recipes-meta {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.recipes-ingredients,
.recipes-cost-row,
.recipes-sell,
.recipes-profit,
.recipes-energy {
  margin-bottom: 0.4rem;
}
.recipes-label {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-right: 0.35rem;
}
.recipes-ing-text {
  font-size: 0.9rem;
  color: var(--color-text-soft);
  line-height: 1.45;
}
.recipes-cost-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0 1rem;
}
.recipes-cost-row .recipes-label { margin-right: 0.2rem; }
.recipes-value {
  font-size: 0.85rem;
  color: var(--color-text-soft);
}

.recipes-sell-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 0.85rem;
  margin-top: 0.25rem;
}
.recipes-sell-item {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}
.recipes-stars {
  color: #d4a84b;
  font-size: 0.85rem;
  line-height: 1;
}
.recipes-price-num {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.recipes-profit-text,
.recipes-energy-text {
  font-size: 0.85rem;
  color: var(--color-text-soft);
}

.recipes-intro {
  margin-top: 2.5rem;
  padding: 1.5rem 1.25rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(74, 85, 104, 0.08);
  box-shadow: 0 2px 12px rgba(74, 85, 104, 0.04);
}
.recipes-intro__title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 0.75rem;
}
.recipes-intro__lead,
.recipes-intro__text {
  font-size: 0.95rem;
  color: var(--color-text-soft);
  line-height: 1.6;
  margin: 0 0 0.5rem;
}
.recipes-intro__text:last-child {
  margin-bottom: 0;
}
.recipes-intro a {
  color: var(--color-primary-dark);
  text-decoration: none;
}
.recipes-intro a:hover {
  text-decoration: underline;
}

.recipes-faq {
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(74, 85, 104, 0.1);
}
.recipes-faq__title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 1rem;
}
.recipes-faq-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.recipes-faq-item {
  border-bottom: 1px solid rgba(74, 85, 104, 0.1);
  padding: 1rem 0;
}
.recipes-faq-item:last-child {
  border-bottom: none;
}
.recipes-faq-q {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 0.4rem;
  line-height: 1.35;
}
.recipes-faq-a {
  font-size: 0.95rem;
  color: var(--color-text-soft);
  line-height: 1.6;
  margin: 0;
}
.recipes-faq a {
  color: var(--color-primary-dark);
  text-decoration: none;
}
.recipes-faq a:hover {
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .recipes-list { gap: 0.75rem; }
  .recipes-intro { margin-top: 1.5rem; padding: 1.25rem; }
  .recipes-faq { margin-top: 1.5rem; padding-top: 1.25rem; }
}

@media (max-width: 768px) {
  .recipes-page {
    --m-h1: 1.5rem; --m-h2: 1.3rem; --m-h3: 1.1rem; --m-p: 0.8rem; --m-line: 1.2; --m-gap: 0.7rem; --m-block: 1rem; --m-tight: 0.75rem;
  }
  .recipes-hero .wiki-hero__title { font-size: var(--m-h1); line-height: var(--m-line); }
  .recipes-hero .wiki-hero__subtitle { font-size: var(--m-p); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .recipes-hero .wiki-hero { margin-bottom: var(--m-block); padding: var(--m-block); }
  .recipes-count { font-size: var(--m-p); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .recipes-list { gap: var(--m-tight); }
  .recipes-row { padding: var(--m-block); }
  .recipes-name { font-size: var(--m-h3); line-height: var(--m-line); }
  .recipes-meta, .recipes-ing-text, .recipes-value { font-size: var(--m-p); line-height: var(--m-line); }
  .recipes-intro { margin-top: var(--m-block); padding: var(--m-block); }
  .recipes-intro__title { font-size: var(--m-h2); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .recipes-intro__lead, .recipes-intro__text { font-size: var(--m-p); line-height: var(--m-line); }
  .recipes-faq { margin-top: var(--m-block); padding-top: var(--m-block); }
  .recipes-faq__title { font-size: var(--m-h2); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .recipes-faq-item { padding: var(--m-gap) 0; }
  .recipes-faq-q { font-size: var(--m-h3); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .recipes-faq-a { font-size: var(--m-p); line-height: var(--m-line); }
}
</style>
