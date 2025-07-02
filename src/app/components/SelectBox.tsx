'use client';

import {useRef, useEffect} from 'react';
import Image from 'next/image';
import iconArrowDown from '../../../public/assets/images/icon-arrow-down.svg';
import {twMerge} from 'tailwind-merge';
import {useStore} from '../store';
import {SelectBoxProps} from '../types/SelectBoxProps';

export default function SelectBox({className}: SelectBoxProps) {
  const selectMenuRef = useRef<HTMLDivElement>(null);
  const isSelectMenuOpen = useStore(state => state.isSelectMenuOpen);

  useEffect(() => {
    if (isSelectMenuOpen) {
      selectMenuRef.current!.style.display = 'inline-block';
    } else {
      selectMenuRef.current!.style.display = 'none';
    }
  }, [isSelectMenuOpen]);

  const handleChange = useStore(state => state.handleFontChange);

  const onAppear = useStore(state => state.selectMenuAppearHandle);

  return (
    <div className="relative content-center">
      <span
        className={twMerge(
          'flex gap-4 sm:gap-5 hover:cursor-pointer',
          className
        )}
        onClick={onAppear}>
        {useStore(state => state.selectedFont)}{' '}
        <Image src={iconArrowDown} alt="" width={12} height={6} />
      </span>
      <div
        ref={selectMenuRef}
        className="select-menu dark:bg-(--clr-primary-700) dark:text-(--clr-primary-100) shadow-[0_2px_10px_rgba(0,0,0,0.2)] dark:shadow-[0_2px_25px_rgb(164,69,237)] absolute top-10 right-0 bg-white rounded-2xl p-[1.5rem] z-2 w-[12rem] text-start">
        <span
          onClick={event => handleChange(event, 'Sans-serif')}
          className="block font-sans font-bold text-h4 hover:text-(--clr-accent-400) hover:cursor-pointer">
          Sans Serif
        </span>
        <span
          onClick={event => handleChange(event, 'Serif')}
          className="block font-serif font-bold text-h4 hover:text-(--clr-accent-400) hover:cursor-pointer">
          Serif
        </span>
        <span
          onClick={event => handleChange(event, 'Mono')}
          className="block font-mono font-bold text-h4 hover:text-(--clr-accent-400) hover:cursor-pointer">
          Mono
        </span>
      </div>
    </div>
  );
}
