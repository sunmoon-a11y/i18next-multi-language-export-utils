import { makeLanguageConfig } from "../helper.ts";

const files = import.meta.glob('./zh/*.ts', { eager: true, import: 'default' })

const languageConfig = makeLanguageConfig(files, 'zh')

export default languageConfig
