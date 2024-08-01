import {cn} from '@/lib/utils'
import {ELanguages} from '@/types/enums'
import Link from 'next/link'

export default function LanguageSwitcher({lng}: {lng: ELanguages}) {
  return (
    <div className='flex items-center rounded border border-slate-400 text-xs font-semibold dark:border-slate-600'>
      <Link
        href='/en'
        className={cn(
          'rounded-l p-1 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100',
          lng === ELanguages.EN &&
            'bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-slate-100',
        )}>
        EN
      </Link>
      <Link
        href='/fr'
        className={cn(
          'rounded-r p-1 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100',
          lng === ELanguages.FR &&
            'bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-slate-100',
        )}>
        FR
      </Link>
    </div>
  )
}
