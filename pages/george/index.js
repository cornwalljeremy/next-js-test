import Head from "next/head";
import styles from "../../styles/George.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { puppy: data },
  };
};

const Puppies = ({ puppy }) => {
  return (
    <>
      <Head>
        <title>Jeremy Cornwall | All Puppies</title>
        <meta name='keywords' content='Jeremy Cornwall' />
      </Head>
      <div>
        <h1>All The Puppies</h1>
        {puppy.map((puppy) => (
          <Link href={'/george/' + puppy.id} key={puppy.id}>
            <a className={styles.single}>
              <h3>{puppy.name} </h3>
              <h5>{puppy.company.name}</h5>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Puppies;
