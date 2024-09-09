import { AppProps } from 'next/app'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>het</title>
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
`
