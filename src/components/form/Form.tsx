import React from 'react';
import {Input} from "../ui-kit/Input";
import {Select} from "../ui-kit/Select";
import {city} from "../../common/constants/costants";

export const Form = () => {
    return (
        <form className={'px-3'}>
            <div>
                <Input/>
                <Select text={'Тип недвижимости'} options={city}/>
            </div>
        </form>
);
};

