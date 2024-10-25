import {Form} from "@/app/components/form";
import React from "react";
import ReactPlayer from "react-player";

export default function HeroIndex({ children, home }) {
    return (
        <>
            <section className="bg-gray.900">
                <div className="flex lg:flex-row flex-col lg:mx-auto lg:max-w-7xl lg:py-12 lg:px-0 px-4 py-12">
                    <div className="lg:pr-6 pr-0">
                        <p className="font-bebasNeue lg:text-8xl text-6xl text-gray.400">
                            PATENTED Brujeria Buffer Tube
                        </p>
                        <p className="text-gray.500 text-xl">
                            Fry Tech LLC is proud to announce the release of our patented Brujeria Buffer Tube, marking the debut of our cutting-edge recoil reduction technology.
                        </p>
                        <p className="text-gray.500 text-xl pt-2 pb-6">
                            By embedding free-moving magnets into the buffer tube of a firearm, Fry Tech has significantly reduced felt recoil, providing users with a more comfortable and enjoyable shooting experience.
                        </p>
                    </div>
                    <div className="lg:max-w-fit sm:max-w-sm">
                        <ReactPlayer
                            controls={true}
                            playing={false}
                            url="https://youtu.be/H0RnuminILA?si=SXsTZ3PqPAAKQ-b1"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-gray.800">
                <div className="flex lg:flex-row flex-col lg:mx-auto lg:max-w-7xl lg:py-12 lg:px-0 px-6 py-12">
                    <section className="justify-center md:bg-gray.700 lg:mr-12 mr-0 mb-4 ">
                        <div className="lg:p-12 p-0 lg:pb-0 pb-6 ">

                            <h3 className="font-bebasNeue text-5xl text-gray.400">
                                Want to Own Your Own Fry Tech Brujeria Buffer Tube?
                            </h3>
                            <div className="text-gray.400 text-xl leading-relaxed py-4">
                                We’re excited to announce that we’re preparing for our first production run, planned for launch in Q1 2025.* If you’d like to be one of the first to own this cutting-edge technology, let us know by filling out the form below. We’ll reach out to you as soon as the product is ready to ship!
                            </div>
                            <Form />

                        </div>
                    </section>
                    <div className="lg:border-none border-t-gray.700 border-t-2 lg:pt-0 pt-6">
                        <h2 className="font-bebasNeue text-gray.400 lg:text-4xl text-3xl">Control</h2>
                        <p className="text-gray.500 text-xl leading-relaxed pb-6">
                            It's always about control. Recoil often causes the firearm to rise, taking the barrel off target. With Fry Tech's technology, recoil energy is directed linearly, keeping the barrel pointed downrange rather than lifting into the air. This increased control is especially noticeable on the second and subsequent shots, as the aim remains steady on target.
                        </p>

                        <h2 className="font-bebasNeue text-gray.400 lg:text-4xl text-3xl">Versatility</h2>
                        <p className="text-gray.500 text-xl leading-relaxed pb-6">
                            Our technology offers customizable magnet strength configurations, allowing users to tailor the system to their specific needs and experience levels. Whether for a novice or an expert, the Brujeria Buffer Tube can be fine-tuned for optimal performance.
                        </p>

                        <h2 className="font-bebasNeue text-gray.400 lg:text-4xl text-3xl">Stability</h2>
                        <p className="text-gray.500 text-xl leading-relaxed pb-6">
                            The magnets in Fry Tech's system reduce direct linear motion, while the added weight within the buffer tube enhances overall stability during shooting.
                        </p>

                        <h2 className="font-bebasNeue text-gray.400 lg:text-4xl text-3xl">Dependability</h2>
                        <p className="text-gray.500 text-xl leading-relaxed ">
                            Traditional springs weaken over time, increasing recoil. Fry Tech's magnets are encased for protection and rigorously tested, withstanding over 15,000 rounds per buffer tube to ensure long-lasting, reliable performance.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}


/*
<div className="lg:text-12xl text-9xl text-white.100 font-bebasNeue">FRYTECH</div>
<div className="2xl:w-1/3 md:w-1/2 w-full xl:px-24 pt-12 px-12 lg:text-xl text-newGray.500 ">
    <p>Fry Tech specializes in the customization of GUNCAD parts and accessories to help builders perfect their 3D masterpieces. We also customize and resell parts and
        kits from other GUNCAD manufacturers and provide only the highest quality parts. </p>
    <p> Our services team specializes in PLA (+, nylon, carbon fiber, etc) custom printing and painting, Cerakote application and
        sandblasting, 3D printer troubleshooting and repair.</p>
    <p>Our development team is hard at working designing new technologies for the GUNCAD industry and has patents issued for our technology.</p>
    <p>Visit us on <a href="https://www.instagram.com/the_real_fry_tech_llc/" target="_blank"  rel="noreferrer" className="text-newYellow.500 underline">Instagram</a> to see what is happening at Fry Tech on a daily basis!</p>
</div>
<div className="flex flex-row lg:mx-auto lg:max-w-7xl md:p-12 p-6">
    <div className="font-bebasNeue md:text-6xl text-4xl text-center text-white.100 opacity-80 lg:w-2/3 w-1/2 ">
        Helping UX Teams Thrive in Today's Competitive Landscape with professional UX services and workshops.
    </div>
</div>*/
