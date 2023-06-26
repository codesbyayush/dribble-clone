import Link from 'next/link'
import React from 'react'

type Props = {
    title:string,
    links:string[]
}

const FooterColumns = ({title , links}: Props) => {
  return (
    <div className='flex flex-col gap-8'>
        <h3 className='font-semibold text-sm lg:text-base tracking-wider'>{title}</h3>
        <div className='flex flex-col text-xs lg:text-sm tracking-wider gap-4'>
        {links.map(link => (
            <Link href='/' >{link}</Link>
        ))}
        </div>
    </div>
  )
}

export default FooterColumns