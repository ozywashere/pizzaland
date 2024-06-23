"use client";
import {useContext} from "react";
import {BsHandbag} from "react-icons/bs";

import {CartContext} from "@/app/context/CartContext";


const CartMobileIcon = () => {
    const {isOpen, setIsOpen,itemAmount} = useContext(CartContext);
    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            className="bg-tertiary  w-[72px] h-[72px] rounded-full flex items-center justify-center text-white cursor-pointer fixed right-[10%] bottom-[5%] z-20 lg:hidden">
            <BsHandbag

                className="text-4xl text-white "/>
            <span
                className="absolute text-white bottom-3 right-4 gradient w-5 h-5 flex items-center justify-center rounded-full font-robotoCondensed text-[13px] ">
                {itemAmount}
            </span>
        </div>);
};

export default CartMobileIcon;
