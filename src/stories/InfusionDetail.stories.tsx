import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import InfusionDetail from 'components/sections/InfusionDetail';

export default {
    title: 'sections/InfusionDetail',
    component: InfusionDetail,
} as Meta;

export const Default: Story = () => (
    <InfusionDetail
        date="2021-08-31 11:00:00"
        details={[
            {
                label: 'Sauna',
                text: 'Alle Aussen Sauna | 85 – 90 °C',
            },
            {
                label: 'Aufguss',
                text: 'Giesskannen-Aufguss',
            },
            {
                label: 'Stufe',
                text: '*',
            },
            {
                label: 'Duftstoff',
                text: 'Wechselnd',
            },
            {
                label: 'Wirkung',
                text: '–',
            },
            {
                label: 'Besonderheit',
                text: 'Beduftungsreise ohne Wedeln mit Regenkelle',
            },
            {
                label: 'Beigaben',
                text: '–',
            },
        ]}
        bgImage={{ src: 'https://picsum.photos/1920/300' }}
    />
);
