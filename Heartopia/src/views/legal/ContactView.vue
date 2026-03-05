<template>
  <div class="legal-page">
    <div class="container legal-container">
      <a :href="getLocalizedPath('/')" class="legal-back">{{ t('common.legalBack') }}</a>
      <h1 class="legal-title">{{ t('ContactPage.title') }}</h1>
      <p>{{ t('ContactPage.p1') }}</p>
      <p><strong>{{ t('ContactPage.p2Label') }}</strong> <a href="mailto:wyong@heartopiagame.co">{{ t('ContactPage.p2Address') }}</a></p>
      <p>{{ t('ContactPage.p3') }}</p>
      <p>{{ t('ContactPage.p4') }}</p>
      <p>{{ t('ContactPage.p5') }}</p>
      <p class="legal-updated">{{ t('common.lastUpdated') }}</p>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useLocalizedPath } from '@/composables/useLocalizedPath'

const { t } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
  padding: 2rem 0 4rem;
  background: linear-gradient(180deg, #f8fbfa 0%, #fff 100%);
}
.legal-container {
  max-width: 720px;
}
.legal-back {
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-primary-dark);
  margin-bottom: 1.5rem;
  text-decoration: none;
}
.legal-back:hover {
  text-decoration: underline;
}
.legal-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 1rem;
}
.legal-page p {
  font-size: 0.95rem;
  color: var(--color-text-soft);
  line-height: 1.65;
  margin: 0 0 1rem;
}
.legal-page a {
  color: var(--color-primary-dark);
  text-decoration: none;
}
.legal-page a:hover {
  text-decoration: underline;
}
.legal-updated {
  margin-top: 2rem;
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

@media (max-width: 1024px) {
  .legal-page { padding: 1.5rem 0 3rem; }
}
@media (max-width: 768px) {
  .legal-page {
    --m-h1: 1.5rem; --m-p: 0.8rem; --m-line: 1.2; --m-gap: 0.7rem; --m-block: 1rem;
    padding: var(--m-block) 0;
  }
  .legal-back { margin-bottom: var(--m-gap); font-size: var(--m-p); }
  .legal-title { font-size: var(--m-h1); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .legal-page p { font-size: var(--m-p); margin-bottom: var(--m-gap); line-height: var(--m-line); }
  .legal-updated { margin-top: var(--m-block); font-size: var(--m-p); line-height: var(--m-line); }
}
</style>
