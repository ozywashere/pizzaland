"use client";
import {CartContext} from "@/app/context/CartContext";
import CartTop from "@/app/components/CartTop";
import {useContext} from "react";
import CartBottom from "@/app/components/CartBottom";
import CartItem from "@/app/components/CartItem";

const CartMobile = () => {
    const {isOpen, cart} = useContext(CartContext);
    return (
        <div
            className={`fixed bg-white w-full h-full left-0 z-20 transition-all duration-300 lg:hidden flex  flex-col ${isOpen ? "bottom-0" : "-bottom-full"}`}>
            {/*top*/}
            <CartTop/>
            {/*    cart items */}
            <div
             className={`px-4 flex flex-col gap-y-4 py-2 mr-4 mt-8 h-[60vh]  overflow-y-scroll scrollbar-thin scrollbar-thumb-secondary ${cart.length>=3? "scrollbar-track-black/10" : "scrollbar-track-transparent"}`}
            >
                {cart?.map((pizza, index) => {
                        return (
                            <CartItem key={index} pizza={pizza}/>
                        )
                    }
                )}
            </div>
            {/*    Cart Bottom */}
            <CartBottom/>
        </div>
    );
};

export default CartMobile;
