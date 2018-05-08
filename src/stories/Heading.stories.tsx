import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Heading from '../components/typography/Heading';

storiesOf('Heading', module).add(
    'as default',
    withInfo('')(() => {
        return (
            <React.Fragment>
                <Heading>Lorem Ipsum Dolor Sit</Heading>
            </React.Fragment>
        );
    })
);
