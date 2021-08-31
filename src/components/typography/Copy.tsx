import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { fonts, mq, spacings, withRange } from 'utils/styles';

const BaseStyles = styled.div<{ textColor?: string; columns?: boolean }>`
    font-weight: 400;
    font-family: ${fonts.secondary};
    letter-spacing: 0;
    hyphens: auto;
    color: ${({ textColor }) => textColor || 'inherit'};

    @media ${mq.medium} {
        hyphens: none;
    }

    a:not([class]) {
        color: currentColor;
        transition: color 0.25s;

        &:hover {
            opacity: 0.75;
        }
    }

    *:first-child {
        margin-top: 0;
    }

    *:last-child {
        margin-bottom: 0;
    }

    ${({ columns }) =>
        columns &&
        css`
            columns: 350px 2;
            column-gap: ${spacings.spacer}px;

            li {
                break-inside: avoid;
            }

            blockquote {
                break-inside: avoid;
            }
        `};
`;

// *****
// Large
// *****
const ViewLarge = styled(BaseStyles)`
    ${withRange([16, 20], 'font-size')}
    line-height: 1.44;
`;

// *******
// Regular
// *******
const ViewRegular = styled(BaseStyles)`
    ${withRange([15, 17], 'font-size')}
    line-height: 1.375;
`;

// *****
// Small
// *****
const ViewSmall = styled(BaseStyles)`
    ${withRange([13, 15], 'font-size')}
    line-height: 1.2;
`;

const Copy: FC<{
    textColor?: string;
    size?: 'small' | 'regular' | 'large';
    columns?: boolean;
    className?: string;
}> = ({ size, textColor, columns, className, children }) => {
    let View;

    switch (size) {
        case 'large':
            View = ViewLarge;
            break;

        default:
        case 'regular':
            View = ViewRegular;
            break;

        case 'small':
            View = ViewSmall;
            break;
    }

    return (
        <View textColor={textColor} columns={columns} className={className}>
            {children}
        </View>
    );
};

Copy.defaultProps = { size: 'regular' };

export default Copy;
