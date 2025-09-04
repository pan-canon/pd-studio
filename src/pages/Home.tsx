import { i18n } from '@/i18n'
import React from 'react'
export default function Home() {
  const scrollerRef = React.useRef<HTMLDivElement | null>(null)
  React.useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)'); if (m.matches) return
    const tick = () => {
      const el = scrollerRef.current; if (!el) return
      const step = el.clientWidth * 0.85; el.scrollBy({ left: step, behavior: 'smooth' })
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 8) el.scrollTo({ left: 0, behavior: 'smooth' })
    }
    const id = window.setInterval(tick, 3500); return () => window.clearInterval(id)
  }, [])
  const testimonials = i18n.t('testi.items') as any[]
  return (<>
    <section className="hero"><div className="container"><div className="hero__panel">
      <p className="hero__eyebrow">{i18n.t('hero.eyebrow')}</p>
      <h1 className="hero__title" data-testid="hero-title">{i18n.t('hero.title')}</h1>
      <p className="hero__lead">{i18n.t('hero.lead')}</p>
      <div className="hero__actions">
        <a href="#faq" className="btn btn--light">{i18n.t('hero.primary')}</a>
        <a href="#contact" className="btn btn--ghost">{i18n.t('hero.secondary')}</a>
      </div>
    </div></div></section>
    <section aria-label="Testimonials">
      <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end'}}>
        <h2 className="font-serif" style={{fontSize:22}}>{i18n.t('testi.title')}</h2>
        <div style={{display:'flex', gap:8}}>
          <button onClick={()=> scrollerRef.current?.scrollBy({left: -(scrollerRef.current!.clientWidth*0.85), behavior:'smooth'})} className="btn btn--ghost" style={{padding:'6px 10px'}}>‹</button>
          <button onClick={()=> scrollerRef.current?.scrollBy({left: (scrollerRef.current!.clientWidth*0.85), behavior:'smooth'})} className="btn btn--ghost" style={{padding:'6px 10px'}}>›</button>
        </div>
      </div>
      <div className="container testi">
        <div className="testi__rail" ref={scrollerRef}>
          {testimonials.map((t, i)=> (<figure key={i} data-testid="testi" className="testi__item">
            <blockquote className="testi__quote">{t.q}</blockquote>
            <figcaption className="testi__who">— {t.n}, {t.r}</figcaption>
          </figure>))}
        </div>
      </div>
    </section>
    <section id="faq" className="qa"><div className="container">
      <h2 className="qa__title">{i18n.t('qa.title')}</h2><p className="qa__note">{i18n.t('qa.note')}</p>
      <div className="qa__list">
        {(i18n.t('qa.items') as any[]).map((item, i)=> (<details key={i} data-testid="faq-item" className="qa__item">
          <summary className="qa__question"><span>{item.q}</span><span style={{color:'#a1a1aa'}}>▾</span></summary>
          <div className="qa__answer">{item.a}</div>
        </details>))}
      </div>
    </div></section>
    <section id="charts" className="charts"><div className="container" style={{display:'grid', gap:12, gridTemplateColumns:'1fr'}}>
      <div className="chart-card" data-testid="chart-card"><div className="chart-card__title">{i18n.t('charts.line')}</div>
        <svg viewBox="0 0 300 120" className="chart-card__svg" role="img" aria-label="line chart"><rect x="0" y="0" width="300" height="120" fill="#0b0b0b" /><polyline fill="none" stroke="#e4e4e7" strokeWidth="2" points="10,100 60,92 110,85 160,70 210,54 260,40 290,28"/></svg>
      </div>
      <div className="chart-card" data-testid="chart-card"><div className="chart-card__title">{i18n.t('charts.bar')}</div>
        <svg viewBox="0 0 300 120" className="chart-card__svg" role="img" aria-label="bar chart"><rect x="0" y="0" width="300" height="120" fill="#0b0b0b" />{[30,50,65,80,45].map((h,i)=> (<rect key={i} x={20+i*55} y={110-h} width="35" height={h} fill="#e4e4e7"/>))}</svg>
      </div>
      <div className="chart-card" data-testid="chart-card"><div className="chart-card__title">{i18n.t('charts.pie')}</div>
        <svg viewBox="0 0 300 120" className="chart-card__svg" role="img" aria-label="pie chart"><rect x="0" y="0" width="300" height="120" fill="#0b0b0b" /><g transform="translate(70,60)"><circle r="40" fill="#18181b" /><path d="M0 0 L40 0 A40 40 0 1 1 -30 -26 Z" fill="#e4e4e7"/></g><text x="130" y="64" fontSize="10" fill="#a1a1aa">AA contrast, motion safety, warnings</text></svg>
      </div>
    </div></section>
    <section id="contact" className="contact"><div className="container"><div className="hero__panel">
      <h2 className="qa__title">{i18n.t('contact.title')}</h2><p className="qa__note">{i18n.t('contact.lead')}</p>
      <form className="form" onSubmit={(e)=>{e.preventDefault(); alert('Thanks! We\\'ll get back to you shortly.')}}>
        <div className="form__row"><div className="form__group"><label htmlFor="name" className="qa__note">{i18n.t('contact.name')}</label><input id="name" name="name" className="input" placeholder="Jane Doe" required/></div><div className="form__group"><label htmlFor="email" className="qa__note">{i18n.t('contact.email')}</label><input id="email" name="email" type="email" className="input" placeholder="jane@example.com" required/></div></div>
        <div className="form__group"><label htmlFor="type" className="qa__note">{i18n.t('contact.type')}</label><select id="type" name="type" className="select"><option>Film (short)</option><option>Film (feature)</option><option>Game / Visual Novel</option><option>Podcast / YouTube</option><option>Haunted event / Escape room</option><option>Other</option></select></div>
        <div className="form__group"><label htmlFor="message" className="qa__note">{i18n.t('contact.msg')}</label><textarea id="message" name="message" className="textarea" placeholder="Goal, deadline, assets (poster/stills), Kickstarter/Indiegogo link if any."></textarea></div>
        <div className="u-end u-flex"><button type="submit" className="btn btn--light">{i18n.t('contact.send')}</button></div>
        <div className="form__hint">{i18n.t('contact.hint')}</div>
      </form>
    </div></div></section>
  </>)
}
