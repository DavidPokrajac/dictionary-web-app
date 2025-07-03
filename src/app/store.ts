import {create} from 'zustand';

interface GeneralProps {
  isSelectMenuOpen: boolean;
  selectMenuAppearHandle: () => void;
  query: string;
  handleQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useStore = create<GeneralProps>(set => ({
  isSelectMenuOpen: false,
  selectMenuAppearHandle: () =>
    set(state => {
      return {isSelectMenuOpen: !state.isSelectMenuOpen};
    }),
  query: 'Keyboard',
  handleQueryChange: event =>
    set(() => {
      return {query: event.target.value};
    })
}));
