import {Form} from "@/app/components/form";
import React from "react";

export default function HeroIndex({ children, home }) {
    return (
        <section className="bg-gray.800">
            <div className="flex lg:flex-row flex-col lg:mx-auto lg:max-w-7xl lg:h-screen90vh py-12 md:px-0 px-12">

                <div className="pt-12 mr-6">
                    <div className="mb-4 ">
                        <img
                            src="/image/logo/logoName-fryTech.png"
                            width={400}
                            alt="Frytech - Logo"
                        />
                    </div>
                    <div className="text-gray.400 text-xl font-light leading-relaxed md:w-128">
                        Specializes in the customization of GUNCAD parts and accessories to help builders perfect their 3D masterpieces. We also customize and resell parts and
                        kits from other GUNCAD manufacturers and provide only the highest quality parts.
                    </div>
                </div>
                <div className="lg:mb-0 mb-6 flex justify-center lg:bg-gray.700">
                    <div className="">
                        <section className="flex flex-col w-full md:px-12 px-2 pt-12 w-1/2 ">
                            <div className="">
                                <div className="font-bebasNeue text-5xl text-gray.400 ">
                                    Contact FryTech
                                </div>
                                <div className="text-gray.400 text-xl font-light leading-relaxed">
                                    <div className="py-4" >
                                        Provide your information and we will reach out to quickly to discuss how we can help. We look forward to hearing from you soon!
                                    </div>
                                </div>
                                <Form/>
                            </div>
                        </section>
                    </div>
                </div>



            </div>
        </section>
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
