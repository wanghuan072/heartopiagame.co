<template>
  <div class="characters-page">
    <PageHero
      :eyebrow="t('CharactersPage.hero.eyebrow')"
      :title="t('CharactersPage.hero.title')"
      :description="t('CharactersPage.hero.description')"
      :breadcrumbs="[{ label: t('common.breadcrumbHome'), to: '/' }, { label: t('CharactersPage.breadcrumbs.characters') }]"
    >
      <template #meta>
        <span>{{ t('CharactersPage.meta.mentors', { n: mentorCharacters.length }) }}</span>
        <span>{{ t('CharactersPage.meta.shops', { n: shopCharacters.length }) }}</span>
        <span>{{ t('CharactersPage.meta.special', { n: storyCharacters.length }) }}</span>
        <span>{{ t('CharactersPage.meta.event', { n: eventCharacters.length }) }}</span>
      </template>
    </PageHero>

    <section class="chars-section mentors">
      <div class="container">
        <h2 class="section-heading">{{ t('CharactersPage.sections.mentors') }}</h2>
        <div class="chars-grid">
          <div v-for="c in mentorCharacters" :key="c.id" class="char-card char-card-mentor">
            <div class="char-main">
              <div class="char-avatar">
                <img :src="getAvatarUrl(c)" :alt="c.imageAlt" class="char-avatar-img" loading="lazy" />
              </div>
              <div class="char-text">
                <h3>{{ c.name }}</h3>
                <p class="char-role">{{ c.role }}</p>
                <p class="char-desc">{{ c.desc }}</p>
              </div>
            </div>
            <div class="char-meta">
              <div class="char-meta-item"><span class="char-meta-label">{{ t('CharactersPage.card.location') }}</span> {{ c.location }}</div>
              <div class="char-meta-item"><span class="char-meta-label">{{ t('CharactersPage.card.unlock') }}</span> {{ c.unlock }}</div>
              <div v-if="c.hobby" class="char-meta-item"><span class="char-meta-label">{{ t('CharactersPage.card.teaches') }}</span> {{ c.hobby }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="chars-section shops">
      <div class="container">
        <h2 class="section-heading">{{ t('CharactersPage.sections.shops') }}</h2>
        <div class="chars-grid">
          <div v-for="c in shopCharacters" :key="c.id" class="char-card char-card-shop">
            <div class="char-main">
              <div class="char-avatar">
                <img :src="getAvatarUrl(c)" :alt="c.imageAlt" class="char-avatar-img" loading="lazy" />
              </div>
              <div class="char-text">
                <h3>{{ c.name }}</h3>
                <p class="char-role">{{ c.role }}</p>
                <p class="char-desc">{{ c.desc }}</p>
              </div>
            </div>
            <div class="char-meta">
              <div class="char-meta-item"><span class="char-meta-label">{{ t('CharactersPage.card.location') }}</span> {{ c.location }}</div>
              <div class="char-meta-item"><span class="char-meta-label">{{ t('CharactersPage.card.unlock') }}</span> {{ c.unlock }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="chars-section story">
      <div class="container">
        <h2 class="section-heading">{{ t('CharactersPage.sections.special') }}</h2>
        <div class="chars-grid">
          <div v-for="c in storyCharacters" :key="c.id" class="char-card char-card-story">
            <div class="char-main">
              <div class="char-avatar">
                <img :src="getAvatarUrl(c)" :alt="c.imageAlt" class="char-avatar-img" loading="lazy" />
              </div>
              <div class="char-text">
                <h3>{{ c.name }}</h3>
                <p class="char-role">{{ c.role }}</p>
                <p class="char-desc">{{ c.desc }}</p>
              </div>
            </div>
            <div class="char-meta">
              <div class="char-meta-item"><span class="char-meta-label">{{ t('CharactersPage.card.location') }}</span> {{ c.location }}</div>
              <div class="char-meta-item"><span class="char-meta-label">{{ t('CharactersPage.card.unlock') }}</span> {{ c.unlock }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="chars-section events">
      <div class="container">
        <h2 class="section-heading">{{ t('CharactersPage.sections.event') }}</h2>
        <div class="chars-grid">
          <div v-for="c in eventCharacters" :key="c.id" class="char-card char-card-event">
            <div class="char-main">
              <div class="char-avatar">
                <img :src="getAvatarUrl(c)" :alt="c.imageAlt" class="char-avatar-img" loading="lazy" />
              </div>
              <div class="char-text">
                <h3>{{ c.name }}</h3>
                <p class="char-role">{{ c.role }}</p>
                <p class="char-desc">{{ c.desc }}</p>
              </div>
            </div>
            <div class="char-meta">
              <div class="char-meta-item"><span class="char-meta-label">{{ t('CharactersPage.card.location') }}</span> {{ c.location }}</div>
              <div class="char-meta-item"><span class="char-meta-label">{{ t('CharactersPage.card.unlock') }}</span> {{ c.unlock }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="chars-about">
      <div class="container">
        <div class="chars-about-inner">
          <h2 class="section-heading">{{ t('CharactersPage.about.heading') }}</h2>
          <p>{{ t('CharactersPage.about.p1Part1') }}<a href="/">{{ t('CharactersPage.about.homePage') }}</a>{{ t('CharactersPage.about.p1Part2') }}</p>
          <p>{{ t('CharactersPage.about.p2Part1') }}<a href="/wiki/fish">{{ t('CharactersPage.about.linkFishing') }}</a>{{ t('CharactersPage.about.p2Part2') }}<a href="/wiki/crops">{{ t('CharactersPage.about.linkGardening') }}</a>{{ t('CharactersPage.about.p2Part3') }}<a href="/wiki/recipes">{{ t('CharactersPage.about.linkCooking') }}</a>{{ t('CharactersPage.about.p2Part4') }}<a href="/wiki/birds">{{ t('CharactersPage.about.linkBirdwatching') }}</a>{{ t('CharactersPage.about.p2Part5') }}<a href="/wiki/insects">{{ t('CharactersPage.about.linkInsect') }}</a>{{ t('CharactersPage.about.p2Part6') }}<a href="/wiki/pets">{{ t('CharactersPage.about.linkPetCare') }}</a>{{ t('CharactersPage.about.p2Part7') }}</p>
          <p>{{ t('CharactersPage.about.p3Part1') }}<a href="/map">{{ t('CharactersPage.about.interactiveMap') }}</a>{{ t('CharactersPage.about.p3Part2') }}<a href="/wiki/recipes">{{ t('CharactersPage.about.recipes') }}</a>{{ t('CharactersPage.about.p3Part3') }}<a href="/codes">{{ t('CharactersPage.about.giftCodes') }}</a>{{ t('CharactersPage.about.p3Part4') }}<a href="/">{{ t('CharactersPage.about.homePage') }}</a>{{ t('CharactersPage.about.p3Part5') }}<a href="/wiki">{{ t('CharactersPage.about.wiki') }}</a>{{ t('CharactersPage.about.p3Part6') }}<a href="/guide">{{ t('CharactersPage.about.beginnerGuide') }}</a>{{ t('CharactersPage.about.p3Part7') }}</p>
        </div>
      </div>
    </section>

    <section class="chars-faq">
      <div class="container">
        <div class="chars-faq-content">
          <h2 class="chars-faq__title">{{ t('CharactersPage.faq.heading') }}</h2>
          <div class="chars-faq-list">
            <div class="chars-faq-item">
              <h3 class="chars-faq-q">{{ t('CharactersPage.faq.q1') }}</h3>
              <p class="chars-faq-a">{{ t('CharactersPage.faq.a1Part1') }}<a href="/map">{{ t('CharactersPage.about.interactiveMap') }}</a>{{ t('CharactersPage.faq.a1Part2') }}</p>
            </div>
            <div class="chars-faq-item">
              <h3 class="chars-faq-q">{{ t('CharactersPage.faq.q2') }}</h3>
              <p class="chars-faq-a">{{ t('CharactersPage.faq.a2Part1') }}<a href="/wiki/fish">{{ t('HomePage.faq.a6Part2') }}</a>{{ t('CharactersPage.faq.a2Part2') }}<a href="/wiki/crops">{{ t('HomePage.faq.a6Part6') }}</a>{{ t('CharactersPage.faq.a2Part3') }}<a href="/wiki/recipes">{{ t('HomePage.faq.a6Part4') }}</a>{{ t('CharactersPage.faq.a2Part4') }}<a href="/wiki/birds">{{ t('HomePage.faq.a6Part8') }}</a>{{ t('CharactersPage.faq.a2Part5') }}<a href="/wiki/insects">{{ t('HomePage.faq.a6Part10') }}</a>{{ t('CharactersPage.faq.a2Part6') }}<a href="/wiki/pets">{{ t('CharactersPage.about.linkPetCare') }}</a>{{ t('CharactersPage.faq.a2Part7') }}</p>
            </div>
            <div class="chars-faq-item">
              <h3 class="chars-faq-q">{{ t('CharactersPage.faq.q3') }}</h3>
              <p class="chars-faq-a">{{ t('CharactersPage.faq.a3Part1') }}<a href="/wiki">{{ t('CharactersPage.about.wiki') }}</a>{{ t('CharactersPage.faq.a3Part2') }}</p>
            </div>
            <div class="chars-faq-item">
              <h3 class="chars-faq-q">{{ t('CharactersPage.faq.q4') }}</h3>
              <p class="chars-faq-a">{{ t('CharactersPage.faq.a4Part1') }}<a href="/map">{{ t('Header.nav.text4') }}</a>{{ t('CharactersPage.faq.a4Part2') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import PageHero from '@/components/PageHero.vue'
import { useCharactersData } from '@/composables/useCharactersData'

const { t, locale } = useI18n()
const { characters, loadData } = useCharactersData()

onMounted(() => loadData())
watch(() => locale.value, () => loadData())

const mentorCharacters = computed(() => (characters.value || []).filter((c) => c.type === 'mentor'))
const shopCharacters = computed(() => (characters.value || []).filter((c) => c.type === 'shop'))
const storyCharacters = computed(() => (characters.value || []).filter((c) => c.type === 'special'))
const eventCharacters = computed(() => (characters.value || []).filter((c) => c.type === 'event'))

function getAvatarUrl(c) {
  return (c.imageUrl && c.imageUrl.trim()) ? c.imageUrl : 'https://picsum.photos/200'
}
</script>

<style scoped>
.characters-page {
  min-height: 100vh;
}

/* Sections */
.chars-section {
  padding: 3.5rem 0;
}

.chars-section.mentors {
  background: linear-gradient(180deg, #f7fbff 0%, #f3fff7 100%);
}

.chars-section.shops {
  background: linear-gradient(180deg, #fff7f3 0%, #fff9ff 100%);
}

.chars-section.story {
  background: linear-gradient(180deg, #f5f0ff 0%, #fff7ff 100%);
}

.chars-section.events {
  background: linear-gradient(180deg, #e9f8ff 0%, #ffffff 100%);
}

.section-heading {
  text-align: center;
  margin-bottom: 1.75rem;
  font-weight: 600;
  color: var(--color-text);
}

/* Grid — 3 columns for all sections */
.chars-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
}

@media (max-width: 1024px) {
  .chars-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
  .chars-section {
    padding: 2rem 0;
  }
  .chars-about,
  .chars-faq {
    padding: 2rem 0 3rem;
  }
}

@media (max-width: 768px) {
  .characters-page {
    --m-h2: 1.3rem;
    --m-h3: 1.1rem;
    --m-p: 0.8rem;
    --m-line: 1.2;
    --m-gap: 0.7rem;
    --m-block: 1rem;
    --m-tight: 0.75rem;
  }
  .chars-section {
    padding: var(--m-block) 0;
  }
  .section-heading {
    font-size: var(--m-h2);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .chars-grid {
    grid-template-columns: 1fr;
    gap: var(--m-tight);
  }
  .char-card {
    padding: var(--m-block);
    gap: var(--m-gap);
  }
  .char-main {
    gap: var(--m-gap);
  }
  .char-avatar {
    width: 56px;
    height: 56px;
  }
  .char-meta {
    margin-left: calc(56px + var(--m-gap));
    font-size: var(--m-p);
    line-height: var(--m-line);
  }
  .char-text h3 {
    font-size: var(--m-h3);
    line-height: var(--m-line);
  }
  .char-role,
  .char-desc {
    font-size: var(--m-p);
    line-height: var(--m-line);
  }
  .chars-about,
  .chars-faq {
    padding: var(--m-block) 0;
  }
  .chars-about-inner .section-heading {
    margin-bottom: var(--m-gap);
  }
  .chars-about-inner p {
    font-size: var(--m-p);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .chars-faq__title {
    font-size: var(--m-h2);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .chars-faq-item {
    padding: var(--m-gap) 0;
  }
  .chars-faq-q {
    font-size: var(--m-h3);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .chars-faq-a {
    font-size: var(--m-p);
    line-height: var(--m-line);
  }
}

/* Card: avatar left + text right, meta below */
.char-card {
  padding: 1.4rem 1.3rem;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.85);
  box-shadow: 0 6px 24px rgba(74, 85, 104, 0.08);
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.char-main {
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
}

.char-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  flex-shrink: 0;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(74, 85, 104, 0.2);
}

.char-card-mentor .char-avatar { background: linear-gradient(135deg, #8bbd9b, #62a38a); }
.char-card-shop .char-avatar { background: linear-gradient(135deg, #f2a6b3, #e26f81); }
.char-card-story .char-avatar { background: linear-gradient(135deg, #8bb1e8, #5a7fd6); }
.char-card-event .char-avatar { background: linear-gradient(135deg, #78c8f0, #5aa8d4); }

.char-avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  object-position: top
}

.char-text h3 {
  margin: 0 0 0.15rem;
  font-size: 0.98rem;
}

.char-role {
  margin: 0 0 0.25rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--color-text-muted);
}

.char-desc {
  margin: 0;
  font-size: 0.85rem;
  color: var(--color-text-soft);
}

.char-meta {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin: 0;
  margin-left: calc(80px + 0.9rem);
  font-size: 0.85rem;
  color: var(--color-text);
}

.char-meta-item {
  min-width: 0;
}

.char-meta-label {
  display: block;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-text-muted);
  margin-bottom: 0.1rem;
}

.chars-about {
  padding: 4rem 0 5rem;
  background: linear-gradient(180deg, #fffdf7 0%, #ffffff 100%);
  border-top: 1px solid rgba(74, 85, 104, 0.08);
}

.chars-about-inner .section-heading {
  margin-bottom: 1rem;
  text-align: left;
}

.chars-about-inner p {
  margin: 0 0 1rem;
  font-size: 0.95rem;
  color: var(--color-text-soft);
  line-height: 1.65;
}

.chars-about-inner p:last-child {
  margin-bottom: 0;
}

.chars-about-inner a {
  color: var(--color-primary-dark);
  text-decoration: none;
}

.chars-about-inner a:hover {
  text-decoration: underline;
}

.chars-faq {
  padding: 4rem 0 5rem;
  background: linear-gradient(180deg, #fffdf5 0%, #ffffff 100%);
  border-top: 1px solid rgba(74, 85, 104, 0.08);
}

.chars-faq-content {
  max-width: 720px;
}

.chars-faq__title {
  margin: 0 0 1.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
}

.chars-faq-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.chars-faq-item {
  border-bottom: 1px solid rgba(74, 85, 104, 0.1);
  padding: 1.1rem 0;
}

.chars-faq-item:last-child {
  border-bottom: none;
}

.chars-faq-q {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 0.4rem;
  line-height: 1.35;
}

.chars-faq-a {
  font-size: 0.95rem;
  color: var(--color-text-soft);
  line-height: 1.6;
  margin: 0;
}
.chars-faq-a a {
  color: var(--color-primary-dark);
  text-decoration: none;
}
.chars-faq-a a:hover {
  text-decoration: underline;
}
</style>

