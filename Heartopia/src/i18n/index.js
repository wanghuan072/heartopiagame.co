import { createI18n } from 'vue-i18n'
import en from './locales/en.js'
import de from './locales/de.js'
import fa from './locales/fa.js'

/** 默认英语无前缀，其他语言 URL 加前缀如 /de/、/fa/ */
export const supportedLocales = ['en', 'de', 'fa']

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, de, fa },
})

export default i18n
