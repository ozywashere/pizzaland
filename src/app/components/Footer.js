"use client"
import Image from "next/image";

import Link from "next/link";

import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaPinterest
} from "react-icons/fa"

const Footer = () => {
    return <footer className="bg-primary bg-pattern py-16">
        <div className="container mx-auto">
            <div className="flex flex-col items-center gap-y-6 justify-center">
                {/*    lgoo*/}
                <Link href="/">
                    <Image src={"logo.svg"} width={180} height={180} alt=""/>
                </Link>
                {/*social icons*/}
                <div className="flex gap-x-6 text-xl text-white">
                    <Link href={"#"}>
                        <FaFacebookSquare/>
                    </Link>
                    <Link href={"#"}>
                        <FaInstagram/>
                    </Link>
                    <Link href={"#"}>
                        <FaTwitter/>
                    </Link>
                    <Link href={"#"}>
                        <FaYoutube/>
                    </Link>
                    <Link href={"#"}>
                        <FaPinterest/>
                    </Link>
                </div>
                {/*    copyright*/}
                <div className="text-white font-medium">
                    &copy; 2023 Pizza House. All rights reserved.
                </div>
            </div>
        </div>
    </footer>;
};

export default Footer;
