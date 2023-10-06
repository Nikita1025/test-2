import { ComponentProps } from 'react';

import CurrenciesIcon from '../../assets/icon/currencies-icon';
import WarningIcon from '../../assets/icon/warning-icon';

type InputType = {
  title: string;
  field: any;
  form: any;
} & ComponentProps<'input'>;
const error = 'border border-error';

export const Input = ({ title, field, form }: InputType) => {
  return (
    <div className={'relative flex flex-col w-80'}>
      <span className={'text-primary mb-3 text-base font-medium font-inter'}>
        {title}
      </span>
      <input
        {...field}
        className={`${
          form.errors[field.name] && error
        } px-6 py-3 text-xl  bg-base-inputs font-medium text-primary w-full rounded-md focus:outline-none  focus:ring-0`}
      />
      <CurrenciesIcon className={'absolute top-15-5 right-6'} />
      {form.touched[field.name] && form.errors[field.name] && (
        <div className="rounded mt-3	flex bg-error w-full py-1.5 px-3">
          <WarningIcon />
          <span className="text-primary pl-1 text-xs	font-normal	">
            {' '}
            {form.errors[field.name]}
          </span>
        </div>
      )}
    </div>
  );
};
