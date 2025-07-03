'use client';

import {useEffect} from 'react';
import Image from 'next/image';
import logo from '../../../public/assets/images/logo.svg';
import {changeFontFamily} from '../utils/helpers';
import MoonIcon from './MoonIcon';
import SelectBox from './SelectBox';
import {useSelectedFontStore} from '../stores/selectedFontStore';
import {useDarkModeStore} from '../stores/darkModeStore';

export default function Header() {
  const isDarkMode = useDarkModeStore(state => state.isDarkMode);
  const font = useSelectedFontStore(state => state.selectedFont);
  const darkModeHandle = useDarkModeStore(state => state.darkModeHandle);

  useEffect(() => {
    if (isDarkMode) {
      document.querySelector('html')?.setAttribute('data-theme', 'dark');
    } else {
      document.querySelector('html')?.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const body = document.querySelector('body') as HTMLBodyElement;
    changeFontFamily(body, font);
  }, [font]);

  return (
    <header className="flex w-[90%] sm:w-[95%] lg:w-full lg:max-w-[736px] mx-auto justify-between mt-5 md:mt-10 mb-5 md:mb-10">
      <div className="grow-1">
        <Image
          src={logo}
          alt="Dictionary web app logo"
          width={28}
          height={32}
          className="sm:w-[32px] sm:h-[36px]"
        />
      </div>
      <SelectBox className="font-bold text-h5 sm:text-h4 text-end dark:text-(--clr-primary-100)" />
      <div className="theme-wrapper flex items-center gap-[1rem] sm:gap-[1.5rem] ml-[0.75rem] sm:ml-[1.5rem]">
        <input
          type="checkbox"
          name=""
          id=""
          onChange={darkModeHandle}
          className="bg-(--clr-primary-400) dark:bg-(--clr-accent-400) hover:bg-(--clr-accent-400) hover:cursor-pointer"
        />
        <MoonIcon />
      </div>
    </header>
  );
}
