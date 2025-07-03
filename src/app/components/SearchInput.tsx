'use client';

import {SearchInputProps} from '../types/SearchInputProps';

export default function SearchInput({value, onChange}: SearchInputProps) {
  return (
    <div className="w-[90%] sm:w-[95%] lg:w-full lg:max-w-[736px] mx-auto">
      <div className="input-wrapper relative  before:bg-(--clr-primary-200) dark:before:bg-(--clr-primary-700)">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Search for any word..."
          className={`${value === '' ? 'border-(--clr-error-400)' : 'border-transparent focus:border-(--clr-accent-400) '} inline-block border-2 bg-(--clr-primary-200) text-h3 font-bold text-(--clr-primary-600) rounded-2xl py-3 px-3 sm:px-4 lg:max-w-[736px] w-full focus:outline-none dark:bg-(--clr-primary-700) dark:text-(--clr-primary-100) hover:cursor-pointer`}
        />
      </div>
      {value === '' && (
        <p className="text-start text-(--clr-error-400) text-h3">
          Whoops, can&lsquo;t be empty...
        </p>
      )}
    </div>
  );
}
