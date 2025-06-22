import Image from 'next/image';
import logo from '../../../public/assets/images/logo.svg';

export default function Header() {
  return (
    <header className="flex">
      <Image src={logo} alt="" />
      <select>
        <option value="sans-serif">Sans Serif</option>
        <option value="serif">Serif</option>
        <option value="mono">Mono</option>
      </select>
    </header>
  );
}
