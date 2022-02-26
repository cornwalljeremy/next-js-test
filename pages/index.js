import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
     
      <div>
        <h1>Hello Tortuga</h1>
        <Link href='george'>
          <a>See George</a>
        </Link>
      </div>
      
    </div>
  );
}
