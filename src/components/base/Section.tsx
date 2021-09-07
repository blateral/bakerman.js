import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { withRange, spacings } from 'utils/styles';

const View = styled.section<{ indent: string; bgColor?: string }>`
    ${withRange([spacings.spacer * 2, spacings.spacer * 4], 'padding-top')}
    ${withRange([spacings.spacer * 2, spacings.spacer * 4], 'padding-bottom')}
    
    background-color: ${({ bgColor }) => bgColor || 'transparent'};

    ${({ indent }) =>
        css`
            &[data-ident='${indent}'] + &[data-ident='${indent}'] {
                padding-top: 0;
            }
        `}
`;

const Section: FC<{
    className?: any;
    bgColor?: string;
}> = (props) => {
    return (
        <View
            className={props.className}
            bgColor={props.bgColor}
            data-ident={props.bgColor || 'plain'}
            indent={props.bgColor || 'plain'}
        >
            {props.children}
        </View>
    );
};

export default Section;
