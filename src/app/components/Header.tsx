'use client';

import {useState, useEffect} from 'react';
import Image from 'next/image';
import logo from '../../../public/assets/images/logo.svg';
import moon from '../../../public/assets/images/icon-moon.svg';
import {changeFontFamily} from '../utils/helpers';

export default function Header() {
  const [selectedFont, setSelectedFont] = useState<string>('');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  function darkModeHandle() {
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    if (isDarkMode) {
      document.querySelector('html')?.setAttribute('data-theme', 'dark');
    } else {
      document.querySelector('html')?.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  function fontOptionsHandle(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedFont(event.target.value);
  }

  useEffect(() => {
    const body = document.querySelector('body') as HTMLBodyElement;
    changeFontFamily(body, selectedFont);
  }, [selectedFont]);

  console.log(isDarkMode);

  return (
    <header className="flex w-[90%] sm:w-[95%] lg:max-w-[736px] mx-auto justify-between mt-5 md:mt-10">
      <div className="grow-1">
        <Image
          src={logo}
          alt=""
          width={28}
          height={32}
          className="sm:w-[32px] sm:h-[36px]"
        />
      </div>
      <select
        value={selectedFont}
        onChange={fontOptionsHandle}
        className="font-bold text-h5 sm:text-h4 text-end dark:text-(--clr-primary-100)">
        <option value="sans-serif">Sans Serif</option>
        <option value="serif">Serif</option>
        <option value="mono">Mono</option>
      </select>
      <div className="theme-wrapper flex items-center gap-[1.5rem] ml-[1.5rem]">
        <input
          type="checkbox"
          name=""
          id=""
          onChange={darkModeHandle}
          className="bg-(--clr-primary-400) dark:bg-(--clr-accent-400)"
        />
        <Image src={moon} alt="" width={20} height={20} />
      </div>
    </header>
  );
}
