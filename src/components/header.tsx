import ThemeChanger from './theme-changer'
import {ELanguages} from '@/types/enums'
import {getTranslation} from '@/lib/i18n'
import {cn} from '@/lib/utils'
import {Github, Linkedin} from 'lucide-react'
import LanguageSwitcher from './language-switcher'
import Links from './links'

export default function Header({
  lng,
  className,
}: {
  lng: ELanguages
  className?: string
}) {
  return (
    <header className={cn('flex flex-col justify-between gap-0', className)}>
      <div className='flex flex-col md:gap-8'>
        <Title lng={lng} />
        <Tabs lng={lng} />
      </div>
      <Links lng={lng} className='invisible h-0 md:visible' />
    </header>
  )
}

export async function Title({lng}: {lng: ELanguages}) {
  const {t} = await getTranslation(lng)
  return (
    <section className='flex flex-col gap-2'>
      <h1 className='text-3xl font-semibold text-slate-600 dark:text-slate-100 sm:text-5xl'>
        Léo Petit
      </h1>
      <h2 className='text-lg text-slate-600 dark:text-slate-100 sm:text-xl'>
        {t('subtitle')}
      </h2>
      <h3 className='text-xs font-light text-slate-500 dark:text-slate-400 sm:text-sm'>
        {t('pitch')}
      </h3>
    </section>
  )
}

const tabsKeys = ['about', 'experience', 'education']
function Tabs({lng}: {lng: ELanguages}) {
  return (
    <ul className='invisible flex h-0 flex-col items-start gap-4 md:visible'>
      {tabsKeys.map(tabKey => (
        <li key={tabKey}>
          <TabElement lng={lng} tabKey={tabKey} />
        </li>
      ))}
    </ul>
  )
}

async function TabElement({lng, tabKey}: {lng: ELanguages; tabKey: string}) {
  const {t} = await getTranslation(lng, undefined, {keyPrefix: 'tabs'})
  return (
    <div className='group flex items-center gap-4 text-xs font-normal tracking-widest text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'>
      <TabLine className='inline-block h-[2px] w-8 border-none bg-slate-600 transition-all duration-150 ease-in-out group-hover:w-16 group-hover:bg-slate-900 dark:bg-slate-400 dark:group-hover:bg-slate-100' />
      {t(tabKey)}
    </div>
  )
}

const TabLine = ({className}: {className?: string}) => (
  <hr className={cn('', className)} />
)
