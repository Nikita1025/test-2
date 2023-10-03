import React, {ReactNode, useState} from 'react';
import CarterDownIcon from "../../assets/icon/carter-down-icon";
import CarterUpIcon from "../../assets/icon/carter-up-icon";
import {OptionType} from "../../common/constants/costants";

type SelectType = {
    text: string
    options: OptionType[]
}
const selectedStyle= 'border-accent-primary border-solid border-2'
export const Select = ({text, options}: SelectType) => {
    const [selected, setSelected] = useState(false)

    const onClickHandler = () => {
        setSelected(!selected)
    }
    return (
        <div>
            <div className={'flex flex-col w-80 relative'}>
                <span className={'text-primary mb-3 text-base font-medium font-inter'}>{text}</span>
                <div
                    onClick={onClickHandler}
                    className={`${selected && selectedStyle} px-6 py-3 flex justify-between bg-base-inputs rounded-md text-primary`}>
                    <span>Тель-авив</span>
                    {!selected ? <CarterDownIcon/> : <CarterUpIcon/>}
                </div>
                {selected && <div className='absolute w-full right-0 top-24 bg-base-inputs rounded scroll-py-2	 h-44 overflow-auto'>
                    {options.map(el => (<div className='flex py-2.5 px-4 text-primary text-base font-medium font-inter'>{el.text}</div>))}
                </div>}

            </div>
        </div>)
}



