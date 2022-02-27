import Head from "next/head";

import styles from '../../styles/George.module.css';

export const getStaticProps = async () => {

const res = await fetch ('https://jsonplaceholder.typicode.com/users');
const data = await res.json();
 return {
   props: { puppy: data }
 }

}

const Puppies = ({ puppy }) => {
  return (
    <>
      <Head>
        <title>Jeremy Cornwall | All Puppies</title>
        <meta name='keywords' content='Jeremy Cornwall' />
      </Head>
      <div>
        <h1>All The Puppies</h1>
        {puppy.map(puppy => (
          <div key={puppy.id}>
            <a className={styles.single}>
              <h3>{ puppy.name } </h3>
              <h5>{ puppy.company.name }</h5>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Puppies;
