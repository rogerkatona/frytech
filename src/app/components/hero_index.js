import {Form} from "@/app/components/form";
import React from "react";
import ReactPlayer from "react-player";

export default function HeroIndex({ children, home }) {
    return (
        <>
            <section className="bg-gray.900">
                <div className="flex lg:flex-row flex-col lg:mx-auto lg:max-w-7xl lg:py-12 lg:px-0 px-4 py-12">
                    <div className="lg:pr-6 pr-0">
                        <p className="font-bebasNeue lg:text-6xl text-4xl text-gray.400 pb-3">
                            PATENTED Brujeria Buffer Tube
                        </p>
                        <p className="text-gray.500 text-xl">
                            Fry Tech LLC is proud to announce the release of our patented Brujeria Buffer Tube, marking the debut of our cutting-edge recoil reduction technology.
                        </p>
                        <p className="text-gray.500 text-xl pt-2 pb-6">
                            By embedding free-moving magnets into the buffer tube of a firearm, Fry Tech has significantly reduced felt recoil, providing users with a more comfortable and enjoyable shooting experience.
                        </p>
                    </div>
                    <div className="w-full max-w-sm lg:max-w-xl">
                        <ReactPlayer
                            controls={true}
                            playing={false}
                            width="100%" // Ensure the video takes full width of the container
                            height="100%" // Maintain aspect ratio
                            url="https://youtu.be/B450CzMm7-8"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-gray.800">
                <div className="flex lg:flex-row flex-col lg:mx-auto lg:max-w-7xl lg:py-12 lg:px-0 px-6 py-12">
                    <section className="justify-center md:bg-gray.700 lg:mr-12 mr-0 mb-4 ">
                        <div className="lg:p-12 p-0  pb-6 ">

                            <h3 className="font-bebasNeue text-5xl text-gray.400 pb-2">
                                Licensing
                            </h3>
                            <div className="text-gray.400 text-xl leading-relaxed py-4">
                                Are you a manufacturer or designer wanting to utilize Fry Tech’s magnetic recoil reduction technology in your project? You are in luck!  Fill out the form below (or email zeke@frytech.biz) and we will contact you regarding our licensing options.</div>
                            <Form />

                        </div>
                    </section>
                    <div className="lg:border-none border-t-gray.700 border-t-2 lg:pt-0 pt-6">
                        <h2 className="font-bebasNeue text-gray.400 lg:text-4xl text-3xl pb-2">Control</h2>
                        <p className="text-gray.500 text-xl leading-relaxed pb-8">
                            It is always about control, too many times recoil causes the gun to rise taking the barrel off the target.  Our technology keeps the recoiled energy contained in a linear direction, keeping the barrel aimed down range versus lifting in the air. </p>

                        <h2 className="font-bebasNeue text-gray.400 lg:text-4xl text-3xl pb-2">Versatility</h2>
                        <p className="text-gray.500 text-xl leading-relaxed pb-8">
                            Our technology offers customizable magnet strength configurations, allowing users to tailor the system to their specific needs and experience levels. Whether for a novice or an expert, the Brujeria Buffer Tube can be fine-tuned for optimal performance.
                        </p>

                        <h2 className="font-bebasNeue text-gray.400 lg:text-4xl text-3xl pb-2">Stability</h2>
                        <p className="text-gray.500 text-xl leading-relaxed pb-8">
                            The magnets in Fry Tech's system reduce direct linear motion, while the added weight within the buffer tube enhances overall stability during shooting.
                        </p>

                        <h2 className="font-bebasNeue text-gray.400 lg:text-4xl text-3xl pb-2">Dependability</h2>
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
