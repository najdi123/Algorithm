import Head from 'next/head'
import styles from '../assets/styles/Home.module.css'
import Layout from "../components/Layout";
import TopHeader from "../components/TopHeader";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Algorithm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <TopHeader />

      </main>

    </Layout>
  )
}
