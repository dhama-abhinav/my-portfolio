
import Head from 'next/head'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
//import Image from 'next/image'

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <About />
    </div>
  )
}

export default Home
