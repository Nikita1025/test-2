import React, {useEffect, useRef, useState} from 'react';
import CurrenciesIcon from "../../assets/icon/currencies-icon";
import WarningActiveIcon from "../../assets/icon/warning-active-icon";
import InfoIcon from "../../assets/icon/info-icon";

type SliderType = {
    max: string
    min: string
    variant: 'info' | 'term' | 'payment'
    title: string
    text?: string
    maxValue?: string
    minValue?: string
}
export const Slider = ({max, min, variant, title, text, minValue, maxValue}: SliderType) => {
    const [value, setValue] = useState(min);

    const handleChange = (e: any) => {
        setValue(e.target.value);
    };
    const infoWindow = variant === "info" || variant === "payment"
    const minMaxValue = variant === 'term' || variant === 'payment'
    const currenciesIcon = variant === 'info' || variant === 'payment'
    return (
        <div className='flex flex-col w-80 relative'>
            <div className='flex items-center mb-3'>
                <span className={'text-primary mr-1.5 text-base font-medium font-inter'}>{title}</span>
                {variant === 'info' && <InfoIcon/>}
            </div>
            <div className='px-6 py-3 flex justify-between bg-base-inputs rounded-md text-primary'>
                <span>{value}</span>
                {currenciesIcon && <CurrenciesIcon className={'absolute top-15-5 right-6'}/>}
            </div>

            <div className="w-full absolute top-17">
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={value}
                    onChange={handleChange}
                    className="slider w-full border-none  accent-accent-primary h-1"
                />
                {minMaxValue && <div className="mt-1.5 flex justify-between	h-5	mb-18 ">
                        <span className='text-primary mr-1 text-sm font-normal	 font-inter'>{minValue}
                            {/*{variant === 'payment' && <span className='text-xxs pl-1'>₪</span>}*/}
                           </span>
                    <span className='text-primary mr-1 text-sm font-normal	 font-inter'>{maxValue}
                        {/*{variant === 'payment' && <span className='text-xxs pl-1'>₪</span>}*/}
                    </span>
                </div>}

                {infoWindow && <div className='flex py-1.5 px-3	bg-base-secondary rounded'>
                    <WarningActiveIcon className='mr-1	'/>
                    <span className='text-primary text-xs font-normal pt-0.5 font-inter'>{text}</span>
                </div>}


            </div>
        </div>

    );
};

