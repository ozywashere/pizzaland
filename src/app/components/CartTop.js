"use client"
import React, {useContext} from "react";
import {IoCloseOutline} from "react-icons/io5";
import {CartContext} from "@/app/context/CartContext";

const CartTop = () => {
    const {setIsOpen} = useContext(CartContext);
  return <div className="w-full h-20 border-b flex items-center justify-between px-10">
    {/*  shop bag text*/}
      <div className="font-semibold">Shop Bag(3)</div>
    <div onClick={()=>setIsOpen(false)} className="cursor-pointer group">
        <IoCloseOutline  className="text-3xl group-hover:scale-110 transition-all duration-300 "/>
    </div>
  </div>;
};

export default CartTop;
