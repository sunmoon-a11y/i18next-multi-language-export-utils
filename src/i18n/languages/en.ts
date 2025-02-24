import { makeLanguageConfig } from "../helper.ts";

const files = import.meta.glob('./en/*.ts', { eager: true, import: 'default' })

const languageConfig = makeLanguageConfig(files, 'en')

export default languageConfig
