import { i18n, setLocale, type Locale } from '@/i18n'
import React from 'react'
export default function LangSwitch() {
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => setLocale(e.target.value as Locale)
  return (
    <select aria-label="Language" defaultValue={i18n.getLocale()} onChange={onChange} className="select" style={{height:32}}>
      <option value="en">EN</option><option value="ru">RU</option><option value="uk">UK</option>
    </select>
  )
}
