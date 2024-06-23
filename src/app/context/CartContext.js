// cart context
"use client"

import React, {createContext, useEffect, useState} from "react";

export const CartContext = createContext(null);

const CartProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    // cart state
    const [cart, setCart] = useState([]);
    // cart total state
    const [cartTotal, setCartTotal] = useState(0)
    //item amount state
    const [itemAmount, setItemAmount] = useState(0)

    // calculate cart amount
    useEffect(() => {
        const amount = cart.reduce((acc, item) => {
            return acc + item.amount
        }, 0)
        setItemAmount(amount)
    }, [cart])

    // calculate cart total
    useEffect(() => {
            const price = cart.reduce((acc, item) => {
                    return acc + item.amount * item.price}, 0)
            setCartTotal(price)
        }
        , [cart])

    const addToCart = (id, image, name, price, additionalTopping, size, crust) => {
        additionalTopping.sort((a, b) => a.name.localeCompare(b.name))
        const newItem = {id, name, image, price, additionalTopping, size, crust, amount: 1}

        const cartItemIndex = cart.findIndex((item) =>
            item.id === id &&
            item.price === price &&
            item.size === size &&

            JSON.stringify(item.additionalTopping) === JSON.stringify(additionalTopping) && item.crust
        )
        if (cartItemIndex === -1) {

            setCart([...cart, newItem])
        } else {
            const newCart = [...cart]
            newCart[cartItemIndex].amount += 1
            setCart(newCart)
        }

        setIsOpen(true)
    }
    const removeFromCart = (id, price, crust) => {
        const itemIndex = cart.findIndex(item => item.id === id && item.price === price && item.crust === crust)
        if (itemIndex !== -1) {
            const newCart = [...cart];
            newCart.splice(itemIndex, 1)
            setCart(newCart)
        }

    }
    const increaseAmount = (id, price) => {
        const itemIndex = cart.findIndex(item => item.id === id &&
            item.price === price)
        if (itemIndex !== -1) {
            const newCart = [...cart]
            newCart[itemIndex].amount += 1
            setCart(newCart)
        }
    }
    const decreaseAmount = (id, price,) => {
        const itemIndex = cart.findIndex(item => item.id === id && item.price === price)
        if (itemIndex !== -1) {
            const newCart = [...cart]
            if (newCart[itemIndex].amount > 1) {
                newCart[itemIndex].amount -= 1
                setCart(newCart)
            }
        }
    }


    return (<CartContext.Provider value={{
        isOpen,
        setIsOpen, addToCart, cart, removeFromCart, increaseAmount, decreaseAmount, itemAmount, cartTotal,setCart
    }}>
        {children}
    </CartContext.Provider>)
}


export default CartProvider;


