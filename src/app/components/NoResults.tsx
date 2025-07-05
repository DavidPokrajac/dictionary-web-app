import Image from 'next/image';
import confusedEmoji from '../../../public/assets/images/confused-face.png';
import {NoResultsProps} from '../types/NoResultsProps';

export default function NoResults({data}: NoResultsProps) {
  return (
    <div className="flex flex-col items-center gap-[2rem] mx-auto w-[90%] max-w-[736px]">
      <Image
        className="confused-face"
        src={confusedEmoji}
        alt=""
        width={64}
        height={64}
        priority={true}
      />
      <p className="text-h3 text-(--clr-primary-800) dark:text-(--clr-primary-100) font-bold">
        {data.title}
      </p>
      <p className="text-h4 text-(--clr-primary-400)">
        {data.message} {data.resolution}
      </p>
    </div>
  );
}
