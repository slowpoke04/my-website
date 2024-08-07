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
      <div className='flex w-full max-w-[1224px] flex-col items-start gap-12 tracking-wide lg:flex-row'>
        <Header
          className='w-full p-6 pb-0 md:p-10 md:pb-0 lg:sticky lg:top-0 lg:h-screen lg:w-2/5 lg:gap-6 lg:p-20 lg:pr-0'
          lng={lng}
        />

        <div
          id='content'
          className='flex flex-col gap-16 p-6 pt-0 align-middle md:p-10 md:pt-0 lg:-mt-16 lg:h-full lg:w-3/5 lg:p-20 lg:pl-0'>
          <Links className='pb-4 lg:invisible lg:h-0 lg:p-0' lng={lng} />
          <ActiveSectionSetter section='about'>
            <About lng={lng} />
          </ActiveSectionSetter>
          <ActiveSectionSetter section='experience'>
            <Experiences lng={lng} />
          </ActiveSectionSetter>
          <ActiveSectionSetter section='education'>
            <Educations lng={lng} />
          </ActiveSectionSetter>
          <div className='h-0 lg:h-52'></div>
        </div>
      </div>
    </main>
  )
}
