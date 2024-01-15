import Image from 'next/image'
import React from 'react'
import Container from './container'

import userOneImg from '../public/img/testimoni/ahmad_saputra.jpg'
import userTwoImg from '../public/img/testimoni/amei.jpg'
import userThreeImg from '../public/img/testimoni/yuni.jpg'

const Testimonials = () => {
    return (
        <Container>
            <div className='grid gap-10 lg:grid-cols-2 xl:grid-cols-3'>
                <div className='lg:col-span-2 xl:col-auto'>
                    <div className='flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800'>
                        <p className='text-2xl leading-normal '>
                        Menurut saya asik seru cuma nama nya organisasi harus bersatu jangan sampe ada namanya circle saling rangkul untuk mencapai tujuan bersama.
                        </p>

                        <Avatar image={userOneImg} name='Ahmad Saputra' title='Staff Konselor Sebaya' />
                    </div>
                </div>
                <div className=''>
                    <div className='flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800'>
                        <p className='text-2xl leading-normal '>
                        Selain mendapatkan informasi dan konseling, kamu juga bisa bertemu dengan teman-teman sebaya yang memiliki minat yang sama denganmu dan memperluas jaringan pertemananmu.
                        </p>

                        <Avatar image={userTwoImg} name='Muhammad Amei Nuril Farouk' title='Staff PSDM' />
                    </div>
                </div>
                <div className=''>
                    <div className='flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800'>
                        <p className='text-2xl leading-normal '>
                        Menjadi proses dalam menemukan dan mengendalikan diri, disini saya belajar banyak hal yang menjadi bekal untuk melewati rintangan-rintangan baru yang akan dihadapi.
                        </p>

                        <Avatar image={userThreeImg} name='Yuni Wastiani ' title='Staff Data dan Informasi' />
                    </div>
                </div>
            </div>
        </Container>
    )
}

function Avatar(props) {
    return (
        <div className='flex items-center mt-8 space-x-3'>
            <div className='flex-shrink-0 overflow-hidden rounded-full w-14 h-14'>
                <Image src={props.image} alt='Avatar' placeholder='blur' />
            </div>
            <div>
                <div className='text-lg font-medium'>{props.name}</div>
                <div className='text-gray-600 dark:text-gray-400'>{props.title}</div>
            </div>
        </div>
    )
}

function Mark(props) {
    return (
        <>
            {' '}
            <mark className='text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200'>{props.children}</mark>{' '}
        </>
    )
}

export default Testimonials
