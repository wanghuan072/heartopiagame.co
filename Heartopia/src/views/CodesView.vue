<template>
  <div class="codes-page">
    <PageHero
      :eyebrow="t('CodesPage.hero.eyebrow')"
      :title="t('CodesPage.hero.title')"
      :description="t('CodesPage.hero.description')"
      :breadcrumbs="[{ label: t('common.breadcrumbHome'), to: '/' }, { label: t('CodesPage.breadcrumbs.codes') }]"
    >
      <template #meta>
        <span>{{ t('CodesPage.meta.activeCount', { n: activeCodes.length }) }}</span>
        <span>{{ t('CodesPage.meta.archivedCount', { n: expiredCodes.length }) }}</span>
        <span>{{ t('CodesPage.meta.lastUpdated') }}</span>
      </template>
    </PageHero>

    <!-- Active codes + redeem guide -->
    <section class="codes-main">
      <div class="container codes-main-layout">
        <div class="codes-main-left">
          <h2 class="section-heading">{{ t('CodesPage.main.activeHeading') }}</h2>
          <p class="codes-note">{{ t('CodesPage.main.note') }}</p>
          <div class="codes-active-list">
            <article v-for="item in activeCodes" :key="item.code" class="codes-card">
              <header class="codes-card-header">
                <code class="code-pill">{{ item.code }}</code>
                <div class="codes-header-right">
                  <button type="button" class="code-copy-btn" @click="copyCode(item.code)">
                    <span v-if="copiedCode === item.code">{{ t('CodesPage.main.copied') }}</span>
                    <span v-else>{{ t('CodesPage.main.copy') }}</span>
                  </button>
                  <span class="code-status">{{ t('CodesPage.main.active') }}</span>
                </div>
              </header>
              <p class="codes-reward">{{ item.rewards }}</p>
              <div class="codes-meta">
                <span>{{ t('CodesPage.main.expires') }}: {{ item.expires }}</span>
                <span>{{ t('CodesPage.main.lastVerified') }}: {{ item.lastVerified }}</span>
              </div>
            </article>
          </div>
        </div>

        <aside class="codes-side">
          <h2 class="section-heading">{{ t('CodesPage.redeem.heading') }}</h2>
          <ol class="redeem-steps">
            <li>{{ t('CodesPage.redeem.step1') }}</li>
            <li>{{ t('CodesPage.redeem.step2') }}</li>
            <li>{{ t('CodesPage.redeem.step3') }}</li>
            <li>{{ t('CodesPage.redeem.step4') }}</li>
            <li>{{ t('CodesPage.redeem.step5') }}</li>
            <li>{{ t('CodesPage.redeem.step6') }}</li>
          </ol>
          <p class="redeem-tip">{{ t('CodesPage.redeem.tip1') }}</p>
          <p class="redeem-tip">{{ t('CodesPage.redeem.tip2Part1') }}<a href="/guide">{{ t('HomePage.faq.a6Part12') }}</a>{{ t('CodesPage.redeem.tip2Part2') }}</p>
        </aside>
      </div>
    </section>

    <!-- Expired -->
    <section class="codes-expired">
      <div class="container">
        <h2 class="section-heading">{{ t('CodesPage.expired.heading') }}</h2>
        <p class="codes-note">{{ t('CodesPage.expired.notePart1') }}<a href="/wiki">{{ t('HomePage.db.wikiLink') }}</a>{{ t('CodesPage.expired.notePart2') }}</p>
        <div class="codes-expired-grid">
          <article v-for="item in expiredCodes" :key="item.code" class="codes-expired-card">
            <code class="code-tag">{{ item.code }}</code>
            <p class="codes-reward">{{ item.rewards }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="codes-faq">
      <div class="container">
        <div class="codes-faq-content">
          <h2 class="section-heading">{{ t('CodesPage.faq.heading') }}</h2>
          <div class="codes-faq-list">
            <div class="codes-faq-item">
              <h3 class="codes-faq-q">{{ t('CodesPage.faq.q1') }}</h3>
              <p class="codes-faq-a">{{ t('CodesPage.faq.a1Part1') }}<a href="/wiki">{{ t('HomePage.db.wikiLink') }}</a>{{ t('CodesPage.faq.a1Part2') }}</p>
            </div>
            <div class="codes-faq-item">
              <h3 class="codes-faq-q">{{ t('CodesPage.faq.q2') }}</h3>
              <p class="codes-faq-a">{{ t('CodesPage.faq.a2') }}</p>
            </div>
            <div class="codes-faq-item">
              <h3 class="codes-faq-q">{{ t('CodesPage.faq.q3') }}</h3>
              <p class="codes-faq-a">{{ t('CodesPage.faq.a3') }}</p>
            </div>
            <div class="codes-faq-item">
              <h3 class="codes-faq-q">{{ t('CodesPage.faq.q4') }}</h3>
              <p class="codes-faq-a">{{ t('CodesPage.faq.a4Part1') }}<a href="/wiki">{{ t('HomePage.db.wikiLink') }}</a>{{ t('CodesPage.faq.a4Part2') }}<a href="/map">{{ t('Header.nav.text4') }}</a>{{ t('CodesPage.faq.a4Part3') }}</p>
            </div>
            <div class="codes-faq-item">
              <h3 class="codes-faq-q">{{ t('CodesPage.faq.q5') }}</h3>
              <p class="codes-faq-a">{{ t('CodesPage.faq.a5') }}</p>
            </div>
            <div class="codes-faq-item">
              <h3 class="codes-faq-q">{{ t('CodesPage.faq.q6') }}</h3>
              <p class="codes-faq-a">{{ t('CodesPage.faq.a6') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import PageHero from '@/components/PageHero.vue'

const { t } = useI18n()

const activeCodes = [
  {
    code: 'r4p8n6m2q9',
    rewards: '10x Wishing Stars, 3x Mermaid Fish Attractors, 10x Fertilizer',
    expires: 'Mar 31, 2026',
    lastVerified: 'Feb 6, 2026',
  },
  {
    code: 'heartopia10m',
    rewards: '10x Wishing Stars',
    expires: 'Mar 31, 2026',
    lastVerified: 'Feb 6, 2026',
  },
  {
    code: 'lifewithline',
    rewards: '10x Wishing Stars',
    expires: 'Mar 31, 2026',
    lastVerified: 'Feb 6, 2026',
  },
  {
    code: 'happy2026',
    rewards: '10x Moonlight Crystals, 8888 Gold',
    expires: 'Mar 31, 2026',
    lastVerified: 'Feb 6, 2026',
  },
  {
    code: 'k7m9q2a8l5',
    rewards: '5x Wishing Stars, 3x Mermaid Fish Attractors, 10x Fertilizer',
    expires: 'Mar 31, 2026',
    lastVerified: 'Feb 6, 2026',
  },
  {
    code: 'heartopia5m',
    rewards: '10x Wishing Stars',
    expires: 'Mar 31, 2026',
    lastVerified: 'Feb 6, 2026',
  },
  {
    code: 'top1thanks',
    rewards: '5x Wishing Stars, 2x Mermaid Perfume, 10x Mandarins',
    expires: 'Mar 31, 2026',
    lastVerified: 'Feb 6, 2026',
  },
  {
    code: 'r4a8x2n',
    rewards: '5x Wishing Stars, 10x Growth Boosters, 10x Oranges',
    expires: 'Mar 31, 2026',
    lastVerified: 'Feb 6, 2026',
  },
  {
    code: 'true5mthks',
    rewards: '10x Quality Timber, 2x Chef\'s Special Salad, 20x Branches',
    expires: 'Mar 31, 2026',
    lastVerified: 'Feb 6, 2026',
  },
  {
    code: 'letsparty',
    rewards: '15x Wishing Stars, 5000 Gold, 3x Repair Kits',
    expires: 'Mar 31, 2026',
    lastVerified: 'Feb 6, 2026',
  },
]

const expiredCodes = [
  {
    code: 'b8n2k5l',
    rewards: '2x Flawless Fluorite, 6x Rare Timber, 10x Stone',
  },
  {
    code: 'dcthx4u',
    rewards: '10x Wishing Stars',
  },
  {
    code: 'm7r9q4a',
    rewards: '2x Mermaid Perfume, 10000 Gold, 10x Eggs',
  },
  {
    code: 'x2l8k6p',
    rewards: '5x Wishing Stars, 10x Fertilizer, 10x Apples',
  },
  {
    code: 'h9q3a7m5',
    rewards: '2x Roaming Oak Timber, 10x Milk, 10x Timber',
  },
  {
    code: 'z4p6n8r2',
    rewards: '10x Quality Timber, 2x Chef\'s Special Salad, 20x Branches',
  },
  {
    code: 'specialgift0103',
    rewards: '100x Moonlight Crystals',
  },
  {
    code: 'heartopia0108',
    rewards: '100x Moonlight Crystals',
  },
  {
    code: 'mylittlepony',
    rewards: '100x Moonlight Crystals',
  },
  {
    code: 'letsbuild',
    rewards: '15x Wishing Stars, 5000 Gold, 10x Fertilizer',
  },
  {
    code: 'letsdressup',
    rewards: '15x Wishing Stars, 5000 Gold, 10x Growth Boosters',
  },
  {
    code: 'a7k9m2q8l',
    rewards: '5x Wishing Stars, 3x Repair Kits, 10x Blueberries',
  },
  {
    code: 'Crystals',
    rewards: '100x Moonlight Crystals',
  },
  {
    code: 'officialstream',
    rewards: 'Unknown rewards',
  },
  {
    code: 'finaltest',
    rewards: 'Unknown rewards',
  },
]

const copiedCode = ref('')
let copyTimer

const copyCode = async (code) => {
  try {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(code)
      copiedCode.value = code
      if (copyTimer) clearTimeout(copyTimer)
      copyTimer = setTimeout(() => {
        if (copiedCode.value === code) {
          copiedCode.value = ''
        }
      }, 2000)
    }
  } catch {
    // ignore clipboard failures for now
  }
}
</script>

<style scoped>
.codes-page {
  min-height: 100vh;
}

/* Active codes layout */
.codes-main {
  padding: 3rem 0 4rem;
  background: var(--color-bg);
}

.codes-main-layout {
  display: grid;
  grid-template-columns: minmax(0, 2.2fr) minmax(0, 1fr);
  gap: 2.5rem;
  align-items: flex-start;
}

@media (max-width: 1024px) {
  .codes-main-layout {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .codes-main,
  .codes-expired,
  .codes-faq {
    padding: 2rem 0 3rem;
  }
}

@media (max-width: 768px) {
  .codes-page {
    --m-h2: 1.3rem;
    --m-h3: 1.1rem;
    --m-p: 0.8rem;
    --m-line: 1.2;
    --m-gap: 0.7rem;
    --m-block: 1rem;
    --m-tight: 0.75rem;
  }
  .codes-main,
  .codes-expired,
  .codes-faq {
    padding: var(--m-block) 0;
  }
  .codes-main-layout {
    gap: var(--m-tight);
  }
  .section-heading {
    font-size: var(--m-h2);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .codes-note {
    font-size: var(--m-p);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .codes-active-list {
    gap: var(--m-tight);
  }
  .codes-card {
    padding: var(--m-block);
  }
  .codes-card-header {
    margin-bottom: var(--m-gap);
  }
  .codes-reward,
  .codes-meta {
    font-size: var(--m-p);
    line-height: var(--m-line);
  }
  .codes-side {
    padding: var(--m-block);
  }
  .redeem-steps {
    font-size: var(--m-p);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .redeem-tip {
    font-size: var(--m-p);
    line-height: var(--m-line);
  }
  .codes-expired-grid {
    gap: var(--m-tight);
  }
  .codes-expired-card {
    padding: var(--m-block);
  }
  .codes-faq-content .section-heading {
    margin-bottom: var(--m-gap);
  }
  .codes-faq-item {
    padding: var(--m-gap) 0;
  }
  .codes-faq-q {
    font-size: var(--m-h3);
    margin-bottom: var(--m-gap);
    line-height: var(--m-line);
  }
  .codes-faq-a {
    font-size: var(--m-p);
    line-height: var(--m-line);
  }
}

.section-heading {
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.75rem;
}

.codes-note {
  font-size: 0.9rem;
  color: var(--color-text-soft);
  margin-bottom: 1.25rem;
}
.codes-note a {
  color: var(--color-primary-dark);
  text-decoration: none;
}
.codes-note a:hover {
  text-decoration: underline;
}

.codes-active-list {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.codes-card {
  padding: 1rem 1.1rem;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 20px rgba(74, 85, 104, 0.06);
}

.codes-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.35rem;
}

.codes-header-right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.code-pill {
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  background: #050608;
  color: #ffffff;
  font-family: var(--font-display);
  font-weight: 600;
  letter-spacing: 0.1em;
  font-size: 0.8rem;
}

.code-status {
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  background: rgba(139, 189, 155, 0.12);
  color: var(--color-primary-dark);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.code-copy-btn {
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
  border: 1px solid rgba(74, 85, 104, 0.16);
  background: rgba(255, 255, 255, 0.9);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-text-soft);
  cursor: pointer;
  transition: all 160ms ease-out;
}

.code-copy-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary-dark);
  box-shadow: 0 2px 10px rgba(74, 85, 104, 0.1);
}

.codes-reward {
  font-size: 0.9rem;
  margin-bottom: 0.35rem;
  color: var(--color-text);
}

.codes-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem 1.5rem;
  font-size: 0.8rem;
  color: var(--color-text-soft);
}

/* Redeem side panel */
.codes-side {
  padding: 1.25rem 1.3rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 28px rgba(74, 85, 104, 0.08);
}

.redeem-steps {
  margin: 0 0 1rem;
  padding-left: 1.1rem;
  font-size: 0.9rem;
  color: var(--color-text-soft);
}

.redeem-steps li + li {
  margin-top: 0.35rem;
}

.redeem-tip {
  font-size: 0.8rem;
  color: var(--color-text-soft);
}
.redeem-tip a {
  color: var(--color-primary-dark);
  text-decoration: none;
}
.redeem-tip a:hover {
  text-decoration: underline;
}

/* Expired section */
.codes-expired {
  padding: 3rem 0 4rem;
  background: linear-gradient(180deg, #fffdf7 0%, #ffffff 100%);
}

.codes-expired-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

@media (max-width: 1024px) {
  .codes-expired-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .codes-expired-grid {
    grid-template-columns: 1fr;
  }
}

.codes-expired-card {
  padding: 0.85rem 1rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px dashed rgba(226, 232, 240, 0.9);
}

.code-tag {
  display: inline-flex;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.15);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-text-soft);
  margin-bottom: 0.35rem;
}

/* FAQ */
.codes-faq {
  padding: 4rem 0 5rem;
  background: linear-gradient(180deg, #fffdf5 0%, #ffffff 100%);
  border-top: 1px solid rgba(74, 85, 104, 0.08);
}

.codes-faq-content {
  max-width: 720px;
}

.codes-faq-content .section-heading {
  margin-bottom: 1.5rem;
}

.codes-faq-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.codes-faq-item {
  border-bottom: 1px solid rgba(74, 85, 104, 0.1);
  padding: 1.1rem 0;
}

.codes-faq-item:last-child {
  border-bottom: none;
}

.codes-faq-q {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 0.4rem;
  line-height: 1.35;
}

.codes-faq-a {
  font-size: 0.95rem;
  color: var(--color-text-soft);
  line-height: 1.6;
  margin: 0;
}
.codes-faq-a a {
  color: var(--color-primary-dark);
  text-decoration: none;
}
.codes-faq-a a:hover {
  text-decoration: underline;
}
</style>

