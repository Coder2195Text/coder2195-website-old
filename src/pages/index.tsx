import Head from "next/head";
import Title from "../components/global/title/Title";
import Link from "../components/global/link/Link";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Coder2195 - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title>Coder2195's Website</Title>
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="https://scam.com">Scam</Link>
    </div>
  );
};

export default Home;