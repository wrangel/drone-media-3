"use client";

import { Tab } from "@headlessui/react";
import Head from "next/head";
import Link from "next/link";
import Masonry from "react-masonry-css";
import Image from "next/image";

const tabs = [
  {
    key: "all",
    display: "All",
  },
  {
    key: "panoramas",
    display: "Panoramas",
  },
  {
    key: "wideangle",
    display: "Wide Angle",
  },
  {
    key: "hdr",
    display: "HDR",
  },
];

import ocean1 from "public/ocean-5.jpg";
import ocean2 from "public/ocean-2.jpg";
import ocean3 from "public/ocean-3.jpg";
import ocean4 from "public/ocean-4.jpg";
import ocean5 from "public/ocean-5.jpg";

const images = [];

export default function Home() {
  return (
    <div className="h-full bg-[url('/photography-bg.jpg')] bg-top bg-cover overflow-auto">
      <Head>
        <title>Drone Media App</title>
        <meta name="description" content="Created by Matthias Wettstein" />
        <link rel="icon" href="#" />
      </Head>

      <header className="fixed bg-stone-900 top-0 w-full z-10 flex justify-between items-center h-[90px] px-10">
        <span className="uppercase text-lg font-medium">
          Photography Portfolio
        </span>
        <Link
          href="#"
          className="rounded-3xl bg-white text-stone-700 px-3 py-2 hover:bg-opacity-90"
        >
          Get in touch
        </Link>
      </header>

      <main className="pt-[110px]">
        <div className="flex flex-col items-center h-full">
          <Tab.Group>
            <Tab.List className="flex items-center gap-12">
              {tabs.map((tab) => (
                <Tab key={tab.key} className="p-2">
                  {({ selected }: any) => (
                    <span
                      className={[
                        "uppercase",
                        "text-lg",
                        selected ? "text-white" : "text-stone-600",
                      ]
                        .join()
                        .replaceAll(",", " ")}
                    >
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels
              className={"h-full max-w-[900px] w-full p-2 sm:p-4 my-6"}
            >
              <Tab.Panel>
                <Masonry
                  breakpointCols={2}
                  className="flex gap-5"
                  columnClassName=""
                >
                  <Image src={ocean1} alt="placeholder" className="my-4" />
                  <Image src={ocean2} alt="placeholder" className="my-4" />
                  <Image src={ocean3} alt="placeholder" className="my-4" />
                  <Image src={ocean4} alt="placeholder" className="my-4" />
                  <Image src={ocean5} alt="placeholder" className="my-4" />
                </Masonry>
              </Tab.Panel>
              <Tab.Panel>Panoramas</Tab.Panel>
              <Tab.Panel>Wide Angle</Tab.Panel>
              <Tab.Panel>HDR</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className="h-[90px] flex justify-center items-center uppercase text-lg font-medium">
        Photography Portfolio
      </footer>
    </div>
  );
}
