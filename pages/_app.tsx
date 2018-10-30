import * as React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';

export default class extends App {
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
