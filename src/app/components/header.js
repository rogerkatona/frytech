"use client"; // This is a client component 👈🏽

import Link from "next/link";
import { useState} from 'react'
import Modal from "./modal";
import useModal from "../lib/useModal";


export default function Header() {

    const [active, setActive] = useState(false)
    const handleClick = () => setActive(!active)

    const {isShowing, toggle} = useModal();

    return (
        <header className="bg-newYellow.500">
            <div className="lg:flex lg:flex-row lg:justify-between lg:items-center lg:mx-auto lg:max-w-7xl py-6 xl:px-0 md:px-12 px-6">
            <section>
                    <Link href='/'>
                        <span>
                            <div className="flex flex-row items-center">
                                <div className="">
                                    <img
                                        src="/image/logo/logoName-fryTech.png"
                                        width={200}
                                        alt="Frytech - Logo"
                                    />
                                </div>
                            </div>
                        </span>
                    </Link>
                </section>
             <div>
                    <section className="absolute lg:right-10 right-8 top-6">
                        <button
                            className="lg:hidden text-secondary hover:text-primary focus:appearance-none border-none"
                            onClick={handleClick}>
                            <svg
                                className='w-6 h-6 '
                                fill='none'
                                stroke='#424548'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M4 6h16M4 12h16M4 18h16'
                                />
                            </svg>
                        </button>
                    </section>
                    <section className={`${active ? '' : 'hidden'} lg:flex lg:flex-row lg:my-0 my-4`}>
                            <Link href=''>
                                <button
                                    onClick={toggle}
                                    className="bg-newGunmetal.500 text-newYellow.50 hover:bg-newGunmetal.700 hover:text-newYellow.200 text-xs text-newGunmetal.900 uppercase px-4 py-3 rounded-lg md:ml-3 md:mt-0 mt-6">
                                    Contact
                                </button>
                            </Link>
{/*                             <Link href='https://www.instagram.com/the_real_fry_tech_llc/'>
                                <button
                                    className="bg-newGunmetal.500 hover:bg-newGunmetal.800 hover:text-newYellow.200 text-xs text-newYellow.500 uppercase px-4 py-3 rounded-lg md:ml-3 md:mt-0 mt-6">
                                    Instagram
                                </button>
                            </Link>*/}
                    </section>
                </div>
            </div>
            <section>
                <Modal
                    isShowing={isShowing}
                    hide={toggle}
                />
            </section>
        </header>

    )
}