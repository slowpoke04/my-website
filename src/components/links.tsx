import {cn} from '@/lib/utils'
import {ELanguages} from '@/types/enums'
import {Github, Linkedin} from 'lucide-react'
import ThemeChanger from './theme-changer'
import LanguageSwitcher from './language-switcher'

export default function Links({
  lng,
  className,
}: {
  lng: ELanguages
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex items-center justify-between gap-12 text-slate-600 dark:text-slate-400',
        className,
      )}>
      <div className='flex gap-3'>
        <Linkedin className='hover:text-slate-900 dark:hover:text-slate-100' />
        <Github className='hover:text-slate-900 dark:hover:text-slate-100' />
      </div>
      <div className='flex items-center gap-3'>
        <ThemeChanger className='hover:text-slate-900 dark:hover:text-slate-100' />
        <LanguageSwitcher lng={lng} />
      </div>
    </div>
  )
}
