<template>
  <div class="map-page">
    <PageHero
      :eyebrow="t('MapPage.hero.eyebrow')"
      :title="t('MapPage.hero.title')"
      :description="t('MapPage.hero.description')"
      :breadcrumbs="[{ label: t('common.breadcrumbHome'), to: '/' }, { label: t('MapPage.breadcrumbs.map') }]"
    />

    <div class="container">
      <section class="map-embed">
        <iframe
          src="https://heartopiamap.com/"
          :title="t('MapPage.hero.title')"
          class="map-iframe"
          loading="lazy"
        />
      </section>

      <section class="map-features">
        <h2 class="map-section-title">{{ t('MapPage.features.heading') }}</h2>
        <ul class="map-feature-grid">
          <li class="map-feature-item">
            <h3>{{ t('MapPage.features.feat1Title') }}</h3>
            <p>{{ t('MapPage.features.feat1Desc') }}</p>
          </li>
          <li class="map-feature-item">
            <h3>{{ t('MapPage.features.feat2Title') }}</h3>
            <p>{{ t('MapPage.features.feat2Desc') }}</p>
          </li>
          <li class="map-feature-item">
            <h3>{{ t('MapPage.features.feat3Title') }}</h3>
            <p>{{ t('MapPage.features.feat3Desc') }}</p>
          </li>
          <li class="map-feature-item">
            <h3>{{ t('MapPage.features.feat4Title') }}</h3>
            <p>{{ t('MapPage.features.feat4Desc') }}</p>
          </li>
        </ul>
      </section>

      <section class="map-categories">
        <h2 class="map-section-title">{{ t('MapPage.categories.heading') }}</h2>
        <ul class="map-cat-grid">
          <li class="map-cat-item"><span class="map-cat-name">{{ t('MapPage.categories.npcs') }}</span><span class="map-cat-count">20</span><span class="map-cat-desc">{{ t('MapPage.categories.npcsDesc') }}</span></li>
          <li class="map-cat-item"><span class="map-cat-name">{{ t('MapPage.categories.animals') }}</span><span class="map-cat-count">8</span><span class="map-cat-desc">{{ t('MapPage.categories.animalsDesc') }}</span></li>
          <li class="map-cat-item"><span class="map-cat-name">{{ t('MapPage.categories.busStops') }}</span><span class="map-cat-count">8</span><span class="map-cat-desc">{{ t('MapPage.categories.busStopsDesc') }}</span></li>
          <li class="map-cat-item"><span class="map-cat-name">{{ t('MapPage.categories.shops') }}</span><span class="map-cat-count">4</span><span class="map-cat-desc">{{ t('MapPage.categories.shopsDesc') }}</span></li>
          <li class="map-cat-item"><span class="map-cat-name">{{ t('MapPage.categories.locations') }}</span><span class="map-cat-count">34</span><span class="map-cat-desc">{{ t('MapPage.categories.locationsDesc') }}</span></li>
          <li class="map-cat-item"><span class="map-cat-name">{{ t('MapPage.categories.resources') }}</span><span class="map-cat-count">11</span><span class="map-cat-desc">{{ t('MapPage.categories.resourcesDesc') }}</span></li>
          <li class="map-cat-item"><span class="map-cat-name">{{ t('MapPage.categories.fish') }}</span><span class="map-cat-count">83</span><span class="map-cat-desc">{{ t('MapPage.categories.fishDesc') }}</span></li>
          <li class="map-cat-item"><span class="map-cat-name">{{ t('MapPage.categories.insects') }}</span><span class="map-cat-count">62</span><span class="map-cat-desc">{{ t('MapPage.categories.insectsDesc') }}</span></li>
          <li class="map-cat-item"><span class="map-cat-name">{{ t('MapPage.categories.birds') }}</span><span class="map-cat-count">81</span><span class="map-cat-desc">{{ t('MapPage.categories.birdsDesc') }}</span></li>
        </ul>
      </section>

      <section class="map-how">
        <h2 class="map-section-title">{{ t('MapPage.how.heading') }}</h2>
        <ul class="map-how-list">
          <li>{{ t('MapPage.how.step1') }}</li>
          <li>{{ t('MapPage.how.step2') }}</li>
          <li>{{ t('MapPage.how.step3') }}</li>
          <li>{{ t('MapPage.how.step4') }}</li>
          <li>{{ t('MapPage.how.step5') }}</li>
          <li>{{ t('MapPage.how.step6') }}</li>
        </ul>
        <p class="map-tip">{{ t('MapPage.how.tip') }}</p>
      </section>

      <section class="map-about">
        <h2 class="map-section-title">{{ t('MapPage.about.heading') }}</h2>
        <p>{{ t('MapPage.about.p1Part1') }}<a href="/">{{ t('MapPage.about.homePage') }}</a>{{ t('MapPage.about.p1Part2') }}</p>
        <p>{{ t('MapPage.about.p2Part1') }}<a href="/characters">{{ t('MapPage.about.characters') }}</a>{{ t('MapPage.about.p2Part2') }}<a href="/wiki">{{ t('MapPage.about.wiki') }}</a>{{ t('MapPage.about.p2Part3') }}</p>
        <p>{{ t('MapPage.about.p3') }}</p>
      </section>

      <section class="map-faq">
        <div class="map-faq-content">
          <h2 class="map-faq__title">{{ t('MapPage.faq.heading') }}</h2>
          <div class="map-faq-list">
            <div class="map-faq-item">
              <h3 class="map-faq-q">{{ t('MapPage.faq.q1') }}</h3>
              <p class="map-faq-a">{{ t('MapPage.faq.a1Part1') }}<a href="/">{{ t('MapPage.about.homePage') }}</a>{{ t('MapPage.faq.a1Part2') }}<a href="/wiki">{{ t('MapPage.about.wiki') }}</a>{{ t('MapPage.faq.a1Part3') }}</p>
            </div>
            <div class="map-faq-item">
              <h3 class="map-faq-q">{{ t('MapPage.faq.q2') }}</h3>
              <p class="map-faq-a">{{ t('MapPage.faq.a2') }}</p>
            </div>
            <div class="map-faq-item">
              <h3 class="map-faq-q">{{ t('MapPage.faq.q3') }}</h3>
              <p class="map-faq-a">{{ t('MapPage.faq.a3') }}</p>
            </div>
            <div class="map-faq-item">
              <h3 class="map-faq-q">{{ t('MapPage.faq.q4') }}</h3>
              <p class="map-faq-a">{{ t('MapPage.faq.a4Part1') }}<a href="/wiki/fish">{{ t('HomePage.map.descFish') }}</a>{{ t('MapPage.faq.a4Part2') }}<a href="/wiki/insects">{{ t('HomePage.map.descBugs') }}</a>{{ t('MapPage.faq.a4Part3') }}<a href="/wiki/birds">{{ t('HomePage.map.descBirds') }}</a>{{ t('MapPage.faq.a4Part4') }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import PageHero from '@/components/PageHero.vue'

const { t } = useI18n()
</script>

<style scoped>
.map-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #f0f8fc 0%, #fff9f6 100%);
  padding-bottom: 4rem;
}

.map-embed {
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 16px;
  overflow: hidden;
  background: #e8f0f4;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
}
.map-iframe {
  display: block;
  width: 100%;
  min-height: 70vh;
  height: 640px;
  border: none;
}

.map-section-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 1rem;
}

.map-features {
  margin-bottom: 2rem;
}
.map-feature-grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
.map-feature-item {
  padding: 1rem 1.2rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(74, 85, 104, 0.08);
}
.map-feature-item h3 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.35rem;
  color: var(--color-text);
}
.map-feature-item p {
  font-size: 0.88rem;
  color: var(--color-text-soft);
  margin: 0;
  line-height: 1.45;
}

.map-categories {
  margin-bottom: 2rem;
}
.map-cat-grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 0.75rem;
}
.map-cat-item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem 0.6rem;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(74, 85, 104, 0.06);
  font-size: 0.9rem;
}
.map-cat-name {
  font-weight: 600;
  color: var(--color-text);
}
.map-cat-count {
  padding: 0.15rem 0.5rem;
  border-radius: 6px;
  background: rgba(139, 189, 155, 0.2);
  color: var(--color-primary-dark);
  font-size: 0.8rem;
  font-weight: 600;
}
.map-cat-desc {
  width: 100%;
  font-size: 0.82rem;
  color: var(--color-text-muted);
  line-height: 1.4;
}

.map-how {
  margin-bottom: 2rem;
}
.map-how-list {
  margin: 0 0 1rem;
  padding-left: 1.35rem;
  color: var(--color-text-soft);
  line-height: 1.65;
}
.map-how-list li {
  margin-bottom: 0.4rem;
}
.map-tip {
  margin: 0;
  padding: 0.6rem 0.9rem;
  background: rgba(74, 85, 104, 0.06);
  border-radius: 10px;
  font-size: 0.9rem;
  color: var(--color-text-soft);
  line-height: 1.5;
}

.map-about {
  padding-top: 1rem;
  border-top: 1px solid rgba(74, 85, 104, 0.1);
}
.map-about p {
  margin: 0 0 0.75rem;
  font-size: 0.95rem;
  color: var(--color-text-soft);
  line-height: 1.6;
}
.map-about a {
  color: var(--color-primary-dark);
  text-decoration: none;
}
.map-about a:hover {
  text-decoration: underline;
}
.map-about-note {
  font-size: 0.85rem !important;
  color: var(--color-text-muted) !important;
}
.map-about-note a {
  color: var(--color-primary-dark);
}
.map-about-note a:hover {
  text-decoration: underline;
}

.map-faq {
  padding: 4rem 0 5rem;
  margin-top: 2rem;
  background: linear-gradient(180deg, #fffdf5 0%, #ffffff 100%);
  border-top: 1px solid rgba(74, 85, 104, 0.08);
}

.map-faq-content {
  max-width: 720px;
}

.map-faq__title {
  margin: 0 0 1.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
}

.map-faq-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.map-faq-item {
  border-bottom: 1px solid rgba(74, 85, 104, 0.1);
  padding: 1.1rem 0;
}

.map-faq-item:last-child {
  border-bottom: none;
}

.map-faq-q {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 0.4rem;
  line-height: 1.35;
}

.map-faq-a {
  font-size: 0.95rem;
  color: var(--color-text-soft);
  line-height: 1.6;
  margin: 0;
}

.map-faq-a a {
  color: var(--color-primary-dark);
  text-decoration: none;
}

.map-faq-a a:hover {
  text-decoration: underline;
}

/* ---------- 响应式：1024 iPad / 768 移动端 ---------- */
@media (max-width: 1024px) {
  .map-embed {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .map-features,
  .map-categories,
  .map-how {
    margin-bottom: 1.5rem;
  }
  .map-feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .map-cat-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .map-faq {
    padding: 3rem 0 4rem;
    margin-top: 1.5rem;
  }
}

@media (max-width: 768px) {
  .map-page {
    --m-h2: 1.3rem;
    --m-h3: 1.1rem;
    --m-p: 0.8rem;
    --m-line: 1.2;
    --m-gap: 0.7rem;
    --m-block: 1rem;
    --m-tight: 0.75rem;
    padding-bottom: var(--m-block);
  }
  .map-embed {
    margin-top: var(--m-block);
    margin-bottom: var(--m-block);
  }
  .map-iframe {
    min-height: 50vh;
    height: 360px;
  }
  .map-section-title,
  .map-faq__title {
    font-size: var(--m-h2);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .map-features,
  .map-categories,
  .map-how {
    margin-bottom: var(--m-block);
  }
  .map-feature-grid {
    grid-template-columns: 1fr;
    gap: var(--m-tight);
  }
  .map-feature-item {
    padding: var(--m-block);
  }
  .map-feature-item h3 {
    font-size: var(--m-h3);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .map-feature-item p {
    font-size: var(--m-p);
    line-height: var(--m-line);
  }
  .map-cat-grid {
    grid-template-columns: 1fr;
    gap: var(--m-tight);
  }
  .map-cat-item {
    padding: var(--m-gap) var(--m-block);
    font-size: var(--m-p);
    line-height: var(--m-line);
  }
  .map-cat-desc {
    font-size: var(--m-p);
    line-height: var(--m-line);
  }
  .map-how-list {
    margin-bottom: var(--m-gap);
    font-size: var(--m-p);
    line-height: var(--m-line);
  }
  .map-tip {
    font-size: var(--m-p);
    line-height: var(--m-line);
    padding: var(--m-gap);
  }
  .map-about {
    padding-top: var(--m-block);
  }
  .map-about p {
    font-size: var(--m-p);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .map-faq {
    padding: var(--m-block) 0;
    margin-top: var(--m-block);
  }
  .map-faq__title {
    margin-bottom: var(--m-gap);
  }
  .map-faq-item {
    padding: var(--m-gap) 0;
  }
  .map-faq-q {
    font-size: var(--m-h3);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .map-faq-a {
    font-size: var(--m-p);
    line-height: var(--m-line);
  }
}
</style>
