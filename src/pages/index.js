import Head from "next/head";
import Image from "next/image";
import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar/navbar";
import Page1 from "../../components/landingPages/page1";

export default function Home() {
  return (
    <>
      <Head>
        <title>Humankind</title>
      </Head>
      <main>
        <div className="flex justify-center items-center flex-col">
          <Navbar />
          <div className="mt-32">
            <Page1 />
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
