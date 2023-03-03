import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import CryptoTable from "../components/CryptoTable";
import Link from "next/link";
import { useIsMounted } from "../utils/mounted";
const Home: NextPage = () => {
  const mounted = useIsMounted();
  return (
    <div className=" text-white">
      <Head>
        <title>Crypto dolar hoy</title>
        <meta
          name="description"
          content="Crypto dolar hoy, cotizacion de criptomonedas en dolares"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full min-h-screen flex flex-col justify-center items-center mx-auto  text-white">
        <h1 className="mx-auto mt-16 font-mono font-light ">
          CRYPTO DOLAR HOY
        </h1>
        {mounted ? <CryptoTable /> : null}
        <footer className="w-full border-t-[1px] mt-96  m-auto text-white flex justify-center items-center bottom-0">
          <a
            href="https://twitter.com/tomiioliver"
            className="text-white my-3 flex items-center justify-center text-m hover:text-cyan-600"
          >
            Developed by Tomi204
            <FaTwitter className="ml-3 hover:scale-125" />
          </a>
        </footer>
      </main>
    </div>
  );
};

export default Home;
