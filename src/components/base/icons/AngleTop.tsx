import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const AngleTop: React.FC<{ iconColor?: string; className?: string }> = ({
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
            d="M18.572 19.231L23 14.859 12 4 1 14.859l4.428 4.372L12 12.743z"
        />
    </SVG>
);

export default AngleTop;
