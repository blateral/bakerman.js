import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Section from 'components/base/Section';

const ExampleContent = () => (
    <div
        style={{
            position: 'relative',
            textAlign: 'center',
        }}
    >
        Content
    </div>
);

export default {
    title: 'Base / Section',
    component: Section,
} as Meta;

export const Default: Story = () => (
    <>
        <Section>
            <ExampleContent />
        </Section>
        <Section>
            <ExampleContent />
        </Section>
    </>
);

export const WithBgColor: Story = () => (
    <>
        <Section>
            <ExampleContent />
        </Section>
        <Section>
            <ExampleContent />
        </Section>
        <Section bgColor="hotpink">
            <ExampleContent />
        </Section>
        <Section bgColor="hotpink">
            <ExampleContent />
        </Section>
        <Section bgColor="hotpink">
            <ExampleContent />
        </Section>
        <Section bgColor="green">
            <ExampleContent />
        </Section>
        <Section bgColor="blue">
            <ExampleContent />
        </Section>
    </>
);
