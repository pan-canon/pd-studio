import { i18n } from '@/i18n'
import LangSwitch from '@/components/LangSwitch'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home'
import Blog from '@/pages/Blog'
import Post from '@/pages/Post'
import React from 'react'
export default function App() {
  return (<div>
    <header className="header"><div className="container header__inner">
      <a className="header__brand" href="/"><span className="header__logo" aria-hidden><svg viewBox="0 0 24 24" width="16" height="16"><circle cx="12" cy="12" r="8" fill="#e6e6e6" /></svg></span><strong>{i18n.t('brand')}</strong></a>
      <div className="u-flex u-gap-2"><Link to="/" className="btn btn--ghost">Home</Link><Link to="/blog" className="btn btn--ghost">{i18n.t('blog.title')}</Link><LangSwitch /><a href="#contact" className="header__cta">{i18n.t('cta_mockup')}</a></div>
    </div></header>
    <main><Routes><Route path="/" element={<Home />} /><Route path="/blog" element={<Blog />} /><Route path="/blog/:id" element={<Post />} /></Routes></main>
    <footer className="footer"><div className="container u-flex u-between"><div>© {new Date().getFullYear()} HauntWorks Society</div><div>{i18n.t('footer.tag')}</div></div></footer>
  </div>)
}
