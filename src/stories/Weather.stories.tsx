import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Weather from 'components/sections/Weather';
import { IconType } from 'components/base/icons/WeatherIcon';

export default {
    title: 'sections/Weather',
    component: Weather,
} as Meta;

export const Default: Story = () => (
    <Weather
        date={new Date()}
        temperature="26"
        lakeTemp="22"
        weatherIcon={'A' as IconType}
        bgImage={{ src: 'https://picsum.photos/1920/300' }}
    />
);
