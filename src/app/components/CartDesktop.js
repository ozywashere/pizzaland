"use client"
import React, {useContext} from "react";
import {CartContext} from "@/app/context/CartContext";
import CartItem from "@/app/components/CartItem";
import CartBottom from "@/app/components/CartBottom";
import CartTop from "@/app/components/CartTop";

const CartDesktop = () => {
    const {isOpen, cart} = useContext(CartContext);

    return <div
        className={`${isOpen ? "left-0" : "-left-full"} fixed bg-white top-0 bottom-0 w-[500px] shadow-2xl hidden lg:flex flex-col transition-all duration-300 z-50`}>

        <CartTop/>
        {/*item list*/}
        <div
            className={`px-10 flex flex-col gap-y-4 h-[65vh] py-2 mr-4 mt-8 overflow-y-scroll  scrollbar-thin  ${cart.length >= 3 && "scrollbar-thumb-secondary scrollbar-track-black/10"}`}>
            {
                cart.map((pizza, index) => {
                    return <CartItem key={index} pizza={pizza}/>
                })
            }
        </div>
        <CartBottom/>
    </div>;
};

export default CartDesktop;
