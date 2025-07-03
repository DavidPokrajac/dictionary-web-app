import {create} from 'zustand';
import {persist} from 'zustand/middleware';

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
          return {selectedFont: value, isSelectMenuOpen: false};
        })
    }),
    {name: 'selected-font'}
  )
);
