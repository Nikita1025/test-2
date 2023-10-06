import React, { ChangeEvent, useState } from 'react';

import { useFormikContext } from 'formik';

import CurrenciesIcon from '../../assets/icon/currencies-icon';
import InfoIcon from '../../assets/icon/info-icon';
import WarningActiveIcon from '../../assets/icon/warning-active-icon';
import WarningIcon from '../../assets/icon/warning-icon';
import { calculateMonthlyPayment } from '../../common/counting/calculateMonthlyPayment';

type SliderType = {
  min: string;
  variant: 'info' | 'term' | 'payment';
  title: string;
  text?: string;
  maxValue?: string;
  minValue?: string;
  field: any;
  form: any;
  max: number;
  defaultValue: string;
};
const error = 'border border-error';

export const Slider = ({
  min,
  max,
  variant,
  title,
  field,
  form,
  text,
  minValue,
  defaultValue,
  maxValue,
}: SliderType) => {
  const [value1, setValue] = useState(defaultValue);
  const { setFieldValue } = useFormikContext();
  const { getFieldProps } = useFormikContext();
  const interestRate = 5;
  const { value: loanAmount } = getFieldProps('realEstateValue');
  const { value: downPayment } = getFieldProps('initialPayment');
  const { value: loanTerm } = getFieldProps('deadline');
  let percentage = (Number(value1) / loanAmount) * 100;
  let percentageValue = Math.ceil(percentage);
  const monthlyPayment = calculateMonthlyPayment(
    loanAmount,
    interestRate,
    loanTerm,
    downPayment,
  );
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    variant === 'payment' ? setValue(monthlyPayment) : setValue(e.target.value);
    setFieldValue(field.name, variant === 'payment' ? monthlyPayment : e.target.value);
  };

  const infoWindow = variant === 'info' || variant === 'payment';
  const minMaxValue = variant === 'term' || variant === 'payment';
  const currenciesIcon = variant === 'info' || variant === 'payment';

  return (
    <div className="flex flex-col w-80 h-36 relative ">
      <div className="flex items-center mb-3">
        <span className={'text-primary mr-1.5 text-base font-medium font-inter'}>
          {title}
        </span>
        {variant === 'info' && <InfoIcon />}
      </div>
      <div className=" flex justify-between ">
        <input
          {...field}
          value={variant === 'payment' ? monthlyPayment : value1}
          onChange={handleChange}
          className={`${
            form.touched[field.name] && form.errors[field.name] && error
          } px-6 py-3 bg-base-inputs rounded-md text-primary w-full focus:outline-none  focus:ring-0`}
        />
        {currenciesIcon && <CurrenciesIcon className={'absolute top-15-5 right-6'} />}
      </div>

      <div className="w-full absolute top-17">
        <input
          {...field}
          type="range"
          min={min}
          value={variant === 'payment' ? monthlyPayment : value1.toLocaleString()}
          max={variant === 'info' ? loanAmount : max}
          onChange={handleChange}
          className="slider w-full border-none  accent-accent-primary h-1"
        />
        {minMaxValue && (
          <div className="mt-1.5 flex justify-between	h-5	 ">
            <span className="text-primary mr-1 text-sm font-normal	 font-inter">
              {minValue}
            </span>
            <span className="text-primary mr-1 text-sm font-normal	 font-inter">
              {maxValue}
            </span>
          </div>
        )}

        {infoWindow && (
          <div className="flex py-1.5 px-3 mt-3		bg-base-secondary rounded">
            <WarningActiveIcon className="mr-1	" />
            <span className="text-primary text-xs font-normal pt-0.5 font-inter">
              {text}
              {variant === 'info' &&
                `Cумма финансирования: ${value1} ₪ Процент финансирования:${percentageValue}%`}
            </span>
          </div>
        )}
        {form.touched[field.name] && form.errors[field.name] && (
          <div className="rounded mt-3	flex bg-error w-full py-1.5 px-3">
            <WarningIcon />
            <span className="text-primary pl-1 text-xs	font-normal	">
              {form.errors[field.name]}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
