import React from 'react';

type ButtonType = {
    disabled: boolean
}
const defaultStyle = 'text-disabled text-base font-medium font-inter'
const defaultStyleButton = 'py-3 w-61 px-4 text-center	bg-button-bg rounded-lg	'
const activeStyle = 'text-text-button text-base font-medium font-inter'
const activeStyleButton = 'py-3 w-61 px-4 text-center	bg-accent-primary rounded-lg'
export const Button = ({disabled}: ButtonType) => {


    return (
        <div className={`${!disabled ? defaultStyleButton : activeStyleButton}`}>
            <button className={`${!disabled ? defaultStyle : activeStyle}`}>Продолжить</button>
        </div>
    );
};

