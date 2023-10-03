import React, {ChangeEvent} from 'react';

type RangeSliderType={
    min:number
    max:number
    value:number
    onChange:(event:ChangeEvent<HTMLInputElement>)=>void
}
export const RangeSlider = ({min, max, value, onChange}:RangeSliderType) => {
    return (
        <div className="flex items-center">
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={onChange}
                className="w-full h-2 bg-indigo-500 appearance-none rounded-md focus:outline-none focus:shadow-outline"
            />
        </div>
    );
};
