'use client';

import React, {ChangeEvent} from 'react';

interface SearchInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({value, onChange}: SearchInputProps) {
  return (
    <div className="input-wrapper relative">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search for any word..."
        className={`inline-block border-2 border-transparent bg-primary-200 text-h3 font-bold text-primary-600 rounded-2xl py-3 px-3 max-w-[736px] w-full focus:border-(--clr-accent-400) focus:outline-none`}
      />
    </div>
  );
}
