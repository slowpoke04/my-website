import About from '@/components/about'
import Experiences from '@/components/experiences'
import Header from '@/components/header'
import Links from '@/components/links'
import {ELanguages} from '@/types/enums'
import Image from 'next/image'
import {useRef, useState} from 'react'

export default function Home({params}: {params: {lng: ELanguages}}) {
  const {lng} = params
  return (
    <main className='no-scrollbar flex h-full max-w-[1224px] flex-col items-start gap-12 overflow-y-auto tracking-wide md:flex-row'>
      <Header
        className='p-10 pb-0 sm:p-10 sm:pb-0 md:sticky md:left-0 md:top-0 md:h-full md:w-1/2 md:gap-6 md:p-20 md:pr-0 lg:w-1/2'
        lng={lng}
      />

      <div className='md:-pt-4 no-scrollbar flex grow flex-col items-stretch gap-24 p-10 pt-0 align-middle sm:p-10 sm:pt-0 md:-mt-24 md:h-full md:p-20 md:pl-0'>
        <Links className='pb-4 md:invisible md:h-0 md:p-0' lng={lng} />
        <About lng={lng} />
        <Experiences lng={lng} />
      </div>
    </main>
  )
}
