import { initReactI18next } from 'react-i18next'

import i18n from 'i18next'

import { LanguageCodeTypes, languageKey, makeLangResources } from "./helper.ts";

const files = import.meta.glob(['./languages/*.ts'], {
  eager: true,
  import: 'default'
})

const resources = makeLangResources(files)

export const fallbackLng = (localStorage.getItem(languageKey) ?? 'en') as LanguageCodeTypes

i18n.use(initReactI18next).init({
  resources,
  fallbackLng,
  interpolation: {
    escapeValue: false
  }
} as any)

export default i18n
