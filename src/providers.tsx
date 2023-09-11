import { ThemeProvider, responsiveFontSizes, createTheme, CssBaseline } from '@mui/material'
import type { FC, PropsWithChildren } from 'react'

export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={responsiveFontSizes(createTheme({}))}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)