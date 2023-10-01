"use client"; // This is a client component 👈🏽

import Quote from "@/app/components/quote";
import Promo from "@/app/components/promo";
import Hero from "@/app/components/hero";
import Service from "@/app/components/service";


export default function Services() {
    return (
        <main className="">

            <header className="bg-hero-services min-h-screen25vh max-h-screen25vh bg-cover bg-right bg-no-repeat">
                <Hero id={1}/>
            </header>
            <div className="text-center font-bebasNeue text-6xl text-gray.700 bg-gray.100 py-12">
                Services
            </div>
            <Service type="service" subtype="services"/>
            <Quote id={0}/>
            <div className="text-center font-bebasNeue text-6xl text-gray.700 bg-gray.100 py-12">
                Customization
            </div>
            <Service type="service" subtype="customization"/>
            <Promo id={0}/>

        </main>
    )
}