import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Container from './container'

export default function Footer() {
    const navigation = ['Beranda', 'Tentang', 'Kontak', 'Berita', 'Blog']
    const legal = ['Terms', 'Privacy', 'Legal']
    return (
        <div className='relative'>
            <Container>
                <div className='grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5'>
                    <div className='lg:col-span-2'>
                        <div>
                            {' '}
                            <Link href='/' className='flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100'>
                                <Image src='/img/pikr.png' alt='N' width='32' height='32' className='w-8' />
                                <span>PIK-R</span>
                            </Link>
                        </div>

                        <div className='max-w-md mt-4 text-gray-500 dark:text-gray-400'>
                            Pusat Informasi dan Konseling Remaja
                            <br />
                            Institut Teknologi Sumatera
                        </div>
                    </div>

                    <div>
                        <div className='flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0'>
                            {navigation.map((item, index) => (
                                <Link
                                    key={index}
                                    href='/'
                                    className='w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700'>
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0'>
                            {legal.map((item, index) => (
                                <Link
                                    key={index}
                                    href='/'
                                    className='w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700'>
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className=''>
                        <div>Follow us</div>
                        <div className='flex mt-5 space-x-5 text-gray-400 dark:text-gray-500'>
                            <a href='https://tiktok.com/@sejahtera.itera' target='_blank' rel='noopener'>
                                <span className='sr-only'>Twitter</span>
                                <Tiktok />
                            </a>
                            <a href='https://instagram.com/sejahtera.itera' target='_blank' rel='noopener'>
                                <span className='sr-only'>Instagram</span>
                                <Instagram />
                            </a>
                            <a href='https://instagram.com/web3templates' target='_blank' rel='noopener'>
                                <span className='sr-only'>Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='my-10 text-sm text-center text-gray-600 dark:text-gray-400'>
                    Copyright © {new Date().getFullYear()}. Made with ♥ by{' '}
                    <a href='https://web3templates.com/' target='_blank' rel='noopener'>
                        Web3Templates.
                    </a>{' '}
                    Illustrations from{' '}
                    <a href='https://www.glazestock.com/' target='_blank' rel='noopener '>
                        Glazestock
                    </a>
                    . Modified by Syuhendar
                </div>
            </Container>
            {/* Do not remove this */}
        </div>
    )
}

const Tiktok = ({ size = 24 }) => (
	<svg 
		xmlns="http://www.w3.org/2000/svg" 
		width={size} 
		height={size} 
		fill="currentColor" 
		className="bi bi-tiktok" viewBox="0 0 16 16">
	  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
	</svg>
)

const Twitter = ({ size = 24 }) => (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24' fill='currentColor'>
        <path d='M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z' />
    </svg>
)

const Instagram = ({ size = 24 }) => (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24' fill='currentColor'>
        <path d='M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z' />
    </svg>
)


