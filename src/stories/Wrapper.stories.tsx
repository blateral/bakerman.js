import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Wrapper from '../components/base/Wrapper';

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

storiesOf('Base / Wrapper', module).add(
    'standard',
    withInfo('')(() => {
        return (
            <Wrapper>
                <ExampleContent />
            </Wrapper>
        );
    })
);
