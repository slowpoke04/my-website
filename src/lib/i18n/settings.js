import { ELanguages } from "@/types/enums"

export const fallbackLng = ELanguages.EN
export const languages = [fallbackLng, 'fr']
export const defaultNS = 'translation'
export const cookieName = 'i18next'

export function getOptions (lng = fallbackLng, ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}

export function sanitizedLng(lng) {
  if (!Object.values(ELanguages).includes(lng)) {lng = fallbackLng}
  return lng
}