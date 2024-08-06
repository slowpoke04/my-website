'use client'

import {ActiveSectionContext} from '@/providers/active-section-context'
import {useContext, useEffect, useRef, useState} from 'react'

export default function ActiveSectionSetter({
  section,
  children,
}: {
  section: string
  children: React.ReactNode
}) {
  const {setActiveSection} = useContext(ActiveSectionContext)

  const divRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect()
      const topPos = rect.top / window.innerHeight
      const botPos = rect.bottom / window.innerHeight
      if (topPos < 0.44 && botPos > 0.45) {
        setActiveSection(section)
      }
    }
  }

  useEffect(() => {
    handleScroll() // initial run on mount
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return <div ref={divRef}>{children}</div>
}
