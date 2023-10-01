"use client"; // This is a client component 👈🏽

// components/NavItem.js
import Link from "next/link";

export default function NavItem (props) {


    return (
        <div className="pb-3 flex flex-row items-center lg:pb-0">
            <Link href={props.path}>
                <span className="md:mx-3 pt-6 lg:py-0 text-xs font-regular uppercase hover:text-gray.050 text-newGray.700">{props.label}</span>
            </Link>
        </div>
    )
}

