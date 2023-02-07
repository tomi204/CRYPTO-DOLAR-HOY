import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";

import CryptoTable from "../components/CryptoTable";
const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Crypto dolar hoy</title>
        <meta
          name="description"
          content="Crypto dolar hoy, cotizacion de criptomonedas en dolares"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="w-full flex flex-col justify-center mx-auto">
        <h1 className="mx-auto">
          <a href="https://rainbow.me">CRYPTO DOLAR HOY</a>
        </h1>

        <CryptoTable />
      </main>

      <footer className=""></footer>
    </div>
  );
};

export default Home;
