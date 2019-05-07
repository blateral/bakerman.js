import * as React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { loadFonts } from '../utils/fontloader';

export default class extends App {
    componentDidMount() {
        loadFonts();
    }

    render() {
        const { Component } = this.props;

        return (
            <Container>
                <Head>
                    <title>Title</title>
                </Head>
                <Component />
            </Container>
        );
    }
}
