import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Grid from '../components/base/Grid';

const ExampleCol = (props: any) => {
    return (
        <div
            style={{
                backgroundColor: 'lightblue',
                padding: 20,
                textAlign: 'center',
                marginBottom: 20,
            }}
        >
            {props.children}
        </div>
    );
};

storiesOf('Base > Grid', module)
    .add(
        'default',
        withInfo('')(() => {
            return (
                <Grid.Row>
                    <Grid.Col>
                        <ExampleCol>100 %</ExampleCol>
                    </Grid.Col>
                    <Grid.Col span={14 / 28}>
                        <ExampleCol>50 %</ExampleCol>
                    </Grid.Col>
                    <Grid.Col span={14 / 28}>
                        <ExampleCol>50 %</ExampleCol>
                    </Grid.Col>
                    <Grid.Col span={4 / 12}>
                        <ExampleCol>33 %</ExampleCol>
                    </Grid.Col>
                    <Grid.Col span={4 / 12}>
                        <ExampleCol>33 %</ExampleCol>
                    </Grid.Col>
                    <Grid.Col span={4 / 12}>
                        <ExampleCol>33 %</ExampleCol>
                    </Grid.Col>
                </Grid.Row>
            );
        })
    )
    .add(
        'span mit Breakpoints',
        withInfo('')(() => {
            return (
                <Grid.Row>
                    <Grid.Col
                        span={3 / 4}
                        medium={{
                            span: 1 / 2,
                        }}
                        large={{
                            span: 1 / 3,
                        }}
                        xlarge={{
                            span: 1 / 4,
                        }}
                    >
                        <ExampleCol>Content A</ExampleCol>
                    </Grid.Col>
                    <Grid.Col
                        span={2 / 4}
                        medium={{
                            span: 1 / 2,
                        }}
                        large={{
                            span: 1 / 3,
                        }}
                        xlarge={{
                            span: 1 / 4,
                        }}
                    >
                        <ExampleCol>Content B</ExampleCol>
                    </Grid.Col>
                    <Grid.Col
                        medium={{
                            span: 1 / 2,
                        }}
                        large={{
                            span: 1 / 3,
                        }}
                        xlarge={{
                            span: 1 / 4,
                        }}
                    >
                        <ExampleCol>Content C</ExampleCol>
                    </Grid.Col>
                    <Grid.Col
                        medium={{
                            span: 1 / 2,
                        }}
                        large={{
                            span: 1,
                        }}
                        xlarge={{
                            span: 1 / 4,
                        }}
                    >
                        <ExampleCol>Content D</ExampleCol>
                    </Grid.Col>
                </Grid.Row>
            );
        })
    )
    .add(
        'move',
        withInfo('')(() => {
            return (
                <Grid.Row>
                    <Grid.Col
                        medium={{
                            span: 0.5,
                            move: 1 / 2,
                        }}
                        large={{
                            span: 2 / 3,
                            move: 1 / 3,
                        }}
                    >
                        <ExampleCol>Main Content</ExampleCol>
                    </Grid.Col>
                    <Grid.Col
                        medium={{
                            span: 0.5,
                            move: -1 / 2,
                        }}
                        large={{
                            span: 1 / 3,
                            move: -2 / 3,
                        }}
                    >
                        <ExampleCol>Aside Content</ExampleCol>
                    </Grid.Col>
                </Grid.Row>
            );
        })
    );
