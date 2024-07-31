import {getTranslation} from '@/lib/i18n'
import {ELanguages} from '@/types/enums'

interface IExperienceKeys {
  company: string
  role: string
  period: string
  tags: string
  description: string
}

const experiences: IExperienceKeys[] = [
  {
    company: 'diving_bear_company',
    role: 'diving_bear_role',
    period: 'diving_bear_period',
    tags: 'diving_bear_tags',
    description: 'diving_bear_description',
  },
  {
    company: 'phd_company',
    role: 'phd_role',
    period: 'phd_period',
    tags: 'phd_tags', //['phd_tag_1', 'phd_tag_2'],
    description: 'phd_description',
  },
]

export default function Experiences({lng}: {lng: ELanguages}) {
  return (
    <section className='flex flex-col gap-12 md:-mt-4'>
      <h2 className='text-sm font-semibold text-slate-900 dark:text-slate-100 md:invisible md:h-0'>
        EXPERIENCE
      </h2>
      <ul className='flex flex-col gap-6'>
        {experiences.map(expKeys => (
          <Experience
            key={expKeys.company}
            lng={lng}
            experienceKeys={expKeys}
          />
        ))}
      </ul>
    </section>
  )
}

async function Experience({
  lng,
  experienceKeys,
}: {
  lng: ELanguages
  experienceKeys: IExperienceKeys
}) {
  const EXPERIENCE_PATH = 'experience'
  const {t} = await getTranslation(lng, undefined, {keyPrefix: EXPERIENCE_PATH})

  const tagsText = t(experienceKeys.tags, {returnObjects: true}) as string[]

  console.log(tagsText)
  return (
    <div className='flex flex-col gap-1 rounded p-2 sm:grid sm:grid-cols-3 md:border md:border-transparent md:hover:border md:hover:border-slate-300 md:hover:bg-slate-100 md:dark:border-transparent md:dark:hover:bg-slate-800'>
      <div className='text-sm font-medium text-slate-600 dark:text-slate-500 sm:col-span-1 sm:mt-[6px]'>
        {t(experienceKeys.period)}
      </div>
      <div className='flex flex-col gap-2 sm:col-span-2'>
        <div>
          <p className='inline-block text-xl font-medium text-slate-600 dark:text-slate-100'>
            {t(experienceKeys.role)}
          </p>{' '}
          ·{' '}
          <h3 className='inline-block text-lg font-semibold text-slate-500 dark:text-slate-400'>
            {t(experienceKeys.company)}
          </h3>
        </div>
        <p className='text-sm font-thin text-slate-400 dark:text-slate-400'>
          {t(experienceKeys.description)}
        </p>
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
    <div className='rounded-full border border-teal-300 px-2 py-1 text-xs font-light text-teal-600 dark:bg-teal-950 dark:text-teal-400'>
      {text}
    </div>
  )
}
