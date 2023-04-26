import Banner from '@/components/Banner'
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import LargeCard from '@/components/LargeCard';
import MediumCard from '@/components/MediumCard';
import SmallCard from '@/components/SmallCard';
import Head from 'next/head'

export default function Home({ exploreData, cardsData }) {
  return (
    <div className=''>
      <Head>
        <title>Clonebnb</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* header */}
      <Header />
      {/* banner */}
      <Banner />

      {/* marge sur les bords */}
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {/* Pulls some data from server static render */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData.map((item) => (
              <SmallCard key={item.img} img={item.img} location={item.location} distance={item.distance} />
            ))}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-x-scroll overflow-y-hidden scrollbar-hide p-3 -ml-3'>
            {cardsData.map((item) => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Explore Nearby</h2>
          <LargeCard img='https://links.papareact.com/4cj' title='The Greatest Outdoors' description='Wishlists curated by Airbnb' buttonText='Get Inspired'/>
        </section>
      </main>

      <Footer/>
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G')
    .then((res) => res.json());

  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT')
    .then((res) => res.json());

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}