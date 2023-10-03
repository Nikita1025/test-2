import React, {ChangeEvent, useState} from 'react';
import CurrenciesIcon from "../../assets/icon/currencies-icon";
import {RangeSlider} from "./RagneSlider";

export const Input = () => {
    const [value, setValue] = useState(50); // Initial value

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        setValue(+event.target.value);
    };
    return (
        <div className={'relative flex flex-col w-80'}>
            <span className={'text-primary mb-3 text-base font-medium font-inter'}>Стоимость недвижимости</span>
            <input
                className={'px-6 py-3  bg-base-inputs text-primary w-full rounded-md focus:outline-none focus:ring-1 focus:ring-accent-primary'}/>
            <CurrenciesIcon className={'absolute top-12 right-6'}/>
            {/*<div>*/}
            {/*    <RangeSlider min={0} max={100} value={value} onChange={handleChange}/>*/}
            {/*    <p className="text-primary">Selected value: {value}</p>*/}

            {/*</div>*/}
        </div>
);
};

