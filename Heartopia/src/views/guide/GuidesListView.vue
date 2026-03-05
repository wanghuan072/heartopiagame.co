<template>
  <div class="guide-list-page">
    <PageHero
      :eyebrow="t('GuideListPage.hero.eyebrow')"
      :title="t('GuideListPage.hero.title')"
      :description="t('GuideListPage.hero.description')"
      :breadcrumbs="[{ label: t('common.breadcrumbHome'), to: '/' }, { label: t('GuideListPage.breadcrumbs.guides') }]"
    />

    <section class="guide-list-main">
      <div class="container">
        <ul class="guide-list">
          <li v-for="g in guides" :key="g.id">
            <a :href="getLocalizedPath('/guide/' + g.addressBar)" class="guide-list-card">
              <div class="guide-list-img-wrap">
                <img :src="g.imageSrc" :alt="g.imageAlt" class="guide-list-img" loading="lazy" />
              </div>
              <div class="guide-list-body">
                <time class="guide-list-date" :datetime="g.publishDate">{{ formatDate(g.publishDate) }}</time>
                <h2 class="guide-list-title">{{ g.title }}</h2>
                <p class="guide-list-desc-card">{{ g.description }}</p>
              </div>
            </a>
          </li>
        </ul>

        <section class="guides-intro">
          <h2 class="guides-intro__title">{{ t('GuideListPage.intro.title') }}</h2>
          <p class="guides-intro__lead">{{ t('GuideListPage.intro.lead') }}</p>
          <p class="guides-intro__text">{{ t('GuideListPage.intro.textPart1') }}<a :href="getLocalizedPath('/wiki')">{{ t('GuideListPage.intro.wiki') }}</a>{{ t('GuideListPage.intro.textPart2') }}<a :href="getLocalizedPath('/')">{{ t('GuideListPage.intro.homePage') }}</a>{{ t('GuideListPage.intro.textPart3') }}<a :href="getLocalizedPath('/map')">{{ t('GuideListPage.intro.map') }}</a>{{ t('GuideListPage.intro.textPart4') }}<a :href="getLocalizedPath('/codes')">{{ t('GuideListPage.intro.giftCodes') }}</a>{{ t('GuideListPage.intro.textPart5') }}<a :href="getLocalizedPath('/characters')">{{ t('GuideListPage.intro.characters') }}</a>{{ t('GuideListPage.intro.textPart6') }}<a :href="getLocalizedPath('/events')">{{ t('GuideListPage.intro.events') }}</a>{{ t('GuideListPage.intro.textPart7') }}</p>
        </section>

        <section class="guides-faq">
          <h2 class="guides-faq__title">{{ t('GuideListPage.faq.title') }}</h2>
          <div class="guides-faq-list">
            <div class="guides-faq-item">
              <h3 class="guides-faq-q">{{ t('GuideListPage.faq.q1') }}</h3>
              <p class="guides-faq-a">{{ t('GuideListPage.faq.a1') }}</p>
            </div>
            <div class="guides-faq-item">
              <h3 class="guides-faq-q">{{ t('GuideListPage.faq.q2') }}</h3>
              <p class="guides-faq-a">{{ t('GuideListPage.faq.a2Part1') }}<a :href="getLocalizedPath('/')">{{ t('GuideListPage.intro.homePage') }}</a>{{ t('GuideListPage.faq.a2Part2') }}<a :href="getLocalizedPath('/wiki')">{{ t('GuideListPage.intro.wiki') }}</a>{{ t('GuideListPage.faq.a2Part3') }}<a :href="getLocalizedPath('/events')">{{ t('GuideListPage.intro.events') }}</a>{{ t('GuideListPage.faq.a2Part4') }}</p>
            </div>
            <div class="guides-faq-item">
              <h3 class="guides-faq-q">{{ t('GuideListPage.faq.q3') }}</h3>
              <p class="guides-faq-a">{{ t('GuideListPage.faq.a3Part1') }}<a href="/codes">{{ t('GuideListPage.intro.giftCodes') }}</a>{{ t('GuideListPage.faq.a3Part2') }}<a href="/">{{ t('GuideListPage.intro.homePage') }}</a>{{ t('GuideListPage.faq.a3Part3') }}</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useGuideData } from '@/composables/useGuideData'
import { useLocalizedPath } from '@/composables/useLocalizedPath'
import PageHero from '@/components/PageHero.vue'

const { t, locale } = useI18n()
const { guides, loadData } = useGuideData()
const { getLocalizedPath } = useLocalizedPath()

onMounted(() => loadData())
watch(() => locale.value, () => loadData())

function formatDate(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}
</script>

<style scoped>
.guide-list-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #f8fbfa 0%, #fff9f6 100%);
}

.guide-list-main {
  padding: 3rem 0;
}

.guide-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.guide-list-card {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 1.5rem;
  padding: 0;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(74, 85, 104, 0.08);
  box-shadow: 0 4px 20px rgba(74, 85, 104, 0.06);
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.25s ease, border-color 0.25s ease;
  overflow: hidden;
}
.guide-list-card:hover {
  box-shadow: 0 8px 28px rgba(74, 85, 104, 0.1);
  border-color: rgba(139, 189, 155, 0.25);
  color: inherit;
  text-decoration: none;
}

.guide-list-img-wrap {
  aspect-ratio: 16 / 9;
  background: rgba(74, 85, 104, 0.06);
  overflow: hidden;
}
.guide-list-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.guide-list-body {
  padding: 1.25rem 1.5rem 1.25rem 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.guide-list-date {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  margin-bottom: 0.35rem;
}
.guide-list-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 0.5rem;
  line-height: 1.3;
}
.guide-list-card:hover .guide-list-title {
  color: var(--color-primary-dark);
}
.guide-list-desc-card {
  font-size: 0.9rem;
  color: var(--color-text-soft);
  margin: 0;
  line-height: 1.55;
}

@media (max-width: 1024px) {
  .guide-list-main {
    padding: 1.5rem 0;
  }
  .guide-list {
    gap: 1rem;
  }
  .guides-intro {
    margin-top: 1.5rem;
    padding: 1.25rem;
  }
  .guides-faq {
    margin-top: 1.5rem;
    padding-top: 1.25rem;
  }
}

@media (max-width: 768px) {
  .guide-list-page {
    --m-h2: 1.3rem; --m-h3: 1.1rem; --m-p: 0.8rem; --m-line: 1.2; --m-gap: 0.7rem; --m-block: 1rem; --m-tight: 0.75rem;
  }
  .guide-list-main {
    padding: var(--m-block) 0;
  }
  .guide-list-card {
    grid-template-columns: 1fr;
  }
  .guide-list-img-wrap {
    aspect-ratio: 2 / 1;
  }
  .guide-list-body {
    padding: var(--m-block);
  }
  .guide-list-title {
    font-size: var(--m-h3);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .guide-list-desc-card {
    font-size: var(--m-p);
    line-height: var(--m-line);
  }
  .guides-intro {
    margin-top: var(--m-block);
    padding: var(--m-block);
  }
  .guides-intro__title {
    font-size: var(--m-h2);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .guides-intro__lead,
  .guides-intro__text {
    font-size: var(--m-p);
    line-height: var(--m-line);
  }
  .guides-faq {
    margin-top: var(--m-block);
    padding-top: var(--m-block);
  }
  .guides-faq__title {
    font-size: var(--m-h2);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .guides-faq-item {
    padding-bottom: var(--m-gap);
  }
  .guides-faq-q {
    font-size: var(--m-h3);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .guides-faq-a {
    font-size: var(--m-p);
    line-height: var(--m-line);
  }
}

.guides-intro {
  margin-top: 2.5rem;
  padding: 1.5rem;
  border-radius: 12px;
  background: var(--color-surface);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}
.guides-intro__title {
  margin: 0 0 0.75rem;
  font-size: 1.25rem;
  font-weight: 600;
}
.guides-intro__lead {
  margin: 0 0 0.75rem;
  line-height: 1.6;
  color: var(--color-text);
}
.guides-intro__text {
  margin: 0;
  font-size: 0.95rem;
  color: var(--color-text-muted);
}
.guides-intro a {
  color: var(--color-primary);
  text-decoration: none;
}
.guides-intro a:hover {
  text-decoration: underline;
}

.guides-faq {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}
.guides-faq__title {
  margin: 0 0 1rem;
  font-size: 1.25rem;
  font-weight: 600;
}
.guides-faq-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.guides-faq-item {
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-border);
}
.guides-faq-item:last-child {
  border-bottom: none;
}
.guides-faq-q {
  margin: 0 0 0.35rem;
  font-size: 1rem;
  font-weight: 600;
}
.guides-faq-a {
  margin: 0;
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.55;
}
.guides-faq-a a {
  color: var(--color-primary-dark);
  text-decoration: none;
}
.guides-faq-a a:hover {
  text-decoration: underline;
}
</style>
