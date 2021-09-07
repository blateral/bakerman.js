import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const View = styled.section<{ indent: string; bgColor?: string }>`
    background-color: ${({ bgColor }) => bgColor || 'transparent'};

    ${({ indent }) =>
        css`
            &[data-ident='${indent}'] + &[data-ident='${indent}'] {
                padding-top: 0;
            }
        `}

    overflow: hidden;

    min-height: 1080px;
    min-width: 1920px;

    height: 1080px;
    width: 1920px;

    max-height: 1080px;
    max-width: 1920px;
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
