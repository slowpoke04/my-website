import About from '@/components/about'
import ActiveSectionSetter from '@/components/client/active-section-setter'
import Educations from '@/components/education'
import Experiences from '@/components/experiences'
import Header from '@/components/header'
import Links from '@/components/links'
import {getTranslation} from '@/lib/i18n'
import {ELanguages} from '@/types/enums'
import {Trans} from 'react-i18next/TransWithoutContext'

export default async function Main({params}: {params: {lng: ELanguages}}) {
  const {lng} = params
  const {t} = await getTranslation(lng)

  const hrStyle =
    'h-[2px] rounded border-none my-8 w-full bg-slate-200 dark:bg-slate-800'
  return (
    <main className='flex w-screen flex-col items-center'>
      <div className='flex w-full max-w-[1224px] flex-col items-start gap-12 tracking-wide lg:flex-row'>
        <Header
          className='w-full p-6 pb-0 md:p-10 md:pb-0 lg:sticky lg:top-0 lg:h-screen lg:w-2/5 lg:gap-6 lg:p-20 lg:pr-0'
          lng={lng}
        />

        <div
          id='content'
          className='p-6 pt-0 align-middle md:p-10 md:pt-0 lg:h-full lg:w-3/5 lg:p-20 lg:pl-0'>
          <Links className='pb-4 lg:invisible lg:h-0 lg:p-0' lng={lng} />

          <ActiveSectionSetter section='about'>
            <About lng={lng} />
          </ActiveSectionSetter>

          <hr className={hrStyle} />

          <ActiveSectionSetter section='experience'>
            <Experiences lng={lng} />
          </ActiveSectionSetter>

          <hr className={hrStyle} />

          <ActiveSectionSetter section='education'>
            <Educations lng={lng} />
          </ActiveSectionSetter>

          <div className='h-0 lg:mt-60'>
            <p className='text-right text-xs font-light text-slate-400 dark:text-slate-500'>
              <Trans
                t={t}
                i18nKey={'footer'}
                components={{
                  block: <span className='inline-block' />,
                  emph: (
                    <strong className='text-slate-600 dark:text-slate-300' />
                  ),
                }}
              />
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
