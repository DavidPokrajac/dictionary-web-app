import {ErrorProps} from '../types/ErrorProps';

export default function Error({error}: ErrorProps) {
  return (
    <div className="flex flex-col justify-center text-(--clr-error-400) text-2xl sm:text-3xl w-[90%] sm:w-[95%] lg:w-full lg:max-w-[736px] mx-auto rounded-md">
      Error: {error}
    </div>
  );
}
