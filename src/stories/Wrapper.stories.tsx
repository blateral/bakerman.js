import React from 'react';

import { Meta, Story } from '@storybook/react';
import Wrapper from 'components/base/Wrapper';

export default {
    title: 'Base / Wrapper',
    component: Wrapper,
} as Meta;

const ExampleContent = () => (
    <div
        style={{
            backgroundColor: 'lightblue',
            padding: 50,
            textAlign: 'center',
        }}
    >
        Content
    </div>
);

export const Default: Story = () => (
    <Wrapper>
        <ExampleContent />
    </Wrapper>
);

export const AddWhitespace: Story = () => (
    <Wrapper addWhitespace>
        <ExampleContent />
    </Wrapper>
);
