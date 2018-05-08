import * as React from 'react';
import styled from 'styled-components';

interface Props {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    type?: 'huge' | 'large' | 'medium' | 'small' | 'tiny';
    className?: string;
}

// Styles
const makeView = (tagName: Props['as'] = 'h1') => styled(tagName)`
    margin: 0;
    padding: 0;
`;

const Huge = styled.span`
    font-size: 38px;
    text-transform: uppercase;
`;

const Subview: React.StatelessComponent<Props> = props => {
    switch (props.type) {
        case 'huge':
            return <Huge>{props.children}</Huge>;

        default:
            return <span>{props.children}</span>;
    }
};

const Heading: React.StatelessComponent<Props> = props => {
    const View = makeView(props.as);

    return (
        <View>
            <Subview type={props.type}>{props.children}</Subview>
        </View>
    );
};

Heading.defaultProps = {
    as: 'h1',
    type: 'huge',
};

export default Heading;
