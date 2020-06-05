import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Icon from 'components/base/Icon';

storiesOf('Base / Icon', module)
    .add('angle-bottom', () => <Icon type="angle-bottom" />)
    .add('angle-left', () => <Icon type="angle-left" />)
    .add('angle-right', () => <Icon type="angle-right" />)
    .add('angle-top', () => <Icon type="angle-top" />);
