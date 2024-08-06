import {getTranslation} from '@/lib/i18n'
import {ELanguages} from '@/types/enums'

interface IEducationKeys {
  id?: number | string
  institution: string
  degree: string
  period: string
  tags: string
  description: string
  description_list: string
  img_width: number
  img_height: number
}

function getEducationKeys(
  prefix: string,
  width: number,
  height: number,
): IEducationKeys {
  return {
    id: prefix,
    institution: `${prefix}_institution`,
    degree: `${prefix}_degree`,
    period: `${prefix}_period`,
    tags: `${prefix}_tags`,
    description: `${prefix}_description`,
    description_list: `${prefix}_description_list`,
    img_width: width,
    img_height: height,
  }
}

const educationNames = ['ipgp', 'ens', 'sorbonne', 'dijon']
const educationWidths = [672, 317, 354, 672]
const educationHeights = [255, 159, 142, 255]
const educations: IEducationKeys[] = educationNames.map((name, id) =>
  getEducationKeys(name, educationWidths[id], educationHeights[id]),
)

const otherCoursesKeys = [
  'python',
  'data_sciences',
  'deep_learning',
  'inverted_pedagogy',
]

export default async function Educations({lng}: {lng: ELanguages}) {
  const {t} = await getTranslation(lng, undefined, {keyPrefix: 'education'})
  return (
    <section id='education' className='flex flex-col gap-12 md:-mt-4'>
      <h2 className='text-sm font-semibold text-slate-900 dark:text-slate-100 md:invisible md:h-0'>
        {t('section_title')}
      </h2>
      <div className='flex flex-col gap-2 p-2'>
        <ul className='flex flex-col gap-4'>
          {educations.map(expKeys => (
            <Education key={expKeys.id} lng={lng} educationKeys={expKeys} />
          ))}
        </ul>
      </div>
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

  const tagsText = t(educationKeys.tags, {returnObjects: true}) as string[]
  const imgPath = `/images/${educationKeys.id}.png`

  return (
    <div className='group flex flex-col items-stretch gap-2 rounded p-2 align-top sm:grid sm:grid-cols-3 md:border md:border-transparent md:hover:z-10 md:hover:border md:hover:border-slate-300 md:hover:bg-slate-100 md:dark:border-transparent md:dark:hover:border md:dark:hover:border-slate-700 md:dark:hover:bg-slate-900'>
      <div className='mt-1 text-sm font-medium text-slate-600 dark:text-slate-500 sm:col-span-1'>
        {t(educationKeys.period)}
      </div>
      {/* <div className='flex flex-col gap-4 sm:col-span-2'> */}
      <div className='sm:col-span-2'>
        <h2 className='text-md inline-block font-medium text-slate-600 dark:text-slate-300'>
          {t(educationKeys.degree)}
        </h2>{' '}
        <span className='text-md inline-block text-slate-600 dark:text-slate-400'>
          ·
        </span>{' '}
        <h3 className='inline-block text-sm font-light text-slate-400 dark:text-slate-400'>
          {t(educationKeys.institution)}
        </h3>
      </div>
      {/* <div className='flex flex-wrap gap-2'>
          {tagsText.map(tag => (
            <Tag key={tag} text={tag} />
          ))}
        </div> */}
      {/* </div> */}
    </div>
  )
}
