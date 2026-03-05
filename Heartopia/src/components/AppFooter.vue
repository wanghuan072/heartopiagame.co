<script setup>
import { useI18n } from 'vue-i18n'
import { useLocalizedPath } from '@/composables/useLocalizedPath'

const { t } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
</script>

<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="/images/logo.webp" alt="Heartopia Logo" class="footer-logo-image">
          </div>
          <div class="footer-brand-text">
            <span class="footer-brand-name">{{ t('Footer.logo') }}</span>
            <p class="footer-intro">{{ t('Footer.intro') }}</p>
          </div>
        </div>
        <div class="footer-col">
          <h2>{{ t('Footer.links.quickLinksTitle') }}</h2>
          <a :href="getLocalizedPath('/')">{{ t('Header.nav.text1') }}</a>
          <a :href="getLocalizedPath('/codes')">{{ t('Header.nav.text2') }}</a>
          <a :href="getLocalizedPath('/characters')">{{ t('Header.nav.text3') }}</a>
          <a :href="getLocalizedPath('/map')">{{ t('Header.nav.text4') }}</a>
          <a :href="getLocalizedPath('/events')">{{ t('Header.nav.text5') }}</a>
          <a :href="getLocalizedPath('/wiki')">{{ t('Header.nav.text6') }}</a>
          <a :href="getLocalizedPath('/guide')">{{ t('Header.nav.text7') }}</a>
        </div>
        <div class="footer-col">
          <h2>{{ t('Footer.links.legalTitle') }}</h2>
          <a :href="getLocalizedPath('/about')">{{ t('Footer.links.about') }}</a>
          <a :href="getLocalizedPath('/contact')">{{ t('Footer.links.contact') }}</a>
          <a :href="getLocalizedPath('/privacy')">{{ t('Footer.links.privacyPolicy') }}</a>
          <a :href="getLocalizedPath('/terms')">{{ t('Footer.links.termsOfService') }}</a>
          <a :href="getLocalizedPath('/cookies')">{{ t('Footer.links.cookiePolicy') }}</a>
        </div>
      </div>
      <div class="footer-sep"></div>
      <div class="footer-bottom">
        <p>{{ t('Footer.disclaimer') }}</p>
        <p class="copyright">{{ t('Footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background: #f5f5f5;
  color: #64748b;
  padding: 3rem 0 2rem;
}

.footer-top {
  display: flex;
  gap: 2rem;
  justify-content: space-between;
}

.footer-brand {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.footer-logo {
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.footer-brand-text {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.footer-brand-name {
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--color-text);
}

.footer-intro {
  margin: 0;
  font-size: 0.9rem;
  color: var(--color-text-soft);
  line-height: 1.5;
  max-width: 28em;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-col h2 {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 0.25rem;
}

.footer-col a {
  font-size: 0.9rem;
  color: var(--color-text-soft);
  text-decoration: none;
}

.footer-col a:hover {
  color: var(--color-primary-dark);
}

.footer-sep {
  height: 1px;
  background: rgba(74, 85, 104, 0.15);
  margin: 2rem 0 1.5rem;
}

.footer-bottom p {
  margin: 0 0 0.25rem;
  font-size: 0.85rem;
  color: var(--color-text-soft);
}

.footer-bottom .copyright {
  margin-bottom: 0;
  color: var(--color-text-muted);
}

/* ---------- 响应式：1024 iPad / 768 移动端 ---------- */
@media (max-width: 1024px) {
  .app-footer {
    padding: 2rem 0 1.5rem;
  }
  .footer-top {
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  .footer-brand {
    flex: 1 1 100%;
  }
  .footer-col {
    flex: 1 1 calc(50% - 0.75rem);
    min-width: 0;
  }
  .footer-sep {
    margin: 1.5rem 0 1rem;
  }
}

@media (max-width: 768px) {
  .app-footer {
    padding: 1rem 0;
  }
  .footer-top {
    flex-direction: column;
    gap: 1rem;
  }
  .footer-brand {
    flex: none;
    gap: 0.7rem;
  }
  .footer-brand-text {
    gap: 0.7rem;
  }
  .footer-brand-name {
    font-size: 1.3rem;
    line-height: 1.2;
  }
  .footer-intro {
    font-size: 0.8rem;
    line-height: 1.2;
  }
  .footer-col {
    flex: none;
    width: 100%;
    gap: 0.7rem;
  }
  .footer-col h2 {
    font-size: 1.3rem;
    margin-bottom: 0.7rem;
    line-height: 1.2;
  }
  .footer-col a {
    font-size: 0.8rem;
    line-height: 1.2;
  }
  .footer-sep {
    margin: 1rem 0;
  }
  .footer-bottom p {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }
  .footer-bottom .copyright {
    margin-bottom: 0;
  }
}
</style>
