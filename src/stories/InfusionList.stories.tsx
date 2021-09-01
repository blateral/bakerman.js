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
                cols: [
                    '11:00',
                    'Alle Außen Saunen | 85 – 90 °C',
                    'Gießkannen-Aufguss',
                    '*',
                ],
            },
            {
                cols: [
                    '11:00',
                    'Alle Außen Saunen | 85 – 90 °C',
                    'Gießkannen-Aufguss',
                    '*',
                ],
            },
            {
                cols: [
                    '12:00',
                    'Alle Außen Saunen | 85 – 90 °C',
                    'Gießkannen-Aufguss',
                    '*',
                ],
            },
            {
                cols: [
                    '13:00',
                    'Finnische Innen Sauna | 80 °C',
                    'Salz-Aufguss',
                    '***',
                ],
            },
            {
                cols: [
                    '14:00',
                    'Panorama Sauna | 95 °C',
                    'Lemon Tree-Aufguss',
                    '***',
                ],
            },
            {
                cols: [
                    '15:00',
                    'Finnische Innen Sauna | 80 °C',
                    'Wellness-Aufguss',
                    '**',
                ],
            },
            {
                cols: [
                    '16:00',
                    'Finnische Innen Sauna | 80 °C',
                    'Salz-Aufguss',
                    '***',
                ],
            },
            {
                cols: [
                    '17:00',
                    'Finnische Innen Sauna | 80 °C',
                    'Salz-Aufguss',
                    '***',
                ],
            },
            {
                cols: [
                    '18:00',
                    'Finnische Innen Sauna | 80 °C',
                    'Salz-Aufguss',
                    '***',
                ],
            },
        ]}
        bgImage={{ src: 'https://picsum.photos/1920/300' }}
    />
);
