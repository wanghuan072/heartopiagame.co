<template>
  <div class="wiki-list-page">
    <PageHero
      :eyebrow="t('WikiPage.hero.eyebrow')"
      :title="t('WikiPage.hero.title')"
      :description="t('WikiPage.hero.description')"
      :breadcrumbs="[{ label: t('common.breadcrumbHome'), to: '/' }, { label: t('WikiPage.breadcrumbs.wiki') }]"
    />

    <section class="wiki-list-main">
      <div class="container">
        <h2 class="wiki-list-heading">{{ t('WikiPage.main.heading') }}</h2>
        <p class="wiki-list-intro">{{ t('WikiPage.main.intro') }}</p>
        <div class="wiki-grid">
          <a :href="getLocalizedPath('/wiki/recipes')" class="wiki-block">
            <span class="wiki-block-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 10h12v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6z"/><path d="M8 8V6M16 8V6M12 6v2"/></svg>
            </span>
            <span class="wiki-block-label">{{ t('WikiPage.grid.recipesTitle') }}</span>
          </a>
          <a :href="getLocalizedPath('/wiki/achievements')" class="wiki-block">
            <span class="wiki-block-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M7 10l2 2 2-2 2 2 2-2M6 4h12l-1.5 6H7.5L6 4z"/><path d="M9 10h6M8 14h8"/></svg>
            </span>
            <span class="wiki-block-label">{{ t('WikiPage.grid.achievementsTitle') }}</span>
          </a>
          <a :href="getLocalizedPath('/wiki/fish')" class="wiki-block">
            <span class="wiki-block-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12c-2.5 0-4.5 2-4.5 4.5S9.5 21 12 21s4.5-2 4.5-4.5S14.5 12 12 12z"/><path d="M17 9c-1.5-1-3.5-1.5-5-1.5s-3.5.5-5 1.5"/><path d="M7 15c1.5 1 3.5 1.5 5 1.5s3.5-.5 5-1.5"/></svg>
            </span>
            <span class="wiki-block-label">{{ t('WikiPage.grid.fish') }}</span>
          </a>
          <a :href="getLocalizedPath('/wiki/insects')" class="wiki-block">
            <span class="wiki-block-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4c-2 2-2 6-2 8s0 6 2 8 2-6 2-8 0-6-2-8z"/><path d="M8 8c0 2 1 4 4 4s4-2 4-4"/><path d="M4 12l2 2M20 12l-2 2M12 4v2M12 18v2"/></svg>
            </span>
            <span class="wiki-block-label">{{ t('WikiPage.grid.insects') }}</span>
          </a>
          <a :href="getLocalizedPath('/wiki/birds')" class="wiki-block">
            <span class="wiki-block-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5c-3 0-5 2-5 5 0 3 2 5 5 6 3-1 5-3 5-6 0-3-2-5-5-5z"/><circle cx="12" cy="9" r="1.8"/></svg>
            </span>
            <span class="wiki-block-label">{{ t('WikiPage.grid.birds') }}</span>
          </a>
          <a :href="getLocalizedPath('/wiki/crops')" class="wiki-block">
            <span class="wiki-block-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V8M9 11l3-3 3 3"/><path d="M8 14h2M14 14h2M10 17h4M7 20h10"/><path d="M12 4l-1 2h2L12 4z"/></svg>
            </span>
            <span class="wiki-block-label">{{ t('WikiPage.grid.crops') }}</span>
          </a>
          <a :href="getLocalizedPath('/wiki/flowers')" class="wiki-block">
            <span class="wiki-block-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/><path d="M5.64 5.64l2.12 2.12M16.24 16.24l2.12 2.12M5.64 18.36l2.12-2.12M16.24 7.76l2.12-2.12"/></svg>
            </span>
            <span class="wiki-block-label">{{ t('WikiPage.grid.flowers') }}</span>
          </a>
          <a :href="getLocalizedPath('/wiki/foraging')" class="wiki-block">
            <span class="wiki-block-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-8M6 14l6-6 6 6"/><path d="M6 8l6-6 6 6"/></svg>
            </span>
            <span class="wiki-block-label">{{ t('WikiPage.grid.foraging') }}</span>
          </a>
          <a :href="getLocalizedPath('/wiki/wild-animals')" class="wiki-block">
            <span class="wiki-block-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10c-1.5 0-2.5 1.5-2.5 3s1 3 2.5 3 2.5-1.5 2.5-3-1-3-2.5-3z"/><path d="M12 6c-2 0-3 1.5-3 3.5S10 13 12 13s3-1.5 3-3.5S14 6 12 6z"/><path d="M8 8c-1 0-1.5 1-1.5 2s.5 2 1.5 2 1.5-1 1.5-2S9 8 8 8z"/></svg>
            </span>
            <span class="wiki-block-label">{{ t('WikiPage.grid.wildAnimals') }}</span>
          </a>
          <a :href="getLocalizedPath('/wiki/pets')" class="wiki-block">
            <span class="wiki-block-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </span>
            <span class="wiki-block-label">{{ t('WikiPage.grid.pets') }}</span>
          </a>
        </div>
      </div>
    </section>

    <section class="wiki-why">
      <div class="container">
        <h2 class="wiki-section-title">{{ t('WikiPage.why.heading') }}</h2>
        <p class="wiki-why-lead">{{ t('WikiPage.why.lead') }}</p>
        <ul class="wiki-why-list">
          <li>{{ t('WikiPage.why.bullet1') }}</li>
          <li>{{ t('WikiPage.why.bullet2') }}</li>
          <li>{{ t('WikiPage.why.bullet3') }}</li>
          <li>{{ t('WikiPage.why.bullet4Part1') }}<a :href="getLocalizedPath('/')">{{ t('WikiPage.homePage') }}</a>{{ t('WikiPage.why.bullet4Part2') }}<a :href="getLocalizedPath('/codes')">{{ t('WikiPage.giftCodes') }}</a>{{ t('WikiPage.why.bullet4Part3') }}<a :href="getLocalizedPath('/characters')">{{ t('WikiPage.characters') }}</a>{{ t('WikiPage.why.bullet4Part4') }}</li>
        </ul>
      </div>
    </section>

    <section class="wiki-faq">
      <div class="container">
        <h2 class="wiki-section-title">{{ t('WikiPage.faq.heading') }}</h2>
        <div class="wiki-faq-list">
          <div class="wiki-faq-item">
            <h3 class="wiki-faq-q">{{ t('WikiPage.faq.q1') }}</h3>
            <p class="wiki-faq-a">{{ t('WikiPage.faq.a1Part1') }}<a :href="getLocalizedPath('/map')">{{ t('WikiPage.map') }}</a>{{ t('WikiPage.faq.a1Part2') }}<a :href="getLocalizedPath('/')">{{ t('WikiPage.homePage') }}</a>{{ t('WikiPage.faq.a1Part3') }}<a :href="getLocalizedPath('/guide')">{{ t('WikiPage.guides') }}</a>{{ t('WikiPage.faq.a1Part4') }}</p>
          </div>
          <div class="wiki-faq-item">
            <h3 class="wiki-faq-q">{{ t('WikiPage.faq.q2') }}</h3>
            <p class="wiki-faq-a">{{ t('WikiPage.faq.a2') }}</p>
          </div>
          <div class="wiki-faq-item">
            <h3 class="wiki-faq-q">{{ t('WikiPage.faq.q3') }}</h3>
            <p class="wiki-faq-a">{{ t('WikiPage.faq.a3Part1') }}<a :href="getLocalizedPath('/map')">{{ t('WikiPage.map') }}</a>{{ t('WikiPage.faq.a3Part2') }}<a :href="getLocalizedPath('/characters')">{{ t('WikiPage.characters') }}</a>{{ t('WikiPage.faq.a3Part3') }}</p>
          </div>
          <div class="wiki-faq-item">
            <h3 class="wiki-faq-q">{{ t('WikiPage.faq.q4') }}</h3>
            <p class="wiki-faq-a">{{ t('WikiPage.faq.a4') }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useLocalizedPath } from '@/composables/useLocalizedPath'
import PageHero from '@/components/PageHero.vue'

const { t } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
</script>

<style scoped>
.wiki-list-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #f8fbfa 0%, #fff9f6 100%);
}

.wiki-list-main {
  padding: 2.5rem 0;
}

.wiki-list-heading {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 0.5rem;
}

.wiki-list-intro {
  font-size: 0.95rem;
  color: var(--color-text-soft);
  margin: 0 0 1.5rem;
  line-height: 1.55;
}

.wiki-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}

@media (max-width: 1024px) {
  .wiki-list-main {
    padding: 1.5rem 0;
  }
  .wiki-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
  }
  .wiki-why,
  .wiki-faq {
    padding: 2rem 0;
  }
}

@media (max-width: 768px) {
  .wiki-list-page {
    --m-h2: 1.3rem;
    --m-h3: 1.1rem;
    --m-p: 0.8rem;
    --m-line: 1.2;
    --m-gap: 0.7rem;
    --m-block: 1rem;
    --m-tight: 0.75rem;
  }
  .wiki-list-main {
    padding: var(--m-block) 0;
  }
  .wiki-list-heading {
    font-size: var(--m-h2);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .wiki-list-intro {
    font-size: var(--m-p);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .wiki-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--m-tight);
  }
  .wiki-block {
    padding: var(--m-block);
  }
  .wiki-block-label {
    font-size: var(--m-p);
    line-height: var(--m-line);
  }
  .wiki-why,
  .wiki-faq {
    padding: var(--m-block) 0;
  }
  .wiki-section-title {
    font-size: var(--m-h2);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .wiki-why-lead {
    font-size: var(--m-p);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .wiki-why-list li {
    font-size: var(--m-p);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .wiki-faq-item {
    padding: var(--m-gap) 0;
  }
  .wiki-faq-q {
    font-size: var(--m-h3);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .wiki-faq-a {
    font-size: var(--m-p);
    line-height: var(--m-line);
  }
}

.wiki-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1.5rem 1rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(74, 85, 104, 0.08);
  box-shadow: 0 4px 16px rgba(74, 85, 104, 0.06);
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.2s, border-color 0.2s, transform 0.2s;
}
.wiki-block:hover {
  box-shadow: 0 8px 24px rgba(74, 85, 104, 0.1);
  border-color: rgba(139, 189, 155, 0.25);
  transform: translateY(-2px);
}

.wiki-block-icon {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary-dark);
}
.wiki-block-icon svg {
  width: 100%;
  height: 100%;
}

.wiki-block-label {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--color-text);
  text-align: center;
}
.wiki-block:hover .wiki-block-label {
  color: var(--color-primary-dark);
}

.wiki-why {
  padding: 3rem 0;
  background: linear-gradient(180deg, #fffdf7 0%, #ffffff 100%);
  border-top: 1px solid rgba(74, 85, 104, 0.08);
}

.wiki-section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 1rem;
}

.wiki-why-lead {
  font-size: 0.95rem;
  color: var(--color-text-soft);
  margin: 0 0 1.25rem;
  line-height: 1.6;
}

.wiki-why-list {
  margin: 0;
  padding-left: 1.25rem;
  list-style: disc;
}

.wiki-why-list li {
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
  color: var(--color-text-soft);
  line-height: 1.6;
}

.wiki-why-list a {
  color: var(--color-primary-dark);
  text-decoration: none;
}
.wiki-why-list a:hover {
  text-decoration: underline;
}

.wiki-faq {
  padding: 3rem 0 4rem;
  background: linear-gradient(180deg, #f8fbfa 0%, #fff9f6 100%);
  border-top: 1px solid rgba(74, 85, 104, 0.08);
}

.wiki-faq-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.wiki-faq-item {
  border-bottom: 1px solid rgba(74, 85, 104, 0.1);
  padding: 1.1rem 0;
}

.wiki-faq-item:last-child {
  border-bottom: none;
}

.wiki-faq-q {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 0.4rem;
  line-height: 1.35;
}

.wiki-faq-a {
  font-size: 0.95rem;
  color: var(--color-text-soft);
  line-height: 1.6;
  margin: 0;
}
.wiki-faq-a a {
  color: var(--color-primary-dark);
  text-decoration: none;
}
.wiki-faq-a a:hover {
  text-decoration: underline;
}
</style>
