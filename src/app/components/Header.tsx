'use client';

import {useState, useEffect} from 'react';
import Image from 'next/image';
import logo from '../../../public/assets/images/logo.svg';
import {changeFontFamily} from '../utils/helpers';
import MoonIcon from './MoonIcon';
import SelectBox from './SelectBox';

export default function Header() {
  const [isSelectMenuOpen, setIsSelectMenuOpen] = useState<boolean>(false);
  const [selectedFont, setSelectedFont] = useState<string>('Sans-serif');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  function darkModeHandle() {
    setIsDarkMode(!isDarkMode);
  }

  function selectMenuAppearHandle() {
    setIsSelectMenuOpen(!isSelectMenuOpen);
  }

  useEffect(() => {
    if (isDarkMode) {
      document.querySelector('html')?.setAttribute('data-theme', 'dark');
    } else {
      document.querySelector('html')?.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  function fontOptionsHandle(
    event: React.MouseEvent<HTMLSpanElement>,
    value: string
  ) {
    event.stopPropagation();
    setSelectedFont(value);
    setIsSelectMenuOpen(false);
  }

  useEffect(() => {
    const body = document.querySelector('body') as HTMLBodyElement;
    changeFontFamily(body, selectedFont);
  }, [selectedFont]);

  return (
    <header className="flex w-[90%] sm:w-[95%] lg:w-full lg:max-w-[736px] mx-auto justify-between mt-5 md:mt-10 mb-5 md:mb-10">
      <div className="grow-1">
        <Image
          src={logo}
          alt=""
          width={28}
          height={32}
          className="sm:w-[32px] sm:h-[36px]"
        />
      </div>
      <SelectBox
        value={selectedFont}
        onChange={fontOptionsHandle}
        className="font-bold text-h5 sm:text-h4 text-end dark:text-(--clr-primary-100)"
        onAppear={selectMenuAppearHandle}
        isSelectMenuOpen={isSelectMenuOpen}
      />
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
