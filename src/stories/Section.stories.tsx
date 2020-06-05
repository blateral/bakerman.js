import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Section from 'components/base/Section';

const ExampleContent = () => (
    <div
        style={{
            textAlign: 'center',
        }}
    >
        Content
    </div>
);

storiesOf('Base / Section', module)
    .add('default', () => {
        return (
            <React.Fragment>
                <Section>
                    <ExampleContent />
                </Section>
                <Section>
                    <ExampleContent />
                </Section>
            </React.Fragment>
        );
    })
    .add('with bgColor', () => {
        return (
            <React.Fragment>
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
            </React.Fragment>
        );
    });
