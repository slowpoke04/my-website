// import 'client-only'

import i18next from 'i18next'
import {useEffect, useState} from 'react'
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
// import LocizeBackend from 'i18next-locize-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import {getOptions, languages, cookieName, sanitizedLng} from './settings'
import {useParams} from 'next/navigation'
import {ELanguages} from '@/types/enums'
import {getCookie, setCookie} from 'cookies-next'

const runsOnServerSide = typeof window === 'undefined'

// on client side the normal singleton is ok
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`),
    ),
  )
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: runsOnServerSide ? languages : [],
  })

export function useTranslation(lng: string, ns?: string, options?: any) {
  lng = sanitizedLng(lng)

  const cookiesValue = getCookie(cookieName)
  const ret = useTranslationOrg(ns, options)
  const {i18n} = ret
  const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage)
  useEffect(() => {
    if (activeLng === i18n.resolvedLanguage) return
    setActiveLng(i18n.resolvedLanguage)
  }, [activeLng, i18n.resolvedLanguage])
  useEffect(() => {
    if (!lng || i18n.resolvedLanguage === lng) return
    i18n.changeLanguage(lng)
  }, [lng, i18n])
  useEffect(() => {
    if (cookiesValue === lng) return
    setCookie(cookieName, lng)
  }, [lng, cookiesValue])
  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng)
  }

  return ret
}

export function useTranslationAuto(ns?: string, options?: any) {
  const lng = useParams().lng as ELanguages
  return useTranslation(lng, ns, options)
}
