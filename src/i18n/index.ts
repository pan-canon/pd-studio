import en from './locales/en.json'
import ru from './locales/ru.json'
import uk from './locales/uk.json'
import { I18nService, type Locale } from './I18nService'
export const dicts = { en, ru, uk }
export const i18n = new I18nService(dicts as any, 'en')
export function setLocale(lc: Locale) { i18n.setLocale(lc) }
export type { Locale }
