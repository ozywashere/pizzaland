import React, {useState, useEffect} from "react";
import Image from "next/image";

import {IoMdCheckmark} from "react-icons/io";

const Topping = ({topping, additionalTopping, setAdditionalTopping}) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleChange = (e) => {
        setIsChecked(e.target.checked);
    }
    const handleTopping = () => {
        if (isChecked) {
            const newToppings = new Set([...additionalTopping, {...topping}]);
            setAdditionalTopping(Array.from(newToppings));

        } else {
            const newToppings = additionalTopping.filter((item) => item.name !== topping.name);
            setAdditionalTopping(newToppings);
        }
    }
    useEffect(() => {
        handleTopping();
    }, [isChecked])
    return <div
        className={`${isChecked && "border-orange"} w-full max-w-[110px] h-[140px] p-1 flex flex-col items-center justify-center border rounded-md bg-white relative`}
    >
        <Image src={topping.image} alt={topping.name} width={70} height={70} priority={1} className="mb-2"/>
        {/*  topping name*/}
        <div className="text-sm capitalize text-center font-medium">
            {topping.name}
        </div>
        <input type="checkbox" checked={isChecked}
               onChange={handleChange}

               className="absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer"
        />
        <div className={`${isChecked ? "opacity-100" : "opacity-0"} absolute top-1 right-1`}>
            <IoMdCheckmark className="text-xl text-orange"/>
        </div>
    </div>;
};

export default Topping;
