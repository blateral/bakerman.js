import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Gallery } from 'b.kit';
import { DefaultTheme, ThemeProvider } from 'styled-components';

const customTheme: DefaultTheme = {
    colors: {
        mono: {
            light: 'orange',
        },
    },
};

storiesOf('Kit / Gallery', module).add('default', () => (
    <ThemeProvider theme={customTheme}>
        <Gallery
            hasBack
            images={[
                {
                    size: 'full',
                    small: 'https://unsplash.it/500/246?image=400',
                    medium: 'https://unsplash.it/640/315?image=400',
                    large: 'https://unsplash.it/1024/504?image=400',
                    xlarge: 'https://unsplash.it/1440/710?image=400',
                },
                {
                    size: 'half',
                    small: 'https://unsplash.it/630/630?image=401',
                    medium: 'https://unsplash.it/315/315?image=401',
                    large: 'https://unsplash.it/507/507?image=401',
                    xlarge: 'https://unsplash.it/710/710?image=401',
                },
                {
                    size: 'half',
                    small: 'https://unsplash.it/630/630?image=402',
                    medium: 'https://unsplash.it/315/315?image=402',
                    large: 'https://unsplash.it/507/507?image=402',
                    xlarge: 'https://unsplash.it/710/710?image=402',
                },
            ]}
        />
    </ThemeProvider>
));
