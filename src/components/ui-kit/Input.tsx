import CurrenciesIcon from "../../assets/icon/currencies-icon";

type InputType = {
    title: string
    defaultValue:number
}
export const Input = ({title,defaultValue}: InputType) => {

    return (
        <div className={'relative flex flex-col w-80'}>
            <span className={'text-primary mb-3 text-base font-medium font-inter'}>{title}</span>
            <input
                defaultValue={defaultValue}
                className={'px-6 py-3  bg-base-inputs text-primary w-full rounded-md focus:outline-none focus:ring-1 focus:ring-accent-primary'}/>
            <CurrenciesIcon className={'absolute top-15-5 right-6'}/>
        </div>
    );
}
