import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { fonts, mq } from 'utils/styles';

// Styles
const base = css<{
    hyphens?: boolean;
    textColor?: string;
}>`
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-family: ${fonts.primary};
    color: ${({ textColor }) => textColor};

    hyphens: auto;
    overflow-wrap: break-word;

    ${(props: { hyphens?: boolean }) =>
        !props.hyphens &&
        css`
            @media ${mq.large} {
                hyphens: none;
            }
        `}
`;

// *********
// Heading 1
// ((45-28)/1400*1680)+28
// *********
const H1 = styled.h1`
    ${base};
    font-family: ${fonts.secondary};
    font-size: 180px;
    font-weight: 600;
    line-height: 1.11;
    letter-spacing: 0;
`;

// *********
// Heading 2
// ((34-24)/1400*1680)+24
// *********
const H2 = styled.h2`
    ${base};
    font-size: 80px;
    line-height: 1.14;
    letter-spacing: 0.7;
`;

export type HeadlineTag =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'span'
    | 'div';

const Heading: FC<{
    as?: HeadlineTag;
    size?: 1 | 2;
    textColor?: string;
    hyphens?: boolean;

    className?: string;
}> = ({ as, className, size, textColor, hyphens, children }) => {
    let View;

    switch (size) {
        case 1:
            View = H1;
            break;

        default:
        case 2:
            View = H2;
            break;
    }

    return (
        <View
            as={as}
            textColor={textColor}
            hyphens={hyphens}
            className={className}
        >
            {children}
        </View>
    );
};

Heading.defaultProps = {
    as: 'h2',
    size: 2,
};

export default Heading;
