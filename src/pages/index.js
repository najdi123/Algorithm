import Head from 'next/head'
import styles from '../assets/styles/Home.module.css'
import Layout from "../components/Layout";
import TopHeader from "../components/TopHeader";
import Statistics from "../components/Statistics";
import MutualFunds from "../components/MutualFunds";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import Section7 from "../components/Section7";
import Section8 from "../components/Section8";
import Section9 from "../components/Section9";
import Section10 from "../components/Section10";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Algorithm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <TopHeader />
          <img className={styles.conatctPhone} src="/images/contact-phone.svg" alt=""/>
        <Statistics />
        <MutualFunds />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        {/*<Section8 />*/}
        <Section9 />
        <Section10 />
        <Footer />

      </main>

    </Layout>
  )
}
