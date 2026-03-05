<template>
  <div class="events-list-page">
    <PageHero
      :eyebrow="t('EventsPage.hero.eyebrow')"
      :title="t('EventsPage.hero.title')"
      :description="t('EventsPage.hero.description')"
      :breadcrumbs="[{ label: t('common.breadcrumbHome'), to: '/' }, { label: t('EventsPage.breadcrumbs.events') }]"
    />

    <section class="events-list-main">
      <div class="container">
        <ul class="events-list">
          <li v-for="e in events" :key="e.slug" :class="{ 'is-expired': e.status === 'expired' }">
            <a :href="getLocalizedPath(e.to)" class="events-list-item">
              <span class="events-list-title">{{ e.title }}</span>
              <span class="events-list-right">
                <span class="events-list-status" :class="'events-list-status--' + e.status">
                  {{ t('EventsPage.status.' + e.status) }}
                </span>
                <span class="events-list-meta">{{ e.duration }} · {{ e.location }}</span>
              </span>
            </a>
          </li>
        </ul>

        <div class="events-list-footer">
          <div class="events-list-about">
            <h2 class="events-list-footer-title">{{ t('EventsPage.about.heading') }}</h2>
            <p>{{ t('EventsPage.about.p1') }}</p>
            <p>{{ t('EventsPage.about.p2Part1') }}<a :href="getLocalizedPath('/')">{{ t('EventsPage.homePage') }}</a>{{ t('EventsPage.about.p2Part2') }}</p>
          </div>
          <div class="events-list-what">
            <h2 class="events-list-footer-title">{{ t('EventsPage.what.heading') }}</h2>
            <ul class="events-list-bullets">
              <li>{{ t('EventsPage.what.bullet1') }}</li>
              <li>{{ t('EventsPage.what.bullet2') }}</li>
              <li>{{ t('EventsPage.what.bullet3') }}</li>
              <li>{{ t('EventsPage.what.bullet4') }}</li>
              <li>{{ t('EventsPage.what.bullet5') }}</li>
            </ul>
          </div>
          <p class="events-list-note">
            {{ t('EventsPage.notePart1') }}<a :href="getLocalizedPath('/guide')">{{ t('EventsPage.guides') }}</a>{{ t('EventsPage.notePart2') }}<a :href="getLocalizedPath('/wiki')">{{ t('EventsPage.wiki') }}</a>{{ t('EventsPage.notePart3') }}
          </p>
        </div>

        <section class="events-extra">
          <h2 class="events-list-footer-title">{{ t('EventsPage.extra.heading') }}</h2>
          <p>
            {{ t('EventsPage.extra.pPart1') }}<a :href="getLocalizedPath('/codes')">{{ t('EventsPage.giftCodes') }}</a>{{ t('EventsPage.extra.pPart2') }}<a :href="getLocalizedPath('/characters')">{{ t('EventsPage.characters') }}</a>{{ t('EventsPage.extra.pPart3') }}<a :href="getLocalizedPath('/')">{{ t('EventsPage.homePage') }}</a>{{ t('EventsPage.extra.pPart4') }}
          </p>
        </section>
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

const events = [
  {
    slug: 'mlp',
    to: '/events/mlp',
    badge: 'Collaboration',
    title: 'My Little Pony x Heartopia',
    desc: 'Mane Six gacha, Tree of Harmony, Spike pet costume, and limited rewards.',
    duration: 'Feb 14 – Mar 15, 2026',
    location: 'Cloud Island',
    status: 'ongoing',
  },
  {
    slug: 'winter-frost',
    to: '/events/winter-frost',
    badge: 'Seasonal',
    title: 'Winter Frost Season',
    desc: 'Snow sculpting, Fashionwave Store, and event-exclusive items on Onsen Mountain.',
    duration: 'Jan 31 – Mar 13, 2026',
    location: 'Winter Utopia',
    status: 'ongoing',
  },
]

</script>

<style scoped>
.events-list-page {
  min-height: 100vh;
  padding-bottom: 4rem;
  background: linear-gradient(180deg, #f8fbfa 0%, #fff9f6 100%);
}

.events-list-main {
  padding: 0 0 3rem;
}

.events-list {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid rgba(74, 85, 104, 0.1);
}

.events-list li {
  border-bottom: 1px solid rgba(74, 85, 104, 0.08);
}

.events-list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 0;
  text-decoration: none;
  color: inherit;
  transition: background 0.15s;
}
.events-list-item:hover {
  color: var(--color-primary-dark);
}
.events-list li.is-expired .events-list-item {
  opacity: 0.85;
}

.events-list-title {
  font-weight: 600;
  font-size: 1.05rem;
  color: var(--color-text);
}
.events-list-item:hover .events-list-title {
  color: var(--color-primary-dark);
}
.events-list li.is-expired .events-list-title {
  color: var(--color-text-soft);
}

.events-list-right {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
}

.events-list-status {
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.events-list-status--ongoing {
  background: rgba(139, 189, 155, 0.2);
  color: var(--color-primary-dark);
}
.events-list-status--expired {
  background: rgba(74, 85, 104, 0.12);
  color: var(--color-text-muted);
}
.events-list-status--upcoming {
  background: rgba(139, 177, 232, 0.2);
  color: #5a7fd6;
}

.events-list-meta {
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

.events-list-footer {
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(74, 85, 104, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 2.5rem;
}
@media (max-width: 1024px) {
  .events-list-main {
    padding: 0 0 2rem;
  }
  .events-list-footer {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    gap: 1.5rem;
  }
  .events-extra {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
  }
}

@media (max-width: 768px) {
  .events-list-page {
    --m-h2: 1.3rem; --m-p: 0.8rem; --m-line: 1.2; --m-gap: 0.7rem; --m-block: 1rem;
    padding-bottom: var(--m-block);
  }
  .events-list-main {
    padding: 0 0 var(--m-block);
  }
  .events-list-item {
    padding: var(--m-gap) 0;
    flex-wrap: wrap;
  }
  .events-list-title {
    font-size: var(--m-p);
    line-height: var(--m-line);
  }
  .events-list-meta {
    font-size: var(--m-p);
    line-height: var(--m-line);
  }
  .events-list-footer {
    grid-template-columns: 1fr;
    margin-top: var(--m-block);
    padding-top: var(--m-block);
    gap: var(--m-gap);
  }
  .events-list-footer-title {
    font-size: var(--m-h2);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .events-list-about p,
  .events-list-what,
  .events-list-bullets li {
    font-size: var(--m-p);
    line-height: var(--m-line);
  }
  .events-list-note {
    font-size: var(--m-p);
    padding: var(--m-gap);
    line-height: var(--m-line);
  }
  .events-extra {
    margin-top: var(--m-block);
    padding-top: var(--m-block);
  }
  .events-extra p {
    font-size: var(--m-p);
    line-height: var(--m-line);
  }
}

.events-list-footer-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 0.75rem;
}

.events-list-about p,
.events-list-what {
  margin: 0;
  font-size: 0.9rem;
  color: var(--color-text-soft);
  line-height: 1.6;
}
.events-list-about p + p {
  margin-top: 0.75rem;
}
.events-list-about a,
.events-list-note a {
  color: var(--color-primary-dark);
  text-decoration: none;
}
.events-list-about a:hover,
.events-list-note a:hover {
  text-decoration: underline;
}

.events-list-bullets {
  list-style: none;
  margin: 0;
  padding: 0;
}
.events-list-bullets li {
  position: relative;
  padding-left: 1.25rem;
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
  color: var(--color-text-soft);
  line-height: 1.5;
}
.events-list-bullets li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--color-primary);
}

.events-list-note {
  grid-column: 1 / -1;
  margin: 0;
  padding: 1rem 1.2rem;
  border-radius: 12px;
  background: rgba(139, 189, 155, 0.08);
  font-size: 0.85rem;
  color: var(--color-text-muted);
  line-height: 1.5;
}

.events-extra {
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(74, 85, 104, 0.1);
}

.events-extra p {
  margin: 0;
  font-size: 0.95rem;
  color: var(--color-text-soft);
  line-height: 1.65;
}

.events-extra a {
  color: var(--color-primary-dark);
  text-decoration: none;
}

.events-extra a:hover {
  text-decoration: underline;
}
</style>
