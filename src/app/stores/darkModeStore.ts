import {create} from 'zustand';
import {persist} from 'zustand/middleware';

interface isDarkModeProps {
  isDarkMode: boolean;
  darkModeHandle: () => void;
}

export const useDarkModeStore = create<isDarkModeProps>()(
  persist(
    set => ({
      isDarkMode: false,
      darkModeHandle: () =>
        set(state => {
          return {isDarkMode: !state.isDarkMode};
        })
    }),
    {name: 'isDarkMode'}
  )
);
