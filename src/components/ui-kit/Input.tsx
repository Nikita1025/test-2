import CurrenciesIcon from "../../assets/icon/currencies-icon";
import {ComponentProps} from "react";

type InputType = {
    title: string
    defaultValue: number
    field: any
    form: any
    name: string
} & ComponentProps<'input'>

export const Input = ({title, field, form}: InputType) => {

    return (
        <div className={'relative flex flex-col w-80'}>
            <span className={'text-primary mb-3 text-base font-medium font-inter'}>{title}</span>
            <input {...field}
                   className={'px-6 py-3  bg-base-inputs text-primary w-full rounded-md focus:outline-none focus:ring-1 focus:ring-accent-primary'}
            />
            <CurrenciesIcon className={'absolute top-15-5 right-6'}/>
            {form.touched[field.name] && form.errors[field.name] && (
                <div className='text-primary'>{form.errors[field.name]}</div>
            )}
        </div>
    );
}
