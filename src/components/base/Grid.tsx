import * as React from 'react';
import styled, { css } from 'styled-components';

import { spacings, mq } from '../../utils/styles';

interface ColPropsSettings {
    /** Normalisierte Werte zwischen 0 und 1: z.B.  12 von 28 Spalten (12 / 28) */
    span?: number;
    /** Normalisierte Werte zwischen -1 und 1: z.B. -12 von 28 Spalten (-12 / 28) */
    move?: number;
}

interface ColProps extends ColPropsSettings {
    medium?: ColPropsSettings;
    large?: ColPropsSettings;
    xlarge?: ColPropsSettings;
}

const gridSettings = {
    cols: 28,
    gutter: spacings.nudge,
};

const getWidth = (props: ColProps) => {
    const mediumSpan = props.medium ? props.medium.span : 1;
    const largeSpan = props.large ? props.large.span : 1;
    const xlargeSpan = props.xlarge ? props.xlarge.span : 1;

    return css`
        width: ${(props.span || 1) * 100}%;

        ${(props: ColProps) => {
            if (props.medium) {
                return css`
                    @media ${mq.medium} {
                        width: ${(mediumSpan || 1) * 100}%;
                    }
                `;
            }

            return ``;
        }}

        ${(props: ColProps) => {
            if (props.large) {
                return css`
                    @media ${mq.large} {
                        width: ${(largeSpan || 1) * 100}%;
                    }
                `;
            }

            return ``;
        }}

        ${(props: ColProps) => {
            if (props.xlarge) {
                return css`
                    @media ${mq.xlarge} {
                        width: ${(xlargeSpan || 1) * 100}%;
                    }
                `;
            }

            return ``;
        }}
    `;
};

const getLeftRight = (props: ColProps) => {
    const mediumMove = props.medium ? props.medium.move : 0;
    const largeMove = props.large ? props.large.move : 0;
    const xlargeMove = props.xlarge ? props.xlarge.move : 0;

    return css`
        left: ${props.move && props.move > 0 ? props.move * 100 + '%' : 'auto'};
        right: ${
            props.move && props.move < 0 ? props.move * -100 + '%' : 'auto'
        };

        ${(props: ColProps) => {
            if (props.medium) {
                return css`
                    @media ${mq.medium} {
                        left: ${mediumMove && mediumMove > 0
                            ? mediumMove * 100 + '%'
                            : 'auto'};
                        right: ${mediumMove && mediumMove < 0
                            ? mediumMove * -100 + '%'
                            : 'auto'};
                    }
                `;
            } else {
                return ``;
            }
        }}


        ${(props: ColProps) => {
            if (props.large) {
                return css`
                    @media ${mq.large} {
                        left: ${largeMove && largeMove > 0
                            ? largeMove * 100 + '%'
                            : 'auto'};
                        right: ${largeMove && largeMove < 0
                            ? largeMove * -100 + '%'
                            : 'auto'};
                    }
                `;
            } else {
                return ``;
            }
        }}

        ${(props: ColProps) => {
            if (props.xlarge) {
                return css`
                    @media ${mq.xlarge} {
                        left: ${xlargeMove && xlargeMove > 0
                            ? xlargeMove * 100 + '%'
                            : 'auto'};
                        right: ${xlargeMove && xlargeMove < 0
                            ? xlargeMove * -100 + '%'
                            : 'auto'};
                    }
                `;
            } else {
                return ``;
            }
        }}
    `;
};

const StyledCol = styled.div`
    ${getWidth};
    ${getLeftRight};
    padding-left: ${(props: GridProps) => props.gutter || 0}px;
    display: inline-block;
    position: relative;
    font-size: 16px;
    vertical-align: ${(props: GridProps) => props.valign || 'top'};
`;

const Col: React.StatelessComponent<ColProps> = props => {
    return <React.Fragment>{props.children}</React.Fragment>;
};

interface GridProps {
    gutter?: number;
    valign?: 'top' | 'middle' | 'bottom';
    children?: React.ReactNode;
}

const StyledGrid = styled.div`
    margin-left: -${(props: GridProps) => props.gutter || 0}px;
    display: block;
    font-size: 0;
`;

const Grid: React.StatelessComponent<GridProps> = props => {
    return (
        <StyledGrid gutter={props.gutter}>
            {React.Children.map(props.children, (comp: any) => {
                return (
                    <StyledCol
                        {...comp.props}
                        gutter={props.gutter}
                        valign={props.valign}
                    />
                );
            })}
        </StyledGrid>
    );
};

Grid.defaultProps = {
    gutter: gridSettings.gutter,
    valign: 'top',
};

export default {
    Row: Grid,
    Col,
};
