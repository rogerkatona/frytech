"use client"; // This is a client component 👈🏽

import Image from 'next/image'
import HeroIndex from "@/app/components/hero_index";
import Quote from "@/app/components/quote";

export default function Home() {
  return (
    <main className="">
      <HeroIndex/>
      <Quote id={0}/>
    </main>
  )
}
