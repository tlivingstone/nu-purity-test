import { Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Waterloo Purity Test</title>
        <meta name="description" content="Waterloo Purity Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Waterloo Purity Test
        </h1>

        <p className={styles.description}>
          Caution: This is not a bucket list. Completion of all items on this test will likely result in death.
        </p>
        <Text>
          Click on every item you have done. MPS stands for Member of the Preferred Sex.
        </Text>
        <Text>
          Inspired by the one and only <a href="http://ricepuritytest.com/" target="_blank" rel="noreferrer">Rice Purity Test</a>
        </Text>
      </main>
    </div>
  )
}

export default Home
