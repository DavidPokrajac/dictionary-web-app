'use client';

import React, {ChangeEvent} from 'react';

interface SearchInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({value, onChange}: SearchInputProps) {
  return (
    <div className="w-[90%] mx-auto">
      <div className="input-wrapper relative">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Search for any word..."
          className={`${value === '' ? 'border-(--clr-error-400)' : 'border-transparent focus:border-(--clr-accent-400) '} inline-block border-2 bg-primary-200 text-h3 font-bold text-primary-600 rounded-2xl py-3 px-3 max-w-[736px] w-full focus:outline-none`}
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
