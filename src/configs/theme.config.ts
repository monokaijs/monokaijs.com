import { createTheme, NextUIProvider } from "@nextui-org/react"

export const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {}, // override dark theme colors
  }
});

export const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {}
  }
})
