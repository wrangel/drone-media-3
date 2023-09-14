"use client";

import { Tab } from "@headlessui/react";
import Head from "next/head";
import Link from "next/link";

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

export default function Home() {
  return (
    <div className="flex flex-col h-full bg-[url('/photography-bg.jpg')] bg-cover bg-top">
      <Head>
        <title>Drone Media App</title>
        <meta name="description" content="Created by Matthias Wettstein" />
        <link rel="icon" href="#" />
      </Head>

      <header className="flex justify-between items-center h-[90px] px-6">
        <div>Photography Portfolio</div>
        <Link
          href="#"
          className="rounded-3xl bg-white text-stone-700 px-3 py-2 hover:bg-opacity-90"
        >
          Get in touch
        </Link>
      </header>

      <main className="grow">
        <div className="flex flex-col items-center h-full">
          <Tab.Group>
            <Tab.List className="flex items-center gap-12">
              {tabs.map((tab) => (
                <Tab key={tab.key} className="p-2">
                  {({ selected }: any) => (
                    <span
                      className={selected ? "text-white" : "text-stone-600"}
                    >
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels
              className={
                "h-full bg-stone-900 bg-opacity-80 h-full max-w-[900px] w-full p-2 sm:p-4 my-6"
              }
            >
              <Tab.Panel>All</Tab.Panel>
              <Tab.Panel>Panoramas</Tab.Panel>
              <Tab.Panel>Wide Angle</Tab.Panel>
              <Tab.Panel>HDR</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className="h-[60px] flex justify-center items-center">
        Photography Portfolio
      </footer>
    </div>
  );
}
