import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import InfusionList from 'components/sections/InfusionList';

export default {
    title: 'sections/InfusionList',
    component: InfusionList,
} as Meta;

export const Default: Story = () => (
    <InfusionList
        title="Genießen Sie heute unsere Aufgüsse"
        rowTitle={['Zeit', 'Sauna', 'Aufguss', 'Stufe']}
        row={[
            {
                cols: {
                    time: '08:00',
                    data: [
                        'Alle Außen Saunen | 85 – 90 °C',
                        'Gießkannen-Aufguss',
                        '*',
                    ],
                },
            },
            {
                cols: {
                    time: '09:00',
                    data: [
                        'Alle Außen Saunen | 85 – 90 °C',
                        'Gießkannen-Aufguss',
                        '*',
                    ],
                },
            },
            {
                cols: {
                    time: '10:00',
                    data: [
                        'Alle Außen Saunen | 85 – 90 °C',
                        'Gießkannen-Aufguss',
                        '*',
                    ],
                },
            },
            {
                cols: {
                    time: '13:00',
                    data: [
                        'Finnische Innen Sauna | 80 °C',
                        'Salz-Aufguss',
                        '***',
                    ],
                },
            },
            {
                cols: {
                    time: '14:00',
                    data: [
                        'Panorama Sauna | 95 °C',
                        'Lemon Tree-Aufguss',
                        '***',
                    ],
                },
            },
            {
                cols: {
                    time: '15:00',
                    data: [
                        'Finnische Innen Sauna | 80 °C',
                        'Wellness-Aufguss',
                        '**',
                    ],
                },
            },
            {
                cols: {
                    time: '16:00',
                    data: [
                        'Finnische Innen Sauna | 80 °C',
                        'Salz-Aufguss',
                        '***',
                    ],
                },
            },
            {
                cols: {
                    time: '17:00',
                    data: [
                        'Finnische Innen Sauna | 80 °C',
                        'Salz-Aufguss',
                        '***',
                    ],
                },
            },
            {
                cols: {
                    time: '18:00',
                    data: [
                        'Finnische Innen Sauna | 80 °C',
                        'Salz-Aufguss',
                        '***',
                    ],
                },
            },
        ]}
    />
);
