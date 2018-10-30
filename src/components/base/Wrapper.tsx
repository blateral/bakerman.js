import * as React from 'react';
import styled from 'styled-components';

import { spacings, mq } from '../../utils/styles';

const View = styled.div`
    max-width: ${spacings.wrapperMaxWidth + 40}px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;

    @media ${mq.xlarge} {
        padding-left: 0;
        padding-right: 0;
    }
`;

const Wrapper: React.StatelessComponent<{
    className?: any;
}> = props => {
    return <View className={props.className}>{props.children}</View>;
};

export default Wrapper;
