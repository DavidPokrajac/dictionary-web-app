import Image from 'next/image';

interface NoResultsProps {
  data: {title: string; message: string; resolution: string};
}

export default function NoResults({data}: NoResultsProps) {
  return (
    <div className="mt-[7rem] flex flex-col items-center gap-[2rem]">
      <Image
        src="/assets/images/confused-face.png"
        alt=""
        width={64}
        height={64}
      />
      <p className="text-h3 text-(--clr-primary-800) font-bold">{data.title}</p>
      <p className="text-h4 text-(--clr-primary-400)">
        {data.message} {data.resolution}
      </p>
    </div>
  );
}
