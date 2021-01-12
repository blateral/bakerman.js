import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const AngleBottom: React.FC<{ iconColor?: string; className?: string }> = ({
    iconColor = 'currentColor',
    className,
}) => (
    <SVG
        width="58"
        height="58"
        viewBox="0 0 58 58"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            fill={iconColor}
            fillRule="nonzero"
            d="M18.572 4L23 8.372 12 19.23 1 8.37 5.428 4 12 10.488z"
        />
    </SVG>
);

export default AngleBottom;
