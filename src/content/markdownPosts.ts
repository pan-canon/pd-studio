import { parseFrontMatter } from '@/utils/frontmatter'
export type Category = 'articles' | 'cases' | 'personal'
export interface MarkdownPost { id: string; title: string; category: Category; date: string; excerpt: string; locale: 'en'|'ru'|'uk'; body: string }
const files = import.meta.glob('/src/content/posts/**/*.md', { as: 'raw', eager: true }) as Record<string, string>
export const markdownPosts: MarkdownPost[] = Object.entries(files).map(([path, raw]) => {
  const { data, content } = parseFrontMatter(raw)
  const id = data.id || path.split('/').pop()!.replace(/\.md$/, '')
  return { id, title: data.title || id, category: (data.category || 'articles') as Category, date: data.date || '1970-01-01', excerpt: data.excerpt || '', locale: (data.locale || 'en') as any, body: content }
})
