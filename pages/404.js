import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <>
      <Head>
        <title>Jeremy Cornwall | 404 </title>
        <meta name='keywords' content='Jeremy Cornwall' />
      </Head>
      <div className='not-found'>
        <h1>Oh Shit</h1>
        <h2>Something went wrong!</h2>
        <p>
          Go Back to{" "}
          <Link href='/'>
            <a> Home Page</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
