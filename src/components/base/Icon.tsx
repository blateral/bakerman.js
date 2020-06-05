import * as React from 'react';
import styled from 'styled-components';

export type IconSymbol =
    | 'angle-left'
    | 'angle-right'
    | 'angle-top'
    | 'angle-bottom';

const View = styled.svg`
    width: 100%;
    height: 100%;
    display: inline-block;
    vertical-align: top; /* this is maybe the most awesome and georgeous inline-block offset fix */
`;

const IconPath = ({ type }: { type?: IconSymbol }) => {
    if (!type) return null;

    switch (type) {
        case 'angle-left':
            return (
                <path
                    fill="currentColor"
                    d="M19 6.623L15.269 3 6 12l9.269 9L19 17.377 13.462 12z"
                />
            );

        case 'angle-right':
            return (
                <path
                    fill="currentColor"
                    d="M6 6.623L9.731 3 19 12l-9.269 9L6 17.377 11.538 12z"
                />
            );

        case 'angle-top':
            return (
                <path
                    fill="currentColor"
                    fillRule="nonzero"
                    d="M18.572 19.231L23 14.859 12 4 1 14.859l4.428 4.372L12 12.743z"
                />
            );

        case 'angle-bottom':
            return (
                <path
                    fill="currentColor"
                    fillRule="nonzero"
                    d="M18.572 4L23 8.372 12 19.23 1 8.37 5.428 4 12 10.488z"
                />
            );

        default:
            return null;
    }
};

const Icon: React.StatelessComponent<{
    type: IconSymbol;
    className?: string;
}> = ({ type, className }) => {
    return (
        <View
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <title>{type}</title>
            <IconPath type={type} />
        </View>
    );
};

export default Icon;
