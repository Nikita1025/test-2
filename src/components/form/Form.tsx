import React from 'react';
import {Input} from "../ui-kit/Input";
import {Select} from "../ui-kit/Select";
import {city, mortgage, property, status} from "../../common/constants/costants";
import {Slider} from "../ui-kit/Slider";
import {Button} from "../ui-kit/Button";

export const Form = () => {
    return (
        <form className='h-screen'>
            <div className='pt-30	px-32	'>
                <span className='text-5xl mb-11	block	font-normal	 text-primary font-roboto'>Рассчитайте ипотеку быстро и просто</span>
                <div className='flex justify-between  mb-8	'>
                    <Input title='Стоимость недвижимости' defaultValue={10000000}/>
                    <Select text={'Город покупки недвижимости'} defaultValue='Выберите город' options={city}/>
                    <Select text={'Когда вы планируете оформить ипотеку?'} defaultValue='Выберите период'
                            options={mortgage}/>
                </div>
                <div className='flex justify-between  mb-20	'>
                    <Slider min='0' max='100000' title='Первоначальный взнос'
                            variant='info' text='Cумма финансирования:500,000 ₪ Процент финансирования:50%'/>
                    <Select text={'Тип недвижимости'} defaultValue='Выберите тип недвижимости' options={property}/>
                    <Select text={'Вы уже владеете недвижимостью?'} defaultValue='Выберите ответ' options={status}/>
                </div>
                <div className='border-t border-stroke'></div>
                <div className='flex justify-between  mt-8	mb-10 h-45 '>
                    <Slider min='4' max='30' title='Cрок' minValue='4 года' maxValue='30 лет'
                            variant='term'/>
                    <Slider min='2.654' max='51.130' title='Cрок' minValue='2,654 ₪' maxValue='51,130 ₪'
                            variant='payment' text='Увеличьте ежемесячный платеж и переплачивайте меньше'/>
                </div>

            </div>
            <div className='border-t py-8 border-stroke flex justify-end pr-37'>
                <Button disabled={true}/>
            </div>
        </form>
    );
};

