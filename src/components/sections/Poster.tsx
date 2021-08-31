import Section from 'components/base/Section';
import * as React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    display: block;
    width: 100%;
`;

const Poster: React.FC<{ image: { src: string; alt?: string } }> = ({
    image,
}) => {
    return (
        <Section>
            <Img src={image.src} alt={image.alt} />
        </Section>
    );
};

export default Poster;
