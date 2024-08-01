import {cn} from '@/lib/utils'
import {ELanguages} from '@/types/enums'
import {Github, GraduationCap, Linkedin} from 'lucide-react'
import ThemeChanger from './theme-changer'
import LanguageSwitcher from './language-switcher'
import Link from 'next/link'

export default function Links({
  lng,
  className,
}: {
  lng: ELanguages
  className?: string
}) {
  const LinkClassName = 'hover:text-slate-900 dark:hover:text-slate-100'
  return (
    <div
      className={cn(
        'flex items-center justify-between gap-12 text-slate-600 dark:text-slate-400',
        className,
      )}>
      <div className='flex gap-3'>
        <a
          href='https://www.linkedin.com/in/léo-petit-74b84011b/'
          target='_blank'
          rel='noopener'>
          <Linkedin className={LinkClassName} />
        </a>
        <a href='https://github.com/Leooop' target='_blank' rel='noopener'>
          <Github className={LinkClassName} />
        </a>
        <a
          href={`https://scholar.google.com/citations?user=jwm5NGgAAAAJ&hl=${lng}`}
          target='_blank'
          rel='noopener'>
          <GraduationCap className={LinkClassName} />
        </a>
      </div>
      <div className='flex items-center gap-3'>
        <ThemeChanger className='hover:text-slate-900 dark:hover:text-slate-100' />
        <LanguageSwitcher lng={lng} />
      </div>
    </div>
  )
}
