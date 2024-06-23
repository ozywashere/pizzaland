"use client";
import React, {useState, useEffect, useContext} from "react";
import {CartContext} from "@/app/context/CartContext";

import Image from "next/image";

import SizeSelection from "./SizeSelection";
import CrustSelection from "./CrustSelection";
import ToppingsSelection from "./Topping";
import pizza from "@/app/components/Pizza";
import topping from "./Topping";



const PizzaDetails = ({pizza,modal,setModal}) => {

    const {addToCart} = useContext(CartContext);

    const [size, setSize] = useState("large");
    const [crust, setCrust] = useState("traditional");
    //toppings
    const [additionalTopping, setAdditionalTopping] = useState([]);
    //additional topping price
    const [additionalToppingPrice, setAdditionalToppingPrice] = useState(0);
    //price
    const [price, setPrice] = useState(0);

    useEffect(() => {
            size === "small" ?
                setPrice(pizza.priceSm + additionalToppingPrice) :
                size === "medium" ?
                    setPrice(pizza.priceMd + additionalToppingPrice) :
                    size === "large" ?
                        setPrice(pizza.priceLg + additionalToppingPrice) : null
        },
        [size, crust, additionalToppingPrice]);

    // set additional topping price
    useEffect(() => {
        if (additionalTopping.length > 0) {
            const toppingPrice = additionalTopping.reduce((acc, curr) => {
                return acc + curr.price;
            }, 0);
            setAdditionalToppingPrice(toppingPrice);
        } else {
            setAdditionalToppingPrice(0);
        }
    }, [additionalTopping]);
    return <div className="flex flex-col lg:flex-row lg:gap-x-8 h-full md:p-8">
        {/*top*/}
        <div className="lg:flex-1 flex justify-center items-center">
            <div className="max-w-[300px] lg:max-w-none mt-6 lg:mt-0">
                <Image src={pizza.image} alt={pizza.name} width={450} height={450} priority={1}
                       className="mx-auto relative"/>
            </div>
        </div>
        {/*bottom*/}
        <div className="flex flex-col flex-1">
            <div className="flex-1 p-2 text-center lg:text-left">
                <div
                    className="flex-1 scrollbar-track-white scrollbar-thumb-gray-200 scrollbar-thin h-[46vh] overflow-y-scroll bg-white pr-2">
                    {/*    name*/}
                    <div className="font-semibold ">
                        <h2 className="capitalize text-3xl mb-2">{pizza.name}</h2>
                        {/*    size and crust text*/}
                        <div className="mb-6 text-lg font-medium">
                        <span>
                        {size === "small" ? "25 cm" : size === "medium" ? "30 cm" : size === "large" ? "35 cm" : null}</span>
                            <span>,{crust} crust</span>
                        </div>
                    </div>
                    {/*    Size selection*/}
                    <SizeSelection pizza={pizza} size={size} setSize={setSize}/>
                    {/*    Crust selection*/}
                    <CrustSelection crust={crust} setCrust={setCrust} pizza={pizza}/>
                    {/*    Toppings*/}
                    <div className="text-xl mb-4">Choose your toppings</div>
                    <div className="flex flex-1 flex-wrap gap-2 py-1 justify-center lg:justify-start">
                        {pizza.toppings.map((topping, index) => {
                                return <ToppingsSelection key={index} topping={topping}
                                                          additionalTopping={additionalTopping}
                                                          setAdditionalTopping={setAdditionalTopping}
                                />
                            }
                        )}
                    </div>
                </div>
            </div>
            {/*    add to cart btn*/}
            <div className="flex h-full items-center px-2 lg:items-end">
                <button
                    onClick={() => {addToCart(
                        pizza.id,
                        pizza.image,
                        pizza.name,
                        price,
                        additionalTopping,
                        size,
                        crust
                        ),
                        setModal(false)}}
                    className="btn btn-lg gradient w-full flex justify-center gap-x-2">
                    <div>Add to cart for</div>
                    <div>$ {
                        parseFloat(price).toFixed(2)
                    }</div>
                </button>
            </div>
        </div>

    </div>;
};

export default PizzaDetails;
