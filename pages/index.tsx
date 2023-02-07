import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import CryptoTable from "../components/CryptoTable";
import Link from "next/link";
import { useIsMounted } from "../utils/mounted";
const Home: NextPage = () => {
  const mounted = useIsMounted();
  return (
    <div className=" bg-gray-800 text-white">
      <Head>
        <title>Crypto dolar hoy</title>
        <meta
          name="description"
          content="Crypto dolar hoy, cotizacion de criptomonedas en dolares"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="w-full h-full flex flex-col justify-center items-center mx-auto bg-gray-800 text-white">
        <h1 className="mx-auto">CRYPTO DOLAR HOY</h1>
        {mounted ? <CryptoTable /> : null}
      </main>

      <footer className="w-full border-t-[3px] h-7	bg-gray-800 text-white flex justify-center items-center bottom-0">
        <Link href="/about">
          <a className="text-white mx-8 text-2xl	">
            <FaTwitter />
          </a>
        </Link>
        <Link href="/about">
          <a className="text-white mx-8 text-2xl">
            <FaInstagram />
          </a>
        </Link>
      </footer>
    </div>
  );
};

export default Home;
