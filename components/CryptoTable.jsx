import React, { useState } from "react";
const CryptoTable = () => {
  const [lemon, setLemon] = useState([]);
  const [satoshi, setSatoshi] = useState([]);
  const [belo, setBelo] = useState([]);
  async function getData() {
    /// ask precio de compra, bid precio de venta

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
  }
  getData();
  return (
    <table className="table-auto w-full text-left">
      <thead className="bg-gray-800">
        <tr className="text-white">
          <th className="px-4 py-2">Crypto</th>
          <th className="px-4 py-2">Price</th>
          <th className="px-4 py-2">Market Cap</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-gray-100">
          <td className="border px-4 py-2">venta lemon {lemon.bid}</td>
          <td className="border px-4 py-2">compra lemon {lemon.ask}</td>
          <td className="border px-4 py-2">compra satohshi{satoshi.ask}</td>
          <td className="border px-4 py-2">venta satoshi{satoshi.bid}</td>
          <td className="border px-4 py-2">compra belo{belo.ask}</td>
          <td className="border px-4 py-2">venta belo{belo.bid}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CryptoTable;
