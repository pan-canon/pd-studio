import { i18n, setLocale, type Locale, availableLocales } from '@/i18n'
import React from 'react'

/** Renders a dropdown to switch between available languages. */
export default function LangSwitch() {
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => setLocale(e.target.value as Locale)
  return (
    <select aria-label="Language" defaultValue={i18n.getLocale()} onChange={onChange} className="select" style={{height:32}}>
      {availableLocales.map(lc => (
        <option key={lc} value={lc}>{lc.toUpperCase()}</option>
      ))}
    </select>
  )
}
