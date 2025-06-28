'use client';

import {useState, useEffect} from 'react';
import Image from 'next/image';
import logo from '../../../public/assets/images/logo.svg';
import {changeFontFamily} from '../utils/helpers';

export default function Header() {
  const [selectedFont, setSelectedFont] = useState<string>('');

  function fontOptionsHandle(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedFont(event.target.value);
  }

  useEffect(() => {
    const body = document.querySelector('body') as HTMLBodyElement;
    changeFontFamily(body, selectedFont);
  }, [selectedFont]);

  return (
    <header className="flex w-[90%] max-w-full lg:max-w-[736px] mx-auto justify-between mt-5 md:mt-10">
      <Image src={logo} alt="" width={28} height={32} />
      <select
        value={selectedFont}
        onChange={fontOptionsHandle}
        className="font-bold text-h5 md:text-h4">
        <option value="sans-serif">Sans Serif</option>
        <option value="serif">Serif</option>
        <option value="mono">Mono</option>
      </select>
    </header>
  );
}
