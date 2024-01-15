import Head from 'next/head'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Contact from '../../components/contact'
import PopupWidget from '../../components/popupWidget'

const Home = () => {
    return (
        <>
            <Head>
                <title>PIK-R Sejahtera | ITERA</title>
                <meta name='description' content='Nextly is a free landing page template built with next.js & Tailwind CSS' />
                <link rel='icon' href='/img/pikr.png' />
            </Head>

            <Navbar />
            <Contact/>
            <Footer />
            <PopupWidget />
        </>
    )
}

export default Home