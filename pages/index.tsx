import { PurityForm } from "@components/purity-form";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import logo from "../public/official-logo.png";
import transparentGoose from "../public/transparentGoose.png";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Loo Purity Test</title>
        <meta name="description" content="Loo Purity Test" />
        <link rel="icon" href="/goose-icon.png" />
      </Head>

      <main className={styles.main}>
        <Image src={logo} alt="Loo purity test logo" />
        {/* <h1 className={styles.title}>Welcome to the Waterloo Purity Test</h1> */}
        <p className={styles.description}>
          Caution: This is not a bucket list. Completion of all items on this
          test will likely result in death.
        </p>
        <PurityForm />
      </main>
    </div>
  );
};

export default Home;
