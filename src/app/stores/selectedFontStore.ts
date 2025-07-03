import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import {useStore} from './store';

interface SelectedFontProps {
  selectedFont: string;
  handleFontChange: (
    event: React.MouseEvent<HTMLSpanElement>,
    value: string
  ) => void;
}

export const useSelectedFontStore = create<SelectedFontProps>()(
  persist(
    set => ({
      selectedFont: '',
      handleFontChange: (event, value) =>
        set(() => {
          event?.stopPropagation();
          useStore.setState({isSelectMenuOpen: false});
          return {selectedFont: value};
        })
    }),
    {name: 'selected-font'}
  )
);
