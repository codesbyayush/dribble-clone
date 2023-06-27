import React from 'react'
import FooterColumns from './FooterColumns'
import { footerLinks } from '../constants'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className='bg-slate-50 pt-16 pb-8'>
            <div className='flex flex-col xl:flex-row gap-12 max-xl:gap-0 xl:justify-evenly max-w-7xl mx-auto mb-16'>
                <div className='flex flex-col gap-9 tracking-wider mb-12'>
                    <img src='../favicon.ico' alt='logo'
                        className='h-10 w-10' />
                    <p className='w-min'>
                        <span className='whitespace-nowrap'>World leading community</span> for creatives to share their work and grow together</p>
                    <div>
                        Dribble
                        twi
                        face
                        inst
                        pin
                    </div>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-5  justify-between gap-4 flex-wrap'>
                    <div className='flex flex-col gap-12'>
                        <FooterColumns title={footerLinks[0].title}
                            links={footerLinks[0].links} />
                    </div>
                    <div className='flex flex-col gap-12'>
                        <FooterColumns title={footerLinks[1].title}
                            links={footerLinks[1].links} />
                        <FooterColumns title={footerLinks[2].title}
                            links={footerLinks[2].links} />
                    </div>
                    <div className='flex flex-col gap-12'>
                        <FooterColumns title={footerLinks[3].title}
                            links={footerLinks[3].links} />
                    </div>
                    <div className='flex flex-col gap-12'>
                        <FooterColumns title={footerLinks[4].title}
                            links={footerLinks[4].links} />
                        <FooterColumns title={footerLinks[5].title}
                            links={footerLinks[5].links} />
                    </div>
                    <div className='flex flex-col gap-12'>
                        <FooterColumns title={footerLinks[6].title}
                            links={footerLinks[6].links} />
                    </div>
                </div>
            </div>
            <div className='text-xs tracking-wider  flex items-center flex-col xl:flex-row xl:justify-between max-w-7xl mx-auto gap-2'>
                <p>@ 2023 Dribble.
                    <span>
                        All rights reserved
                    </span>
                </p>
                <p>
                    <span>25,078</span>
                    &nbsp; visitors
                </p>
            </div>
        </footer>
    )
}

export default Footer