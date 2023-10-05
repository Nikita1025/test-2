import React, {ComponentProps, useState} from 'react';
import CarterDownIcon from "../../assets/icon/carter-down-icon";
import CarterUpIcon from "../../assets/icon/carter-up-icon";
import {OptionType} from "../../common/constants/costants";
import VectorIcon from "../../assets/icon/vector-icon";


type SelectType = {
    text: string
    options: OptionType[]
    defaultValue: string
    field:any
    name: string
    selectValue: (city: string)=>void
}& ComponentProps<'select'>

const defaultStyle= 'text-disabled  text-base font-normal font-inter'
const changeCity= 'text-primary text-base font-normal font-inter'
const selectedStyle= 'border-accent-primary border-solid border-border-1'
export const Select = ({text, options, defaultValue, field, form, selectValue, ...props}: SelectType) => {
    const [selected, setSelected] = useState(false)
    const [value, setValue]=useState('')
    const onClickHandler = () => {
        setSelected(!selected)
    }
    const onClickCityHandler = (city:string) => {
        setValue(city)
    }

    return (
        <div>
            <div className={'flex flex-col w-80 relative'}>
                <span className={'text-primary mb-3 text-base font-medium font-inter'}>{text}</span>
                <div
                    {...field}
                    {...props}
                    onClick={onClickHandler}
                    className={`${selected && selectedStyle} px-6 py-3 flex justify-between bg-base-inputs rounded-md text-primary`}>
                    <span className={`${value.length === 0  ? defaultStyle : changeCity }`} >{value.length === 0 ? defaultValue : value}</span>
                    {!selected ? <CarterDownIcon/> : <CarterUpIcon/>}
                </div>
                {selected && <div className=' z-10	absolute w-full right-0 top-24 bg-base-inputs rounded scroll-py-2	 h-44 overflow-auto'>
                    {options.map((el, index) => (<div key={index} onClick={()=>onClickCityHandler(el.text)}  className='flex py-2.5 justify-between px-4 text-primary text-base font-medium font-inter'>
                        {el.text}
                        {value === el.text && <VectorIcon/>}
                    </div>))}

                </div>}

            </div>
        </div>)
}



