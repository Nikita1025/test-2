import React, { useState } from 'react';

import { useFormikContext } from 'formik';

import CarterDownIcon from '../../assets/icon/carter-down-icon';
import CarterUpIcon from '../../assets/icon/carter-up-icon';
import VectorIcon from '../../assets/icon/vector-icon';
import WarningIcon from '../../assets/icon/warning-icon';
import { OptionType } from '../../store/types';

import { SearchInput } from './searchInput';

type SelectType = {
  text: any;
  options: OptionType[];
  defaultValue: string;
  field: any;
  form: any;
  search?: boolean;
};

const defaultStyle = 'text-disabled  text-base font-normal font-inter';
const changeCity = 'text-primary text-base font-normal font-inter';
const selectedStyle = 'border-accent-primary border-solid border-border-1';
const error = 'border border-error';

export const Select = ({
  text,
  search,
  options,
  defaultValue,
  field,
  form,
}: SelectType) => {
  const [selected, setSelected] = useState(false);
  const [value, setValue] = useState('');
  const [query, setQuery] = useState('');

  const { setFieldValue } = useFormikContext();
  const onClickHandler = () => {
    setSelected(!selected);
  };

  const onClickCityHandler = (city: string) => {
    setValue(city);
    setSelected(!selected);
    setFieldValue(field.name, city);
  };
  const customStyle =
    (selected && selectedStyle) ||
    (form.touched[field.name] && form.errors[field.name] && error);

  return (
    <div>
      <div className={'flex flex-col w-80 relative'}>
        <span className={'text-primary mb-3 text-base font-medium font-inter'}>
          {text}
        </span>
        <div
          onClick={onClickHandler}
          className={`${customStyle} px-6 py-3 flex justify-between bg-base-inputs rounded-md text-primary`}
        >
          <span className={`${value.length === 0 ? defaultStyle : changeCity}`}>
            {value.length === 0 ? defaultValue : value}
          </span>
          {!selected ? <CarterDownIcon /> : <CarterUpIcon />}
        </div>
        {selected && (
          <div className=" z-10	absolute w-full right-0 top-24 bg-base-inputs rounded scroll-py-2	 h-44 overflow-auto">
            {search === true && <SearchInput setQuery={setQuery} />}
            {options
              .filter(post => {
                if (query === '') {
                  return post;
                } else if (post.text.toLowerCase().includes(query.toLowerCase())) {
                  return post;
                }
              })
              .map((el, index) => (
                <div
                  key={index}
                  onClick={() => onClickCityHandler(el.text)}
                  className="flex py-2.5 justify-between px-4 text-primary text-base font-medium font-inter"
                >
                  {el.text}
                  {value === el.text && <VectorIcon />}
                </div>
              ))}
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
