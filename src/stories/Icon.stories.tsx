import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import AngleBottom from 'components/base/icons/AngleBottom';
import AngleLeft from 'components/base/icons/AngleLeft';
import AngleRight from 'components/base/icons/AngleRight';
import AngleTop from 'components/base/icons/AngleTop';

export default {
    title: 'Base / Icons',
    subcomponents: { AngleBottom, AngleLeft },
} as Meta;

export const Bottom: Story = () => <AngleBottom />;
Bottom.storyName = 'AngleBottom';

export const Left: Story = () => <AngleLeft />;
Left.storyName = 'AngleLeft';

export const Right: Story = () => <AngleRight />;
Left.storyName = 'AngleRight';

export const Top: Story = () => <AngleTop />;
Left.storyName = 'AngleTop';
