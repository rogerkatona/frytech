"use client"; // This is a client component 👈

import Head from "next/head";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import {siteTitle} from "@/app/components/layout";

export default function Template({ children }) {
    return (
        <>
            <div className="flex flex-col">
                <Head>
                    <title>{siteTitle}</title>
                    <link rel="icon" href="../favicon.ico" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <meta name="og:title" content={siteTitle} key="title"/>
                    <meta name="twitter:card" content="summary_large_image" />
                </Head>
                <Header/>
                <main>{children}</main>
                <Footer/>
            </div>
        </>
    )
}