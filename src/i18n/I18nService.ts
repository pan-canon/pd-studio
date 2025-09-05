/** Identifier of the current locale. */
export type Locale = string;

/** Dictionary structure used for translations. */
export type Dict = Record<string, any>;

/**
 * Simple internationalization service that retrieves values from
 * loaded locale dictionaries.
 */
export class I18nService {
  private locale: Locale;
  private readonly dicts: Record<string, Dict>;

  constructor(dicts: Record<string, Dict>, defaultLocale: Locale = 'en') {
    const saved = (typeof localStorage !== 'undefined' && localStorage.getItem('locale')) as Locale | null;
    this.locale = saved || defaultLocale;
    this.dicts = dicts;
  }

  /** Returns currently active locale. */
  public getLocale(): Locale { return this.locale; }

  /** Sets active locale and persists it in local storage if possible. */
  public setLocale(lc: Locale): void {
    this.locale = lc;
    try { localStorage.setItem('locale', lc); } catch {}
  }

  /** Retrieves translation value by dotted path or returns fallback. */
  public t(path: string, fallback = ''): any {
    const parts = path.split('.');
    let cur: any = this.dicts[this.locale];
    for (const p of parts) {
      if (cur && typeof cur === 'object' && p in cur) cur = cur[p];
      else return fallback || path;
    }
    return cur;
  }
}
