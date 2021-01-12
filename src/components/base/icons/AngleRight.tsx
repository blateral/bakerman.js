import * as React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
    display: block;
`;

const AngleRight: React.FC<{ iconColor?: string; className?: string }> = ({
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
            d="M6 6.623L9.731 3 19 12l-9.269 9L6 17.377 11.538 12z"
        />
    </SVG>
);

export default AngleRight;
