import React from 'react';
import {Input} from "../ui-kit/Input";
import {Select} from "../ui-kit/Select";
import {city, mortgage, property, status} from "../../common/constants/costants";
import {Slider} from "../ui-kit/Slider";
import {Button} from "../ui-kit/Button";
import {Field, Formik, Form} from "formik";
import * as yup from 'yup'
const validationSchema = yup.object({
    realEstateValue: yup.number().min(0).max(10000000, 'Стоимость недвижимости не может превышать 10,000,000').required('Укажите стоимость недвижимости'),
    city: yup.string().required('Выберите ответ'),
    mortgageTime: yup.string().required('Выберите ответ'),
    initialPayment: yup.number().required('Сумма первоначального взноса не может быть меньше 25% от стоимости недвижимости'),
    propertyType: yup.string().required('Выберите ответ'),
    realEstateOwnership: yup.string().required('Выберите ответ'),
    deadline: yup.number().min(4).max(30, 'Cрок ипотеки не может превышать 30 лет').required('Выберите ответ'),
    monthlyPayment: yup.number().required('Размер ежемесячного платежа не может быть меньше 2,654 иначе срок будет больше 30 лет'),

})
export const FormPage = () => {


    const initialValues = {
        realEstateValue: '',
        city: '',
        mortgageTime: '',
        initialPayment: '',
        propertyType: '',
        realEstateOwnership: '',
        deadline: '',
        monthlyPayment: '',
    }
    const handleSubmit = (values: any) => {
        console.log(values);
    };

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema}
                onSubmit={handleSubmit}>
            <Form>
                <div className='h-screen'>
                    <div className='pt-30	px-32	'>
                        <span className='text-5xl mb-11	block	font-normal	 text-primary font-roboto'>Рассчитайте ипотеку быстро и просто</span>
                        <div className='flex justify-between  mb-8	'>
                            <Field component={Input} name="realEstateValue" defaultValue={10000000}
                                   title="Стоимость недвижимости"/>
                            <Field component={Select} name="city"  text={'Город покупки недвижимости'}
                                   defaultValue='Выберите город' options={city}/>
                            <Field component={Select} name="mortgageTime" options={mortgage}
                                   text={'Когда вы планируете оформить ипотеку?'} defaultValue='Выберите период'/>
                        </div>
                        <div className='flex justify-between  mb-20	'>
                            <Field component={Slider} name="initialPayment" min='0' max='100000'
                                   title='Первоначальный взнос'
                                   variant='info' text='Cумма финансирования:500,000 ₪ Процент финансирования:50%'/>
                            <Field component={Select} name="propertyType" text={'Тип недвижимости'}
                                   defaultValue='Выберите тип недвижимости' options={property}/>
                            <Field component={Select} name="realEstateOwnership" text={'Вы уже владеете недвижимостью?'}
                                   defaultValue='Выберите ответ' options={status}/>
                        </div>
                        <div className='border-t border-stroke'></div>
                        <div className='flex justify-between  mt-8	mb-10 h-45 '>
                            <Field component={Slider} name="deadline" min='4' max='30' title='Cрок'
                                   minValue='4 года' maxValue='30 лет' variant='term'/>
                            <Field component={Slider} name="monthlyPayment" min='2.654' max='51.130' title='Cрок'
                                   minValue='2,654 ₪' maxValue='51,130 ₪' variant='payment'
                                   text='Увеличьте ежемесячный платеж и переплачивайте меньше'/>
                        </div>
                        <div className='border-t py-8 border-stroke flex justify-end pr-37'>
                            <Button disabled={false} type={'submit'} title='Продолжить'/>
                        </div>
                    </div>
                </div>

            </Form>
        </Formik>
    );
};

