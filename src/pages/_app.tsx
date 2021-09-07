import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
     html {
        font-size: 100%;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        margin: 0;
        color: hotpink;
        font-family: 'MS Comic Sans';
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
`;

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
