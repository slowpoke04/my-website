import {getTranslation} from '@/lib/i18n'
import {ELanguages} from '@/types/enums'
import {Trans} from 'react-i18next/TransWithoutContext'

export default async function About({lng}: {lng: ELanguages}) {
  const {t} = await getTranslation(lng, undefined, {keyPrefix: 'about'})

  // styles
  const emphTextColor = 'font-semibold text-teal-700 dark:text-slate-100'
  const paragraphClassName =
    'text-[16px] font-extralight text-slate-500 dark:text-slate-400'

  return (
    <section className='flex flex-col gap-4 md:-mt-4'>
      <h2 className='text-sm font-semibold text-slate-900 dark:text-slate-100 md:invisible md:h-0'>
        {t('section_title')}
      </h2>
      <Trans
        t={t}
        i18nKey='content'
        components={{
          par: <p className={paragraphClassName} />,
          s: <strong className={emphTextColor} />,
        }}
      />
    </section>
  )
}
