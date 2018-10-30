import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

import { ServerStyleSheet } from 'styled-components';

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
                    {this.props.styleTags}
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
