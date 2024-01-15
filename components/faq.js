import React from 'react'
import Container from './container'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/solid'

const Faq = () => {
    return (
        <Container className='!p-0'>
            <div className='w-full max-w-2xl p-2 mx-auto rounded-2xl'>
                {faqdata.map((item, index) => (
                    <div key={item.question} className='mb-5'>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className='flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200'>
                                        <span>{item.question}</span>
                                        <ChevronUpIcon className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-indigo-500`} />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className='px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300'>{item.answer}</Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                ))}
            </div>
        </Container>
    )
}

const faqdata = [
    {
        question: 'Kegiatan apa saja yang dilakukan oleh anggota PIK-R?',
        answer: 'Kegiatan yang kita lakukan adalah campaign, workshop, program kolaborasi, pelatihan yang berkaitan tentang kesehatan mental, Penyiapan Kehidupan Berkeluarga bagi Remaja (PKBR), pengembangan lifeskill, program Generasi Berencana, serta kegiatan lainnya.',
    },
    {
        question: 'Siapa yang dapat bergabung ke PIK-R Sejahtera?',
        answer: 'Yang dapat bergabung adalah mahasiswa aktif Institut Teknologi Sumatera tahun pertama atau tahun ke-2.',
    },
    {
        question: 'Apakah untuk menjadi bagian PIK-R Sejahtera ada tahap kaderisasi?',
        answer: 'Untuk menjadi bagian dari PIK-R Sejahtera, tidak mengikuti kegiatan kaderisasi, melainkan kegiatan Open Recruitment yang dilaksanakan biasanya pada awal semester genap perkuliahan.',
    },
    {
        question: 'Apa manfaatnya kita join ke PIK-R Sejahtera?',
        answer: 'Anggota PIKR dapat meraih sejumlah manfaat positif setelah bergabung dengan organisasi, termasuk akses terhadap informasi relevan mengenai masalah remaja, dukungan emosional melalui jaringan anggota dan konselor, konseling dan bimbingan pribadi, pengembangan keterampilan komunikasi dan kepemimpinan, partisipasi dalam proyek sosial, pembangunan pertemanan dan jaringan, peningkatan kesadaran diri, serta pengalaman berorganisasi dan bekerja dalam tim. Selain itu, PIK-R juga menyediakan akses ke sumber daya pendidikan tambahan dan kesempatan untuk terlibat dalam kegiatan-kegiatan yang dapat membantu anggota mempersiapkan diri untuk masa depan. Melalui keterlibatan ini, anggota dapat meningkatkan kesejahteraan psikologis dan meraih kepuasan hidup secara keseluruhan.',
    },
]

export default Faq
