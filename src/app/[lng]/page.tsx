import Experiences from '@/components/experiences'
import Header from '@/components/header'
import Links from '@/components/links'
import {ELanguages} from '@/types/enums'
import Image from 'next/image'
import {useRef, useState} from 'react'

export default function Home({params}: {params: {lng: ELanguages}}) {
  const {lng} = params
  return (
    <main className='flex h-full w-full flex-col items-start gap-12 overflow-y-auto tracking-wide md:flex-row'>
      <Header
        className='flex flex-col justify-between p-10 pb-0 sm:p-10 sm:pb-0 md:sticky md:left-0 md:top-0 md:h-full md:w-2/5 md:gap-6 md:p-20 md:pr-0 lg:w-1/2'
        lng={lng}
      />

      <div className='md:-pt-4 flex grow flex-col items-stretch gap-24 p-10 pt-0 align-middle sm:p-10 sm:pt-0 md:-mt-24 md:h-full md:p-20 md:pl-0'>
        <Links className='pb-4 md:invisible md:h-0 md:p-0' lng={lng} />
        <About />
        <Experiences lng={lng} />
      </div>
    </main>
  )
}

function About() {
  const baseTextColor = 'text-slate-900 dark:text-slate-100'
  const emphTextColor = 'font-semibold text-teal-700 dark:text-slate-100'
  return (
    <section className='flex flex-col gap-4 md:-mt-4'>
      <h2 className='text-sm font-semibold text-slate-900 dark:text-slate-100 md:invisible md:h-0'>
        ABOUT ME
      </h2>
      <p className='text-[16px] font-extralight text-slate-500 dark:text-slate-400'>
        Back in 2012, I decided to try my hand at creating custom Tumblr themes
        and tumbled head first into the rabbit hole of coding and web
        development. Fast-forward to today, and I’ve had the privilege of
        building software for an{' '}
        <span className={emphTextColor}>advertising agency</span>, a{' '}
        <span className={emphTextColor}>start-up</span>, a{' '}
        <span className={emphTextColor}>huge corporation</span>, and a
        <span className={emphTextColor}> digital product studio</span>.
      </p>
      <p className='text-[16px] font-extralight text-slate-500 dark:text-slate-400'>
        My main focus these days is building accessible user interfaces for our
        customers at Klaviyo. I most enjoy building software in the sweet spot
        where design and engineering meet — things that look good but are also
        built well under the hood. In my free time, I{"'"}ve also released an
        online video course that covers everything you need to know to build a
        web app with the Spotify API.
      </p>
      <p className='text-[16px] font-extralight text-slate-500 dark:text-slate-400'>
        When I’m not at the computer, I’m usually rock climbing, reading,
        hanging out with my wife and two cats, or running around Hyrule
        searching for Korok seeds.
      </p>
    </section>
  )
}
