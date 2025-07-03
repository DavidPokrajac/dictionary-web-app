import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {useDarkModeStore} from '../stores/darkModeStore';

export default function Loading() {
  const isDarkMode = useDarkModeStore(state => state.isDarkMode);
  return (
    <div className="flex flex-col h-[80vh] justify-center w-[90%] sm:w-[95%] lg:w-full lg:max-w-[736px] mx-auto">
      <h1 className="font-bold text-3xl sm:text-5xl dark:text-(--clr-primary-100)">
        Loading...
      </h1>
      <SkeletonTheme
        baseColor={isDarkMode ? 'rgb(164, 69, 237, 0.2)' : 'rgb(164, 69, 237)'}
        highlightColor={
          isDarkMode ? 'rgb(218, 197, 235)' : 'rgb(218, 197, 235)'
        }
        duration={1}>
        <Skeleton count={1} className="mt-[2rem]" />
      </SkeletonTheme>
    </div>
  );
}
