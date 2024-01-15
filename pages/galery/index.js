import Head from 'next/head'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import PopupWidget from '../../components/popupWidget'
import Container from '../../components/container'
import Image from 'next/image'


const Home = () => {
    return (
        <>
            <Head>
                <title>PIK-R Sejahtera | ITERA</title>
                <meta name='description' content='Nextly is a free landing page template built with next.js & Tailwind CSS' />
                <link rel='icon' href='/img/pikr.png' />
            </Head>

            <Navbar />
    
            <Container>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/img/galery/sikrab.jpg" alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/img/galery/sap1.jpg" alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/img/galery/ppks1.jpg" alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/img/galery/cmpg-mh1.jpg" alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/img/galery/cmpg-mh2.jpg" alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/img/galery/tahun-sepuh.jpg" alt=""/>
                </div>
            </div>
            </Container>

            <Footer />
            <PopupWidget />
        </>
    )
}

export default Home
