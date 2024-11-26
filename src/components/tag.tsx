export default async function Tag({text}: {text: string}) {
  return (
    <div className='rounded-full border border-teal-400 px-2 py-1 text-xs font-light text-teal-600 dark:border-none dark:bg-teal-950 dark:text-teal-400 group-hover:dark:bg-teal-900'>
      {text}
    </div>
  )
}

