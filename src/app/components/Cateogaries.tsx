import Link from 'next/link'
import { categoryFilters } from '../constants/index'



const Cateogaries = () => {
  return (
    <div className='flex gap-4 overflow-x-scroll w-full items-stretch my-8'>
        {categoryFilters.map(cat => {
            return <Link href='/'>
                    <button className='px-8 py-4 bg-slate-100 whitespace-nowrap'>
                        {cat}
                    </button>
            </Link>
        })}

    </div>
  )
}

export default Cateogaries