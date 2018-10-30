import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

storiesOf('Test', module).add(
    'standard',
    withInfo('')(() => {
        return <h1>Hallo</h1>;
    })
);
