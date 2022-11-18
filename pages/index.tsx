import { PurityForm } from "@components/purity-form";
import type { NextPage } from "next";
import Image from "next/image";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image
          src="/official-logo.png"
          alt="Loo purity test logo"
          width={1000}
          height={200}
        />
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
