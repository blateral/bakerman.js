import * as React from 'react';
import styled, { css } from 'styled-components';

import { spacings, mq } from '../../utils/styles';

interface ViewProps {
    bgColor?: string;
}

const View: any = styled.section`
    padding-top: ${spacings.nudge * 4}px;
    padding-bottom: ${spacings.nudge * 4}px;
    background-color: ${(props: ViewProps) => props.bgColor || 'transparent'};

    ${props =>
        css`        
        &[data-ident="${props['data-ident']}"] + &[data-ident="${
            props['data-ident']
        }"] {
                padding-top: 0;
            }
    `}

    @media ${mq.medium} {
        padding-top: ${spacings.nudge * 6}px;
        padding-bottom: ${spacings.nudge * 6}px;
    }

    @media ${mq.large} {
        padding-top: ${spacings.nudge * 8}px;
        padding-bottom: ${spacings.nudge * 8}px;
    }
`;

const Section: React.StatelessComponent<{
    className?: any;
    bgColor?: string;
}> = props => {
    return (
        <View
            className={props.className}
            bgColor={props.bgColor}
            data-ident={props.bgColor || 'plain'}
        >
            {props.children}
        </View>
    );
};

export default Section;
