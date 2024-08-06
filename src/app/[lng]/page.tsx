import About from '@/components/about'
import ActiveSectionSetter from '@/components/client/active-section-setter'
import Educations from '@/components/education'
import Experiences from '@/components/experiences'
import Header from '@/components/header'
import Links from '@/components/links'
import {ELanguages} from '@/types/enums'

export default function Main({params}: {params: {lng: ELanguages}}) {
  const {lng} = params
  return (
    <main className='flex w-screen flex-col items-center'>
      <div className='flex w-full max-w-[1224px] flex-col items-start gap-12 tracking-wide md:flex-row'>
        <Header
          className='w-full p-6 pb-0 sm:p-10 sm:pb-0 md:sticky md:top-0 md:h-screen md:w-1/3 md:gap-6 md:p-20 md:pr-0'
          lng={lng}
        />

        <div
          id='content'
          className='flex flex-col gap-16 p-6 pt-0 align-middle sm:p-10 sm:pt-0 md:-mt-16 md:h-full md:w-2/3 md:p-20 md:pl-0'>
          <Links className='pb-4 md:invisible md:h-0 md:p-0' lng={lng} />
          <ActiveSectionSetter section='about'>
            <About lng={lng} />
          </ActiveSectionSetter>
          <ActiveSectionSetter section='experience'>
            <Experiences lng={lng} />
          </ActiveSectionSetter>
          <ActiveSectionSetter section='education'>
            <Educations lng={lng} />
          </ActiveSectionSetter>
          <div className='h-40'></div>
        </div>
      </div>
    </main>
  )
}
