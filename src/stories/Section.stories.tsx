import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Section from '../components/base/Section';

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
    .add(
        'standard',
        withInfo('')(() => {
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
    )
    .add(
        'bgColor prop',
        withInfo(
            'Sections mit gleichen `bgColor` reduzieren ihren Innenabstand!'
        )(() => {
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
        })
    );
