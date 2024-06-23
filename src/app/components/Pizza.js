"use client";
import React, {useState} from "react";

import Image from "next/image";

import Modal from "react-modal";

import PizzaDetails from "./PizzaDetails";

import {IoCloseOutline} from "react-icons/io5";

//binding modal to body
Modal.setAppElement("body");
//modal styles
const modalStyles = {
    overlay: {
        backgroundColor: "rgba(0,0,0,0.5)",

    },

};

const Pizza = ({pizza}) => {

    const [modal, setModal] = useState(false);
    const openModal = () => {
        setModal(true);
    }
    const closeModal = () => {
        setModal(false);
    }


    return (<div className="group py-2 px-4 xl:py-4 xl:px-2 rounded-xl">
            <Image
                onClick={openModal}
                src={pizza.image} alt={pizza.name} width={270} height={270} priority={1}
                className="lg:group-hover:translate-y-3 transition-all duration-300 mb-8
                cursor-pointer"/>
            <div onClick={openModal}>
                <div className="text-xl font-bold mb-3 capitalize cursor-pointer">
                    {pizza.name}
                </div>
            </div>
            {/*  description*/}

            <div className="text-sm font-medium min-h-[60px] mb-6">
                {pizza.description}
            </div>
            {/*price btn*/}
            <div className="mb-6 flex items-center justify-between">
                {/*price*/}
                <div className="hidden lg:flex text-xl font-semibold">Starts at {pizza.priceSm} </div>
                {/*    Button*/}
                <button
                    onClick={openModal}
                    className="hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm ">Choose
                </button>
                {/*    btn visible sm hidden lg*/}
                <button className="lg:hidden flex gradient text-white rounded-lg btn-sm px-3 font-semibold text-sm ">
                    starts at {pizza.priceSm}
                </button>
            </div>
            {/*    modal*/}
            {
                modal && (
                    <Modal
                        className="bg-white w-full h-full lg:max-w-[900px] lg:max-h-[750px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none"
                        isOpen={modal}
                        style={modalStyles} onRequestClose={closeModal} contentLabel="Pizza Modal">
                        {/*close modal Icon*/}
                        <div
                            onClick={closeModal}
                            className="absolute z-30 right-2 top-2">
                            <IoCloseOutline className="cursor-pointer text-orange" size={30}/>
                        </div>
                    {/*    pizza details*/}
                        <PizzaDetails pizza={pizza} modal={modal} setModal={setModal}/>
                    </Modal>
                )
            }
        </div>
    );
};

export default Pizza;
