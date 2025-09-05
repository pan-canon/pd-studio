import { I18nService, type Locale, type Dict } from './I18nService'

// Eagerly import all locale JSON files for automatic registration
const modules = import.meta.glob('./locales/*.json', { eager: true }) as Record<string, { default: Dict }>
const dicts: Record<string, Dict> = {}
for (const [path, mod] of Object.entries(modules)) {
  const key = path.split('/').pop()!.replace('.json', '')
  dicts[key] = mod.default
}

export const availableLocales: Locale[] = Object.keys(dicts)
export const i18n = new I18nService(dicts, 'en')
export function setLocale(lc: Locale) { i18n.setLocale(lc) }
export type { Locale }
