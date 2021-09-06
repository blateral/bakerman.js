import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';
import { format, getMinutes } from 'date-fns';
import { de } from 'date-fns/locale';
import * as React from 'react';
import styled from 'styled-components';
import { spacings } from 'utils/styles';
import BgImage from './../../../public/Bodensee_Therme_Welle-02 1.jpg';

const StyledSection = styled(Section)`
    position: relative;
    padding: 80px;

    text-transform: uppercase;
`;

const Intro = styled.div`
    & > * + * {
        margin-top: ${spacings.nudge * 3}px;
    }
`;

const ContentRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    margin: -40px;
`;

const ContentCol = styled.div`
    flex: 1 0 50%;

    padding: 40px;
`;

const DetailList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

const Details = styled.li`
    display: flex;
    align-items: flex-start;

    & > * + * {
        margin-left: ${spacings.spacer}px;
    }

    & + & {
        margin-top: ${spacings.nudge}px;
    }
`;

const DetailLabel = styled(Copy)`
    font-weight: 700;
`;

const BackgroundDecorator = styled.img`
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
`;

const InfusionDetail: React.FC<{
    date: Date | string;
    details?: { label?: string; text?: string }[];
}> = ({ date, details }) => {
    const parsedDate = new Date(date);
    const minutes = getMinutes(parsedDate);
    return (
        <StyledSection>
            <Wrapper>
                <ContentRow>
                    <ContentCol>
                        <Intro>
                            <Copy size="xlarge">
                                {format(parsedDate, 'EEEE', { locale: de })}
                            </Copy>
                            <Heading
                                size={2}
                            >{`Der nächste Aufguss beginnt um ${format(
                                parsedDate,
                                minutes <= 0 ? 'HH' : 'HH:mm',
                                { locale: de }
                            )} Uhr`}</Heading>
                        </Intro>
                    </ContentCol>
                    <ContentCol>
                        <DetailList>
                            {details &&
                                details.map(({ label, text }, i) => {
                                    return (
                                        <Details key={i}>
                                            <DetailLabel size="regular">
                                                {label}
                                            </DetailLabel>
                                            <Copy size="regular">{text}</Copy>
                                        </Details>
                                    );
                                })}
                        </DetailList>
                    </ContentCol>
                </ContentRow>
            </Wrapper>
            <BackgroundDecorator src={BgImage} />
        </StyledSection>
    );
};

export default InfusionDetail;
