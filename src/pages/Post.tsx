import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { PostRepository } from '@/services/PostRepository'
import { i18n } from '@/i18n'
import { marked } from 'marked'
const repo = new PostRepository()
export default function Post() {
  const { id } = useParams<{ id: string }>(); const post = id ? repo.getById(id) : undefined
  if (!post) return (<section className="qa"><div className="container"><p className="qa__note">Post not found.</p><Link to="/blog" className="btn btn--ghost">← {i18n.t('blog.title')}</Link></div></section>)
  const html = post.body ? marked.parse(post.body) : `<p>${post.excerpt}</p>`
  return (<section className="qa"><div className="container">
    <header className="u-flex u-between" style={{alignItems:'baseline'}}><h1 className="qa__title">{post.title}</h1><time className="qa__note">{post.date}</time></header>
    <article className="qa__item" dangerouslySetInnerHTML={{ __html: html }} />
    <div style={{marginTop:12}}><Link to="/blog" className="btn btn--ghost">← {i18n.t('blog.title')}</Link></div>
  </div></section>)
}
