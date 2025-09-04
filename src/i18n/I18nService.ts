export type Locale = 'en' | 'ru' | 'uk';
export type Dict = Record<string, any>;
export class I18nService {
  private locale: Locale;
  private readonly dicts: Record<Locale, Dict>;
  constructor(dicts: Record<Locale, Dict>, defaultLocale: Locale = 'en') {
    const saved = (typeof localStorage !== 'undefined' && localStorage.getItem('locale')) as Locale | null;
    this.locale = saved || defaultLocale; this.dicts = dicts;
  }
  public getLocale(): Locale { return this.locale }
  public setLocale(lc: Locale) { this.locale = lc; try { localStorage.setItem('locale', lc) } catch {} }
  public t(path: string, fallback = ''): any {
    const parts = path.split('.'); let cur: any = this.dicts[this.locale];
    for (const p of parts) { if (cur && typeof cur === 'object' && p in cur) cur = cur[p]; else return fallback || path; }
    return cur;
  }
}
