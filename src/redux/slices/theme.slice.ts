import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ThemeSliceState {
  theme: 'light' | 'dark' | 'system'
}

const getDefaultTheme = () => {
  if (typeof window === 'undefined') return 'dark';
  return window.localStorage.getItem('theme') || 'dark' as any;
}

const initialState: ThemeSliceState = {
  theme: getDefaultTheme(),
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeSliceState['theme']>) {
      state.theme = action.payload;
      localStorage.setItem('theme', action.payload);
    }
  },
})

export const { setTheme } = themeSlice.actions

