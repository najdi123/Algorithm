import Head from 'next/head'
import styles from '../assets/styles/Home.module.css'
import Layout from "../components/Layout";
import TopHeader from "../components/TopHeader";
import Statistics from "../components/Statistics";

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

      </main>

    </Layout>
  )
}
