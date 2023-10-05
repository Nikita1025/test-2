import React, {ComponentPropsWithoutRef, ElementType} from 'react';
export type ButtonProps<T extends ElementType = 'button'> = {
    as?: T
    disabled: boolean
    title: string
} & ComponentPropsWithoutRef<T>
const defaultStyle = 'text-disabled text-base font-medium font-inter'
const defaultStyleButton = 'py-3 w-61 px-4 text-center	bg-button-bg rounded-lg	'
const activeStyle = 'text-text-button text-base font-medium font-inter'
const activeStyleButton = 'py-3 w-61 px-4 text-center	bg-accent-primary rounded-lg'
export const Button = <T extends ElementType = 'button'>(
    props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
)  => {
    const {
        disabled,
        title,
        as: Component = 'button',
        ...rest
    } = props

    return (
        <Component className={`${disabled ? activeStyleButton : defaultStyleButton}`} {...rest}>
            <span  className={`${disabled ? activeStyle : defaultStyle}`}>{title}</span>
        </Component>
    );
};

