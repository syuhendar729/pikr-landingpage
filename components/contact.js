import Image from 'next/image'
import React from 'react'
import Container from './container'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/solid'
import org1 from '../public/img/kontak/ahmad.jpg'
import org2 from '../public/img/kontak/shintya.jpg'


const Contact = () => {
    return (
        <Container className='!p-0'>
            <div className='grid gap-10 lg:grid-cols-2 xl:grid-cols-3'>
                <CardContact pp={org1} name='Idwin Ade Putra' title='Kepala Divisi Konselor Sebaya'/>
                <CardContact pp={org1} name='Robin Syaifuddin' title='Wakil Kepala Divisi Konselor Sebaya'/>
                <CardContact pp={org1} name='Ahmad Saputra' title='Kepala Subdivisi Bedah Isu'/>
                <CardContact pp={org2} name='Anti Hanika' title='Kepala Subdivisi Konseling'/>
                <CardContact pp={org2} name='Tria Yunanni' title='Staff'/>
                <CardContact pp={org1} name='Nofris Bayu Pamungkas' title='Staff'/>
                <CardContact pp={org2} name='S. Tahsya Malau' title='Staff'/>
                <CardContact pp={org2} name='Chintya Mutiara A' title='Staff'/> 
            </div>   
        </Container>
    )
}


const CardContact = (props) => {
    return (
        <div className='lg:col-span-2 xl:col-auto'>
            <div className='flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800'>
                
                <div className='flex items-center mt-4 mb-8 space-x-3'>
                    <div className='flex-shrink-0 overflow-hidden rounded-full w-14 h-14'>
                        <Image src={props.pp} alt='Avatar' width={70} height={70}/>
                    </div>
                    <div>
                        <div className='text-lg font-medium'>{props.name}</div>
                        <div className='text-gray-600 dark:text-gray-400'>{props.title}</div>
                    </div>
                </div>

                <a href='https://wa.me/+6285783415920' target='_blank'
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                > WhatsApp
                </a>
            </div>
        </div>
    )
}



export default Contact
