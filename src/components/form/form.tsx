import React, { useState } from 'react';

import { Field, Formik, Form } from 'formik';

import { city, mortgage, property, status } from '../../common/constants/costants';
import { validationSchema } from '../../common/schema/shema';
import { submitForm } from '../../store/app-slice';
import { useAppDispatch } from '../../store/store';
import { RequestSubmitFormType } from '../../store/types';
import { Button } from '../ui-kit/button';
import { Input } from '../ui-kit/input';
import { Select } from '../ui-kit/select';
import { Slider } from '../ui-kit/slider';

export const FormPage = () => {
  const dispatch = useAppDispatch();
  const [isFormFilled, setFormFilled] = useState(false);

  // Начальные значения формы
  const initialValues: RequestSubmitFormType = {
    realEstateValue: 1000000,
    city: '',
    mortgageTime: '',
    initialPayment: 500000,
    propertyType: '',
    realEstateOwnership: '',
    deadline: 4,
    monthlyPayment: 2.654,
  };
  // Отправка формы на сервер
  const handleSubmit = (values: RequestSubmitFormType) => {
    dispatch(submitForm(values));
    setFormFilled(!isFormFilled);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="h-screen">
          <div className="pt-30	xl:px-32 px-5 lg:px-14	">
            <span className="xl:text-5xl text-3.1xl xl:mb-11 mb-8	lg:text-5xl 	block	font-normal	 text-primary font-roboto">
              Рассчитайте ипотеку быстро и просто
            </span>
            <div className="flex  xl:gap-16 xl:flex-row	lg:flex-row lg:flex-wrap	lg:gap-16   flex-col 	gap-8	  mb-8	">
              <Field
                id="initialPayment"
                component={Input}
                name="realEstateValue"
                defaultValue="10000000"
                title="Стоимость недвижимости"
              />
              <Field
                component={Select}
                name="city"
                search={true}
                text={'Город покупки недвижимости'}
                defaultValue="Выберите город"
                options={city}
              />
              <Field
                component={Select}
                name="mortgageTime"
                options={mortgage}
                text={'Когда вы планируете оформить ипотеку?'}
                defaultValue="Выберите период"
              />
            </div>
            <div className="flex xl:gap-16	 xl:flex-row lg:flex-row lg:gap-16	 lg:flex-wrap	 flex-col  gap-8  mb-8 xl:mb-20	">
              <Field
                component={Slider}
                name="initialPayment"
                min="0"
                title="Первоначальный взнос"
                variant="info"
                defaultValue={500000}
              />
              <Field
                component={Select}
                name="propertyType"
                text={'Тип недвижимости'}
                defaultValue="Выберите тип недвижимости"
                options={property}
              />
              <Field
                component={Select}
                name="realEstateOwnership"
                text={'Вы уже владеете недвижимостью?'}
                defaultValue="Выберите ответ"
                options={status}
              />
            </div>
            <div className="border-t border-stroke"></div>
            <div className="flex items-center xl:flex-row flex-col	lg:flex-row lg:gap-16	 mt-8  mb-16		xl:mb-10 xl:h-52	 ">
              <Field
                component={Slider}
                name="deadline"
                min="4"
                max="30"
                title="Cрок"
                minValue="4 года"
                maxValue="30 лет"
                variant="term"
                defaultValue={4}
              />
              <Field
                component={Slider}
                name="monthlyPayment"
                min="2654"
                max="51130"
                title="Ежемесячный платеж"
                minValue="2,654 ₪"
                maxValue="51,130 ₪"
                variant="payment"
                text="Увеличьте ежемесячный платеж и переплачивайте меньше"
                defaultValue={2.654}
              />
            </div>
          </div>
          <div className="border-t xl:py-8 py-6 px-5 border-stroke  lg:py-8 w-full flex lg:justify-end lg:pr-14	 xl:justify-end xl:pr-37">
            <Button disabled={isFormFilled} type={'submit'} title="Продолжить" />
          </div>
        </div>
      </Form>
    </Formik>
  );
};
