import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type {InitialState, SelectedLink} from "./MainSlice.types.ts";

const initialState: InitialState = {
  isOpen: false,
  selectedLink: {
    active: false,
    index: 0,
  },
  isMounted: false
};

export const mainSlice = createSlice({
  name: 'link',
  initialState,
  reducers: {
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    },
    setSelectedLink: (state, action: PayloadAction<SelectedLink>) => {
      state.selectedLink.active = action.payload.active;
      state.selectedLink.index = action.payload.index
    },
    setIsMounted: (state, action: PayloadAction<boolean>) => {
      state.isMounted = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setIsOpen, setSelectedLink, setIsMounted } = mainSlice.actions;

export default mainSlice.reducer;
