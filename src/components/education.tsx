import {getTranslation} from '@/lib/i18n'
import {ELanguages} from '@/types/enums'
import {Trans} from 'react-i18next/TransWithoutContext'

interface IEducationKeys {
  id?: number | string
  institution: string
  degree: string
  period: string
  tags: string
  description: string
  description_list: string
}

function getEducationKeys(prefix: string): IEducationKeys {
  return {
    id: prefix,
    institution: `${prefix}_institution`,
    degree: `${prefix}_degree`,
    period: `${prefix}_period`,
    tags: `${prefix}_tags`,
    description: `${prefix}_description`,
    description_list: `${prefix}_description_list`,
  }
}

const educations: IEducationKeys[] = [
  getEducationKeys('ens'),
  getEducationKeys('ipgp'),
  // getEducationKeys('sorbonne'),
  // getEducationKeys('dijon'),
]

export default async function Educations({lng}: {lng: ELanguages}) {
  const {t} = await getTranslation(lng, undefined, {keyPrefix: 'education'})
  return (
    <section className='flex flex-col gap-12 md:-mt-4'>
      <h2 className='text-sm font-semibold text-slate-900 dark:text-slate-100 md:invisible md:h-0'>
        {t('section_title')}
      </h2>
      <ul className='flex flex-col gap-6'>
        {educations.map(expKeys => (
          <Education key={expKeys.id} lng={lng} educationKeys={expKeys} />
        ))}
      </ul>
    </section>
  )
}

async function Education({
  lng,
  educationKeys,
}: {
  lng: ELanguages
  educationKeys: IEducationKeys
}) {
  const {t} = await getTranslation(lng, undefined, {keyPrefix: 'education'})

  const descriptionListElements = t(educationKeys.description_list, {
    returnObjects: true,
  }) as string[]

  console.log('descriptionListElements', descriptionListElements)
  const tagsText = t(educationKeys.tags, {returnObjects: true}) as string[]

  const emphTextColor = 'font-semibold text-teal-700 dark:text-slate-100'

  return (
    <div className='group flex flex-col gap-1 rounded p-2 sm:grid sm:grid-cols-3 md:border md:border-transparent md:hover:z-50 md:hover:border md:hover:border-slate-300 md:hover:bg-slate-100 md:dark:border-transparent md:dark:hover:bg-slate-800'>
      <div className='text-sm font-medium text-slate-600 dark:text-slate-500 sm:col-span-1 sm:mt-[6px]'>
        {t(educationKeys.period)}
      </div>
      <div className='flex flex-col gap-4 sm:col-span-2'>
        <div>
          <h2 className='inline-block text-xl font-medium text-slate-600 dark:text-slate-100'>
            {t(educationKeys.degree)}
          </h2>{' '}
          <span className='inline-block text-slate-500 dark:text-slate-400'>
            ·
          </span>{' '}
          <h3 className='inline-block text-lg font-semibold text-slate-500 dark:text-slate-400'>
            {t(educationKeys.institution)}
          </h3>
        </div>
        <p className='text-sm font-extralight text-slate-500 dark:text-slate-400'>
          <Trans
            t={t}
            i18nKey={educationKeys.description}
            components={{
              emph: <strong className={emphTextColor} />,
            }}
          />
          {/* {t(educationKeys.description)} */}
        </p>
        <ul className='flex flex-col gap-y-2'>
          {descriptionListElements.map((description, idx) => (
            <li
              key={idx}
              className='text-xs font-light text-slate-500 dark:text-slate-500'>
              - {description}
            </li>
          ))}
        </ul>
        <div className='flex flex-wrap gap-2'>
          {tagsText.map(tag => (
            <Tag key={tag} text={tag} />
          ))}
        </div>
      </div>
    </div>
  )
}

async function Tag({text}: {text: string}) {
  return (
    <div className='rounded-full border-none border-teal-300 px-2 py-1 text-xs font-light text-teal-600 dark:bg-teal-950 dark:text-teal-400 group-hover:dark:bg-teal-900'>
      {text}
    </div>
  )
}
