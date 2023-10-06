import { ChangeEvent } from 'react';

import SearchIcon from '../../assets/icon/search-icon';
type SearchInputType = {
  setQuery: (query: string) => void;
};
export const SearchInput = ({ setQuery }: SearchInputType) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className="  text-sm my-2 relative	mx-2.5">
      <SearchIcon className="absolute top-3	left-3	" />
      <input
        className="pl-11 pr-4		 py-3	border border-stroke  bg-base-inputs font-medium text-primary w-full rounded-md focus:outline-none  focus:ring-0"
        placeholder="Поиск.."
        onChange={onChangeHandler}
      />
    </div>
  );
};
