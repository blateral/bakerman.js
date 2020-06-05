import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';

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

export default class extends Document<{
    styleTags: any;
}> {
    static getInitialProps({ renderPage }: { renderPage: any }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage((App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />)
        );
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }

    render() {
        return (
            <html>
                <Head>
                    <base href="/" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <GlobalStyle />
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
