import { Tab } from "@headlessui/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full bg-[url('/photography-bg.jpg')] bg-cover bg-top">

      <header className="flex justify-between items-center h-[90px] px-6">
        <div className="text-transparent">Hamburger menu</div>
        <div>Photography Portfolio</div>
        <Link 
          href="#" 
          className="rounded-3xl bg-white text-stone-700 px-3 py-2 hover:bg-opacity-90"
        >
          Get in touch
        </Link>
      </header>

      <main className=''>
        <Tab.Group>
        <Tab.List>
          <Tab>All</Tab>
          <Tab>Panoramas</Tab>
          <Tab>Wide Angle</Tab>
          <Tab>HDR</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>All</Tab.Panel>
          <Tab.Panel>Panoramas</Tab.Panel>
          <Tab.Panel>Wide Angle</Tab.Panel>
          <Tab.Panel>HDR</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      </main>
    </div>
  )
}