import { createI18n } from 'vue-i18n'
import en from './locales/en.js'
import de from './locales/de.js'
import fa from './locales/fa.js'
import id from './locales/id.js'
import es from './locales/es.js'
import pt from './locales/pt.js'
import zh from './locales/zh.js'
import th from './locales/th.js'

/** 默认英语无前缀，其他语言 URL 加前缀如 /de/、/zh/、/th/ 等 */
export const supportedLocales = ['en', 'de', 'fa', 'id', 'es', 'pt', 'zh', 'th']

/** 各语言名称（用于下拉显示） */
export const localeNames = {
  en: 'English',
  de: 'Deutsch',
  fa: 'Français',
  id: 'Indonesia',
  es: 'Español',
  pt: 'Português',
  zh: '中文',
  th: 'ไทย',
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, de, fa, id, es, pt, zh, th },
})

export default i18n
