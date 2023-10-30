import Head from 'next/head'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import SectionTitle from '../components/sectionTitle'

import { benefitOne, benefitTwo } from '../components/data'
import Video from '../components/video'
import Benefits from '../components/benefits'
import Footer from '../components/footer'
import Testimonials from '../components/testimonials'
import Cta from '../components/cta'
import Faq from '../components/faq'
import PopupWidget from '../components/popupWidget'

const Home = () => {
    return (
        <>
            <Head>
                <title>PIK-R Sejahtera | ITERA</title>
                <meta name='description' content='Nextly is a free landing page template built with next.js & Tailwind CSS' />
                <link rel='icon' href='/img/pikr.png' />
            </Head>

            <Navbar />
            <Hero />
            <Benefits data={benefitOne} />
            <Benefits imgPos='right' data={benefitTwo} />
            <SectionTitle title='Video Profile PIK-R'>Video ini dibuat untuk memberikan informasi kepada seluruh orang mengenai organisasi PIK-R itu sendiri.</SectionTitle>
            <Video />
            <SectionTitle pretitle='FAQ' title='Frequently Asked Questions' />
            <Faq />
            <Footer />
            <PopupWidget />
        </>
    )
}

export default Home
