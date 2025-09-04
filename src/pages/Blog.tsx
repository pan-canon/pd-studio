import { i18n } from '@/i18n'
import { PostRepository, type Category } from '@/services/PostRepository'
import { useSearchParams, Link } from 'react-router-dom'
import React from 'react'
const repo = new PostRepository()
export default function Blog() {
  const [params, setParams] = useSearchParams()
  const cat = (params.get('cat') || 'articles') as Category
  const posts = repo.getByCategory(i18n.getLocale(), cat)
  const cats: { key: Category, label: string }[] = [
    { key: 'articles', label: i18n.t('blog.cats.articles') },
    { key: 'cases', label: i18n.t('blog.cats.cases') },
    { key: 'personal', label: i18n.t('blog.cats.personal') }
  ]
  return (<section className="qa"><div className="container">
    <div className="u-flex u-between" style={{alignItems:'baseline'}}>
      <h1 className="qa__title">{i18n.t('blog.title')}</h1>
      <nav className="u-flex u-gap-2">{cats.map(c => (<button key={c.key} onClick={()=> setParams({ cat: c.key })} className="btn btn--ghost" aria-pressed={c.key === cat}>{c.label}</button>))}</nav>
    </div>
    <div className="qa__list" style={{marginTop:16}}>
      {posts.length === 0 && <div className="qa__note">{i18n.t('blog.empty')}</div>}
      {posts.map(p => (<article key={p.id} className="qa__item">
        <header className="u-flex u-between" style={{alignItems:'baseline'}}>
          <h2 className="hero__title" style={{fontSize:20}}><Link to={`/blog/${p.id}`} style={{color:'inherit', textDecoration:'none'}}>{p.title}</Link></h2>
          <time className="qa__note">{p.date}</time>
        </header>
        <p className="qa__answer">{p.excerpt}</p>
      </article>))}
    </div>
  </div></section>)
}
