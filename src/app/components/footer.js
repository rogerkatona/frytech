"use client"; // This is a client component 👈🏽

import Link from "next/link";
import NavBar from "./navBar";
import navItems from "../data/navItems";
import useModal from "../lib/useModal";
import Modal from "./modal";


export default function Footer() {
    const {isShowing, toggle} = useModal();

    return (
        <footer className="flex flex-col justify-center md:items-center md:px-0 px-6 bg-medBlue.900 py-48 space-y-6">
         <section>
            <div>
                <div className="flex flex-row items-center ">
                    <Link
                        href='/'>
                        <span>
                            <img
                                src="/image/logo/logoName-fryTech.png"
                                width={200}
                                alt='Blue Prospect Logo'
                            />
                        </span>
                    </Link>
                </div>
            </div>
        </section>

            <div className='flex md:flex-row flex-col'>
                <NavBar navItems={navItems}/>
            </div>
            <div>
                <Link href=''>
                    <button
                        onClick={toggle}
                        className="hover:bg-rust.800 hover:text-white.100 hover:border-newGunmetal.300 text-xs text-newGunmetal.500 uppercase px-3 py-2  border border-newGunmetal.500 rounded-lg">
                        Contact
                    </button>
                </Link>
            </div>
            <section>
                <Modal
                    isShowing={isShowing}
                    hide={toggle}
                />
            </section>
        </footer>
    )
}