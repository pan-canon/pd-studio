import type { Locale } from '@/i18n'
import { markdownPosts } from '@/content/markdownPosts'

export type Category = 'articles' | 'cases' | 'personal'
export interface PostMeta { id: string; title: string; category: Category; date: string; excerpt: string; locale: Locale }
export interface PostFull extends PostMeta { body?: string }

export class PostRepository {
  private all(): PostFull[] { return markdownPosts as unknown as PostFull[] }
  getAllByLocale(lc: Locale): PostFull[] { return this.all().filter(p => p.locale === lc).sort((a,b)=> (a.date < b.date ? 1 : -1)) }
  getByCategory(lc: Locale, cat: Category): PostFull[] { return this.getAllByLocale(lc).filter(p => p.category === cat) }
  getById(id: string): PostFull | undefined { return this.all().find(p => p.id === id) }
}
