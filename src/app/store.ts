import {create} from 'zustand';

interface GeneralProps {
  selectedFont: string;
  handleFontChange: (
    event: React.MouseEvent<HTMLSpanElement>,
    value: string
  ) => void;
  isSelectMenuOpen: boolean;
  selectMenuAppearHandle: () => void;
  isDarkMode: boolean;
  darkModeHandle: () => void;
  query: string;
  handleQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useStore = create<GeneralProps>(set => ({
  selectedFont: 'Sans-serif',
  handleFontChange: (event, value) =>
    set(() => {
      event?.stopPropagation();
      return {selectedFont: value, isSelectMenuOpen: false};
    }),
  isSelectMenuOpen: false,
  selectMenuAppearHandle: () =>
    set(state => {
      return {isSelectMenuOpen: !state.isSelectMenuOpen};
    }),
  isDarkMode: false,
  darkModeHandle: () =>
    set(state => {
      return {isDarkMode: !state.isDarkMode};
    }),
  query: 'Keyboard',
  handleQueryChange: event =>
    set(() => {
      return {query: event.target.value};
    })
}));
