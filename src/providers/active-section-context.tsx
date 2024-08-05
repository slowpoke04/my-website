'use client'
import {Context, createContext, Dispatch, SetStateAction, useState} from 'react'

interface ActiveSectionContextType {
  activeSection: string
  setActiveSection: Dispatch<SetStateAction<string>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType>({
  activeSection: 'about',
  setActiveSection: () => {},
})

export default function ActiveSectionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [activeSection, setActiveSection] = useState('about')
  return (
    <ActiveSectionContext.Provider value={{activeSection, setActiveSection}}>
      {children}
    </ActiveSectionContext.Provider>
  )
}
