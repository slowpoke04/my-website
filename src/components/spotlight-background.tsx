'use client'

import {useTheme} from 'next-themes'
import {useRef, useState} from 'react'

export function SpotlightBackground({children}: {children: React.ReactNode}) {
  const divRef = useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})
  const [opacity, setOpacity] = useState(0)

  const {resolvedTheme} = useTheme()

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({x: e.clientX - rect.left, y: e.clientY - rect.top})
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(1)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='relative bg-slate-100 dark:bg-slate-900'>
      <div
        className='pointer-events-none absolute -inset-px z-0 opacity-0 transition duration-300'
        style={{
          opacity,
          background:
            resolvedTheme === 'light'
              ? `radial-gradient(600px circle at ${position.x}px ${position.y}px, theme(colors.blue.500) , transparent 60%)`
              : `radial-gradient(600px circle at ${position.x}px ${position.y}px, theme(colors.blue.500), transparent 60%)`,
        }}
      />
      {/* remove relative class below to see spotlight above the content */}
      <div className='relative z-10 text-gray-300'>{children}</div>
    </div>
  )
}
