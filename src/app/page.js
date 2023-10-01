"use client"; // This is a client component 👈🏽

import Image from 'next/image'
import HeroIndex from "@/app/components/hero_index";
import Quote from "@/app/components/quote";
import Features from "@/app/components/features";
import Promo from "@/app/components/promo";

export default function Home() {
  return (
    <main className="">

      <HeroIndex/>
      <Quote id={0}/>
      <Features  featured="true" type="service"/>
      <Promo id={1}/>

    </main>
  )
}
