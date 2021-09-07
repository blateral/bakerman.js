import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Poster from 'components/sections/Poster';

export default {
    title: 'sections/Poster',
    component: Poster,
} as Meta;

export const Default: Story = () => (
    <Poster image={{ src: 'https://picsum.photos/1920/1080' }} />
);
