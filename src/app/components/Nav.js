"use client";
import Image from "next/image";
import Link from "next/link";
import {useContext} from "react";
import {CartContext} from "@/app/context/CartContext";


const Nav = () => {
    const {setIsOpen,isOpen,itemAmount} = useContext(CartContext);
    return <nav className="absolute w-full py-8 bg-pink-50/30">
        <div className="container mx-auto flex flex-col lg:flex-row  gap-y-3 justify-between items-center">
            {/*logo*/}
            <Link href={"/"}>
                <Image src={"logo.svg"} alt="logo" width={180} height={180}/>
            </Link>
            {/*phone cart*/}
            <div className="flex gap-x-8 items-center">
                <div className="flex gap-x-3 items-center">
                    <Image src={"phone.svg"} alt="phone" width={42} height={42}/>
                    <div className="text-white ">
                        <div className="text-sm uppercase font-medium leading-none font-robotoCondensed">
                            24/7 Pizza Delivery Service
                        </div>
                        <div className="text-3xl font-extrabold tracking-wide leading-none font-robotoCondensed">
                            920 234 5768
                        </div>
                    </div>
                </div>
                {/*    cart*/}
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative cursor-pointer hidden lg:flex">
                    <Image src={"bag.svg"} height={38} width={38} alt=""/>
                    {/*    amount*/}
                    <div className="bg-tertiary text-white w-6 h-6 flex items-center justify-center rounded-full text-[13px] font-robotoCondensed absolute -bottom-2 right-1">
                        {itemAmount}
                    </div>
                </div>
            </div>
        </div>
    </nav>;
};

export default Nav;
