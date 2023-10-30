import { FaceSmileIcon, ChartBarSquareIcon, CursorArrowRaysIcon, DevicePhoneMobileIcon, SunIcon, GlobeAltIcon, HandRaisedIcon } from '@heroicons/react/24/solid'

import benefitOneImg from '../public/img/konseling.png'
import benefitTwoImg from '../public/img/benefit-two.png'

const benefitOne = {
    title: 'Tentang Kami',
    desc: `PIK-R adalah singkatan dari Pusat Informasi dan Konseling Remaja. Organisasi ini adalah organisasi yang berada di bawah naungan Kemahasiswaan Institut Teknologi Sumatera. Didirikan pada tahun 2020 dan sudah berumur 3 tahun sampai 2023 ini.`,
    image: benefitOneImg,
    bullets: [],
}

const benefitTwo = {
    title: 'Tujuan',
    desc: 'Memiliki beberapa tujuan diantaranya:',
    image: benefitTwoImg,
    bullets: [
        {
            title: 'Pelayanan Informasi',
            desc: 'Memberikan pelayanan informasi dan konseling bagi mahasiswa ITERA.',
            icon: <DevicePhoneMobileIcon />,
        },
        {
            title: 'Penanganan Kasus',
            desc: 'Menjadi garda terdepan dalam penanganan kasus kesehatan mental di lingkungan ITERA.',
            icon: <HandRaisedIcon />,
        },
        {
            title: 'Lingkungan Baik',
            desc: 'Menciptakan lingkungan yang ramah dan nyaman bagi mahasiswa ITERA untuk bercerita.',
            icon: <GlobeAltIcon />,
        },
    ],
}

;<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
    <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z'
    />
</svg>

export { benefitOne, benefitTwo }
