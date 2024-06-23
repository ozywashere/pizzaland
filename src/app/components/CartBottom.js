"use client"
import React, {useContext, useState} from "react";
import {IoCloseOutline} from "react-icons/io5";
import CheckoutDetails from "@/app/components/CheckoutDetails";

import Modal from "react-modal";
import {CartContext} from "@/app/context/CartContext";

const modalStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
}
// bind modal to body
Modal.setAppElement('body');

const CartBottom = () => {
    const {setIsOpen, cart,cartTotal} = useContext(CartContext);
    // modal
    const [modal, setModal] = useState(false);
    const openModal = () => {
        setModal(true);
    }
    const closeModal = () => {
        setModal(false);
    }

    return <>
        {cart.length >= 1 ? (<div className="px-6 py-3 lg:py-6 mt-auto">
            {/*total price*/}
            <div className="flex items-center justify-between mb-6 text-lg font-semibold font-robotoCondensed">
                <div>Total:</div>
                <div>${parseFloat(cartTotal).toFixed(2)}</div>
            </div>
            <div className="flex flex-col">
                <button
                    onClick={() => {
                        setIsOpen(false)
                        openModal(true)
                    }}
                    className="btn btn-lg gradient font-semibold">
                    Checkout
                </button>
            </div>
        </div>) : <div className="absolute top-0 w-full h-full justify-center flex items-center -z-10">
            <div>
                Your cart is empty
            </div>
        </div>}
        {/* check out modal*/}
        {modal && <Modal
            className="bg-white w-full h-full lg:max-w-[900px] lg:max-h-[750px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none"
            isOpen={modal}
            style={modalStyles}
            onRequestClose={closeModal}
            contentLabel="Checkout Modal"
        >
            <div
                onClick={closeModal}
                className="absolute z-30 right-2 top-2">
                <IoCloseOutline className="cursor-pointer text-orange" size={30}/>
            </div>
            <CheckoutDetails setModal={setModal}/>
        </Modal>
        }
    </>
};

export default CartBottom;
