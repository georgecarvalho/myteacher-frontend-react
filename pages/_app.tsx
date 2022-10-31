import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Cabecalho from '../src/components/Cabecalho/Cabecalho'
import { ThemeProvider } from '@mui/material'
import theme from '../src/themes/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Cabecalho></Cabecalho>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
