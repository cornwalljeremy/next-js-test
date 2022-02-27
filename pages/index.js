import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
    <Head>
      <title>Jeremy Cornwall | Home</title>
      <meta name="keywords" content="Jeremy Cornwall" />

    </Head>
    <div>
     
      <div>
        <h1 className={styles.title}>Hello Tortuga</h1>
        <Link href='george'>
          <a className={styles.btn}>See George</a>
        </Link>
      </div>
      
    </div>
    </>
  );
}
