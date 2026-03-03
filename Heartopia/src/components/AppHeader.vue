<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useLocalizedPath } from '@/composables/useLocalizedPath'
import { supportedLocales } from '@/i18n/index.js'

const router = useRouter()
const route = useRoute()
const { t, locale } = useI18n()
const { getLocalizedPath, getCurrentLocale } = useLocalizedPath()
const isLangDropdownOpen = ref(false)
const langSwitcherRef = ref(null)

const currentLocale = computed(() => getCurrentLocale() || locale.value || 'en')

function toggleLangDropdown() {
  isLangDropdownOpen.value = !isLangDropdownOpen.value
}

function selectLanguage(newLocale) {
  if (newLocale === currentLocale.value) {
    isLangDropdownOpen.value = false
    return
  }
  const pathSegments = route.path.split('/').filter(Boolean)
  if (pathSegments.length > 0 && supportedLocales.includes(pathSegments[0])) {
    pathSegments.shift()
  }
  const basePath = '/' + pathSegments.join('/') || ''
  if (newLocale === 'en') {
    router.push(basePath || '/')
  } else {
    router.push(`/${newLocale}${basePath}`)
  }
  isLangDropdownOpen.value = false
}

function handleClickOutside(e) {
  if (langSwitcherRef.value && !langSwitcherRef.value.contains(e.target)) {
    isLangDropdownOpen.value = false
  }
}
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})
onUnmounted(() => document.removeEventListener('click', handleClickOutside))
</script>

<template>
  <header class="app-header">
    <div class="container">
      <div class="header-inner">
        <a :href="getLocalizedPath('/')" class="logo">
          <img src="/images/logo.webp" alt="Heartopia Logo" class="logo-image">
          <span class="logo-text">{{ t('Header.logo') }}</span>
        </a>
        <nav class="nav" aria-label="Main navigation">
          <a :href="getLocalizedPath('/')" class="nav-link">{{ t('Header.nav.text1') }}</a>
          <a :href="getLocalizedPath('/codes')" class="nav-link">{{ t('Header.nav.text2') }}</a>
          <a :href="getLocalizedPath('/characters')" class="nav-link">{{ t('Header.nav.text3') }}</a>
          <a :href="getLocalizedPath('/map')" class="nav-link">{{ t('Header.nav.text4') }}</a>
          <a :href="getLocalizedPath('/events')" class="nav-link">{{ t('Header.nav.text5') }}</a>
          <a :href="getLocalizedPath('/wiki')" class="nav-link">{{ t('Header.nav.text6') }}</a>
          <a :href="getLocalizedPath('/guide')" class="nav-link">{{ t('Header.nav.text7') }}</a>
        </nav>
        <div class="lang-switcher" ref="langSwitcherRef" @click.stop>
          <button
            type="button"
            class="lang-button"
            :aria-label="t('common.languageSwitcher.label')"
            :aria-expanded="isLangDropdownOpen"
            @click="toggleLangDropdown"
          >
            <span class="lang-current">{{ currentLocale.toUpperCase() }}</span>
            <svg class="lang-arrow" :class="{ open: isLangDropdownOpen }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6,9 12,15 18,9" />
            </svg>
          </button>
          <div v-if="isLangDropdownOpen" class="lang-dropdown">
            <button
              v-for="loc in supportedLocales"
              :key="loc"
              type="button"
              class="lang-option"
              :class="{ active: currentLocale === loc }"
              @click="selectLanguage(loc)"
            >
              {{ loc.toUpperCase() }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(74, 85, 104, 0.08);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.8) inset;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 0.875rem 0;
  min-height: 3.5rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.logo-image {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
}

.logo-text {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--color-text);
  letter-spacing: -0.02em;
  transition: color 0.2s;
  white-space: nowrap;
}

.nav {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.nav-link {
  display: inline-block;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-soft);
  text-decoration: none;
  border-radius: 8px;
  transition: color 0.2s, background 0.2s;
}

.nav-link:hover {
  color: var(--color-primary-dark);
  background: rgba(74, 85, 104, 0.06);
  text-decoration: none;
}

.nav-link.router-link-active {
  color: var(--color-primary-dark);
  background: rgba(37, 99, 235, 0.08);
}

.lang-switcher {
  position: relative;
}
.lang-button {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.6rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-soft);
  background: transparent;
  border: 1px solid rgba(74, 85, 104, 0.2);
  border-radius: 8px;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s, background 0.2s;
}
.lang-button:hover {
  color: var(--color-primary-dark);
  border-color: rgba(74, 85, 104, 0.35);
  background: rgba(74, 85, 104, 0.04);
}
.lang-current {
  text-transform: uppercase;
}
.lang-arrow {
  width: 1rem;
  height: 1rem;
  transition: transform 0.2s;
}
.lang-arrow.open {
  transform: rotate(180deg);
}
.lang-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.25rem;
  min-width: 5rem;
  padding: 0.25rem;
  background: #fff;
  border: 1px solid rgba(74, 85, 104, 0.12);
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(74, 85, 104, 0.12);
  z-index: 200;
}
.lang-option {
  display: block;
  width: 100%;
  padding: 0.4rem 0.75rem;
  font-size: 0.875rem;
  text-align: left;
  color: var(--color-text-soft);
  background: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: color 0.2s, background 0.2s;
}
.lang-option:hover {
  color: var(--color-primary-dark);
  background: rgba(74, 85, 104, 0.06);
}
.lang-option.active {
  color: var(--color-primary-dark);
  font-weight: 600;
  background: rgba(37, 99, 235, 0.08);
}

@media (max-width: 900px) {
  .header-inner {
    flex-direction: column;
    align-items: stretch;
    padding: 0.75rem 0;
  }

  .logo {
    justify-content: center;
  }

  .nav {
    justify-content: center;
    gap: 0.125rem;
  }

  .nav-link {
    padding: 0.4rem 0.5rem;
    font-size: 0.8125rem;
  }
}
</style>
