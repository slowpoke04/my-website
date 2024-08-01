'use client'

import {cn} from '@/lib/utils'
import {Moon, Sun, SunMoon} from 'lucide-react'
import {useTheme} from 'next-themes'
import {useEffect, useState} from 'react'

const ThemeChanger = ({className}: {className?: string}) => {
  const [mounted, setMounted] = useState(false)
  const {setTheme, resolvedTheme} = useTheme()

  const size = 25

  useEffect(() => setMounted(true), [])

  let icon
  if (!mounted) {
    icon = <SunMoon size={size} />
  } else {
    icon =
      resolvedTheme === 'dark' ? (
        <Moon size={size} onClick={() => setTheme('light')} />
      ) : (
        <Sun size={size} onClick={() => setTheme('dark')} />
      )
  }

  return <div className={cn('flex', className)}>{icon}</div>
}

export default ThemeChanger
