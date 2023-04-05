import Head from "next/head";
import Image from "next/image";
import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Humankind</title>
      </Head>
      <main>
        <div className="flex justify-center items-center flex-col">
          <Navbar />
          <Footer />
        </div>
      </main>
    </>
  );
}
