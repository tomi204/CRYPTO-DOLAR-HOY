import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const CryptoTable = () => {
  const [lemon, setLemon] = useState([]);
  const [satoshi, setSatoshi] = useState([]);
  const [belo, setBelo] = useState([]);
  const [bitso, setBitso] = useState([]);
  const [ripio, setRipio] = useState([]);
  const [buenBit, setBuenBit] = useState([]);
  const [dolarBlue, setDolarBlue] = useState([]);
  const [requestCounter, setRequestCounter] = useState(0);
  async function getData() {
    /// ask precio de compra, bid precio de venta
    /////////////////dolar blue
    const limit = 2; // Número máximo de peticiones permitidas
    if (requestCounter <= limit) {
      setRequestCounter(requestCounter + 1);
      const dolarBlue = await fetch("https://criptoya.com/api/dolar")
        .then((response) => response.json())
        .then((data) => data)
        .catch((rejected) => {
          console.log(rejected);
        });
      setDolarBlue(dolarBlue);
    } else {
      console.log("");
    }
    //////////////// lemoncash
    const LemonUSDT = await fetch("https://criptoya.com/api/lemoncash/usdt")
      .then((response) => response.json())
      .then((data) => data);

    setLemon(LemonUSDT);

    ///////////////////////// satoshitango
    const satoshiUSDT = await fetch(
      "https://criptoya.com/api/satoshitango/usdt/ars"
    )
      .then((response) => response.json())
      .then((data) => data);
    setSatoshi(satoshiUSDT);

    //////////////// belo
    const beloUSDT = await fetch("https://criptoya.com/api/belo/usdt/ars")
      .then((response) => response.json())
      .then((data) => data);
    setBelo(beloUSDT);

    //////////////// bitso
    const bitsoUSDT = await fetch(" https://criptoya.com/api/bitso/usdt/ars")
      .then((response) => response.json())
      .then((data) => data);
    setBitso(bitsoUSDT);

    //////////////////binance
    // const binanceUSDT = await fetch(
    //   "https://criptoya.com/api/binancep2p/buysell/usdt/ars/5"
    // )
    //   .then((response) => response.json())
    //   .then((data) => data);
    // setBinance(binanceUSDT);
    //todo: arreglar binance

    //////// Ripio
    const ripioUSDT = await fetch("https://criptoya.com/api/ripio/usdc/ars")
      .then((response) => response.json())
      .then((data) => data);
    setRipio(ripioUSDT);

    ///////////////////////////// buenBit
    const buenBitUSDT = await fetch("https://criptoya.com/api/ripio/usdc/ars")
      .then((response) => response.json())
      .then((data) => data);
    setBuenBit(buenBitUSDT);
  }

  useEffect(() => {
    getData();
  }, []);
  // const all = [lemon, satoshi, belo, bitso, ripio, buenBit];
  // let maxAsk = 0;

  // for (let i = 0; i < all.length; i++) {
  //   let askActual = all[i]["bid"];

  //   if (askActual > maxAsk) {
  //     maxAsk = askActual;
  //   }
  // }

  // // Imprimimos el ask máximo encontrado
  // console.log("El ask máximo es: " + maxAsk);

  ///TODO: HACER LA UI PARA EL EXCHANGE CON EL PRECIO MAS ALTO

  return (
    <table className="table w-6/12 flex items-center justify-center bg-black/20  backdrop-blur-3xl text-white mt-14	">
      <thead className="table-header-group mt-5 ">
        <th className="px-4 py-2">Compra</th>
        <th className="px-4 py-2">Venta</th>
        <th className="px-4 py-2">Exchange</th>
      </thead>
      <tbody className="table-row-group flex justify-center items-center">
        <tr className="table-row">
          <td className="border px-4 py-2">{dolarBlue.blue_bid}</td>
          <td className="border px-4 py-2">{dolarBlue.blue}</td>
          <td className="border px-4 py-2">Dolar Blue</td>
        </tr>
        <tr className="table-row">
          <td className="border px-4 py-2"> {dolarBlue.mep?.toFixed(1)}</td>
          <td className="border px-4 py-2"> {dolarBlue.mep?.toFixed(1)}</td>
          <td className="border px-4 py-2">Dolar MEP</td>
        </tr>
        <tr className="table-row">
          <td className="border px-4 py-2"> {lemon.ask?.toFixed(1)}</td>
          <td className="border px-4 py-2"> {lemon.bid?.toFixed(1)}</td>
          <td className="border px-4 py-2">Lemoncash</td>
        </tr>
        <tr className="table-row">
          <td className="border px-4 py-2">{satoshi.ask?.toFixed(1)}</td>
          <td className="border px-4 py-2">{satoshi.bid?.toFixed(1)}</td>
          <td className="border px-4 py-2">Satoshi Tango</td>
        </tr>
        <tr className="table-row">
          <td className="border px-4 py-2">{belo.ask?.toFixed(1)}</td>
          <td className="border px-4 py-2">{belo.bid?.toFixed(1)}</td>
          <td className="border px-4 py-2">Belo</td>
        </tr>
        <tr className="table-row">
          <td className="border px-4 py-2">{bitso.ask?.toFixed(1)}</td>
          <td className="border px-4 py-2">{bitso.bid?.toFixed(1)}</td>
          <td className="border px-4 py-2">Bitso</td>
        </tr>
        <tr className="table-row">
          <td className="border px-4 py-2">{ripio.ask?.toFixed(1)}</td>
          <td className="border px-4 py-2">{ripio.bid?.toFixed(1)}</td>
          <td className="border px-4 py-2">Ripio</td>
        </tr>
        <tr className="table-row">
          <td className="border px-4 py-2">{buenBit.ask?.toFixed(1)}</td>
          <td className="border px-4 py-2">{buenBit.bid?.toFixed(1)}</td>
          <td className="border px-4 py-2">BuenBit</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CryptoTable;
