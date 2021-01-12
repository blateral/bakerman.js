import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { spacings } from 'utils/styles';

const View = styled.div<{ addWhitespace?: boolean }>`
    max-width: ${spacings.wrapperLarge}px;
    margin-left: auto;
    margin-right: auto;

    ${({ addWhitespace }) =>
        addWhitespace &&
        css`
            padding-left: ${spacings.spacer}px;
            padding-right: ${spacings.spacer}px;
        `}
`;

const Wrapper: FC<{
    addWhitespace?: boolean;
    className?: string;
}> = ({ addWhitespace = false, className, children }) => {
    return (
        <View className={className} addWhitespace={addWhitespace}>
            {children}
        </View>
    );
};

export default Wrapper;
