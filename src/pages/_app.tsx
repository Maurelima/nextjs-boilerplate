import React from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import '../styles/tailwind.css'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            <GlobalStyle />
        </ThemeProvider>
    )
}
export default MyApp
