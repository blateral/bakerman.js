import * as React from 'react';
import styled from 'styled-components';

interface Props {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    type?: 'huge' | 'large' | 'medium' | 'small' | 'tiny';
    className?: string;
}

// Styles

const makeView = (tagName: Props['as']) => styled(tagName || 'h1')`
    margin: 0;
    padding: 0;
`;

const Heading: React.StatelessComponent<Props> = props => {
    const View = makeView(props.as);

    return <View>{props.children}</View>;
};

Heading.defaultProps = {
    as: 'h1',
    type: 'huge',
};

export default Heading;
