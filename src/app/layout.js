// css
"use client"
import './globals.css';

import {Bangers, Quicksand, Roboto_Condensed} from 'next/font/google';
import Nav from "@/app/components/Nav";
import CartMobile from "@/app/components/CartMobile";
import CartMobileIcon from "@/app/components/CartMobileIcon";
import CartProvider from "@/app/context/CartContext";
import CartDesktop from "@/app/components/CartDesktop";
import Footer from "@/app/components/Footer";

const quicksand = Quicksand({
    subsets: ['latin'],
    variable: '--font-quicksand'
})
const bangers = Bangers({
    subsets: ['latin'],
    variable: '--font-bangers',
    weight: ["400"]
})

const roboto = Roboto_Condensed({
    subsets: ['latin'],
    variable: '--font-roboto',
    weight: ["300", "400", "700"]
})


export default function RootLayout({children}) {
    return (
        <CartProvider>
            <html lang='en'>
            <body
                className={`${quicksand.variable} ${bangers.variable} ${roboto.variable} font-quicksand`}
            >
            <Nav/>
            <CartMobileIcon/>
            <CartMobile/>
            {children}
            <CartDesktop/>
            <Footer/>
            </body>
            </html>
        </CartProvider>
    )
        ;
}
