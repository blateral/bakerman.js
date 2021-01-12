import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Heading from 'components/typography/Heading';

const Seperator = () => (
    <React.Fragment>
        <br />
        <br />
        <hr />
        <br />
        <br />
    </React.Fragment>
);

export default {
    title: 'Typography / Heading',
    component: Heading,
} as Meta;

export const Default: Story = () => <Heading>Lorem Ipsum Dolor Sit</Heading>;

export const WithSize: Story = () => (
    <div>
        <Heading size={1}>Lorem Ipsum Dolor Sit</Heading>
        <Seperator />
        <Heading size={2}>Lorem Ipsum Dolor Sit</Heading>
    </div>
);

export const WithColor: Story = () => (
    <div>
        <Heading textColor={'green'}>Lorem Ipsum Dolor Sit</Heading>
        <Heading textColor={'hotpink'}>Lorem Ipsum Dolor Sit</Heading>
    </div>
);

export const RenderAs: Story = () => (
    <div>
        <Heading as="h1">Lorem Ipsum Dolor Sit</Heading>
        <Seperator />
        <Heading as="h2">Lorem Ipsum Dolor Sit</Heading>
        <Seperator />
        <Heading as="h3">Lorem Ipsum Dolor Sit</Heading>
        <Seperator />
        <Heading as="h4">Lorem Ipsum Dolor Sit</Heading>
        <Seperator />
        <Heading as="h5">Lorem Ipsum Dolor Sit</Heading>
        <Seperator />
        <Heading as="h6">Lorem Ipsum Dolor Sit</Heading>
        <Seperator />
        <Heading as="span">Lorem Ipsum Dolor Sit</Heading>
        <Seperator />
        <Heading as="div">Lorem Ipsum Dolor Sit</Heading>
    </div>
);
