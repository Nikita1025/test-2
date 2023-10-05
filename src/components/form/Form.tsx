import React from 'react';

import { Field, Formik, Form } from 'formik';

import { city, mortgage, property, status } from '../../common/constants/costants';
import { validationSchema } from '../../common/schema/shema';
import { submitForm } from '../../store/app-slice';
import { useAppDispatch } from '../../store/store';
import { RequestSubmitFormType } from '../../store/types';
import { Button } from '../ui-kit/Button';
import { Input } from '../ui-kit/Input';
import { Select } from '../ui-kit/Select';
import { Slider } from '../ui-kit/Slider';

export const FormPage = () => {
  const dispatch = useAppDispatch();

  const initialValues: RequestSubmitFormType = {
    realEstateValue: 100000,
    city: '',
    mortgageTime: '',
    initialPayment: 500000,
    propertyType: '',
    realEstateOwnership: '',
    deadline: 4,
    monthlyPayment: 2.654,
  };
  const handleSubmit = (values: RequestSubmitFormType) => {
    dispatch(submitForm(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="h-screen">
          <div className="pt-30	px-32	">
            <span className="text-5xl mb-11	block	font-normal	 text-primary font-roboto">
              Рассчитайте ипотеку быстро и просто
            </span>
            <div className="flex justify-between  mb-8	">
              <Field
                component={Input}
                name="realEstateValue"
                defaultValue={10000000}
                title="Стоимость недвижимости"
              />
              <Field
                component={Select}
                register="city"
                text={'Город покупки недвижимости'}
                defaultValue="Выберите город"
                options={city}
              />
              <Field
                component={Select}
                register="mortgageTime"
                options={mortgage}
                text={'Когда вы планируете оформить ипотеку?'}
                defaultValue="Выберите период"
              />
            </div>
            <div className="flex justify-between  mb-20	">
              <Field
                component={Slider}
                register="initialPayment"
                min="0"
                max="100000"
                title="Первоначальный взнос"
                variant="info"
                text="Cумма финансирования:500,000 ₪ Процент финансирования:50%"
              />
              <Field
                component={Select}
                register="propertyType"
                text={'Тип недвижимости'}
                defaultValue="Выберите тип недвижимости"
                options={property}
              />
              <Field
                component={Select}
                register="realEstateOwnership"
                text={'Вы уже владеете недвижимостью?'}
                defaultValue="Выберите ответ"
                options={status}
              />
            </div>
            <div className="border-t border-stroke"></div>
            <div className="flex justify-between  mt-8	mb-10 h-45 ">
              <Field
                component={Slider}
                name="deadline"
                min="4"
                max="30"
                title="Cрок"
                minValue="4 года"
                maxValue="30 лет"
                variant="term"
              />
              <Field
                component={Slider}
                name="monthlyPayment"
                min="2.654"
                max="51.130"
                title="Cрок"
                minValue="2,654 ₪"
                maxValue="51,130 ₪"
                variant="payment"
                text="Увеличьте ежемесячный платеж и переплачивайте меньше"
              />
            </div>
          </div>
          <div className="border-t py-8 border-stroke flex justify-end pr-37">
            <Button disabled={false} type={'submit'} title="Продолжить" />
          </div>
        </div>
      </Form>
    </Formik>
  );
};
