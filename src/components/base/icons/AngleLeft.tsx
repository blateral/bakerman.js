import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const AngleLeft: React.FC<{ iconColor?: string; className?: string }> = ({
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
            d="M19 6.623L15.269 3 6 12l9.269 9L19 17.377 13.462 12z"
        />
    </SVG>
);

export default AngleLeft;
