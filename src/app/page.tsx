"use client";

import { Tab } from "@headlessui/react";
import Head from "next/head";
import Link from "next/link";
import Masonry from "react-masonry-css";
import Image from "next/image";
import { LightGallery } from "lightgallery/lightgallery";
import LightGalleryComponent from "lightgallery/react";
import { useRef } from "react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

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

import bgImage from "public/photography-bg.jpg";
import ocean1 from "public/ocean-5.jpg";
import ocean2 from "public/ocean-2.jpg";
import ocean3 from "public/ocean-3.jpg";
import ocean4 from "public/ocean-4.jpg";
import ocean5 from "public/ocean-5.jpg";

const images = [ocean1, ocean2, ocean3, ocean4, ocean5];

export default function Home() {
  const lightboxRef = useRef<LightGallery | null>(null);

  return (
    <div className="h-full overflow-auto">
      <Head>
        <title>Drone Media App</title>
        <meta name="description" content="Created by Matthias Wettstein" />
        <link rel="icon" href="#" />
      </Head>

      <Image
        className="fixed left-0 top-0 z-0"
        src={bgImage}
        alt="background-image"
        placeholder="blur"
      />

      <div className="fixed left-0 top-0 w-full h-full z-10 from-stone-900 bg-gradient-to-t"></div>

      <header className="fixed top-0 w-full z-30 flex justify-between items-center h-[90px] px-10">
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

      <main className="relative pt-[110px] z-20">
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
                  {images.map((image, idx) => (
                    <Image
                      key={image.src}
                      src={image}
                      alt="placeholder"
                      className="my-4 hover:opacity-70 cursor-pointer"
                      placeholder="blur"
                      onClick={() => {
                        lightboxRef.current?.openGallery(idx);
                      }}
                    />
                  ))}
                </Masonry>

                <LightGalleryComponent
                  onInit={(ref: any) => {
                    if (ref) {
                      lightboxRef.current = ref.instance;
                    }
                  }}
                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}
                  dynamic
                  dynamicEl={images.map((image) => ({
                    src: image.src,
                    thumb: image.src,
                  }))}
                />
              </Tab.Panel>
              <Tab.Panel>Panoramas</Tab.Panel>
              <Tab.Panel>Wide Angle</Tab.Panel>
              <Tab.Panel>HDR</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className="relative h-[90px] flex justify-center items-center uppercase text-lg font-medium z-20">
        Photography Portfolio
      </footer>
    </div>
  );
}
