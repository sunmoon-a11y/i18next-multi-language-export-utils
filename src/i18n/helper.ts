import { Resource } from 'i18next'

export type LanguageCodeTypes = 'en' | 'zh'

export interface LanguageOptionTypes {
  name: string
  code: LanguageCodeTypes
}

export interface LanguageSectionTypes {
  section: string
  translation: any
}

export interface LanguageConfigTypes {
  desc: LanguageOptionTypes
  translation: any
}

export const languageKey = 'language'

export const languageOptionConfig: {
  [key in LanguageCodeTypes]: LanguageOptionTypes
} = {
  en: {
    name: 'English',
    code: 'en'
  },
  zh: {
    name: '简体中文',
    code: 'zh'
  }
}

export const makeLangResources = (files: any): Resource => {
  const filesKeys = Object.keys(files)
  return filesKeys.reduce((init: any, path) => {
    const {
      desc: { code },
      translation
    } = files[path] as LanguageConfigTypes
    init[code] = { translation }
    return init
  }, {})
}

export const makeLanguageConfig = (files: Record<string, any>, langKey: LanguageCodeTypes): LanguageConfigTypes => {
  const filesKeys = Object.keys(files)
  const translation = filesKeys.reduce((init: Record<string, any>, path) => {
    const { section, translation } = files[path] as LanguageSectionTypes
    init[section] = translation
    return init
  }, {})
  return { desc: languageOptionConfig[langKey], translation }
}

export const languages = Object.values(languageOptionConfig)
