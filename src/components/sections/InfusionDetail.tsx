import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';
import { format, getMinutes } from 'date-fns';
import { de } from 'date-fns/locale';
import * as React from 'react';
import styled from 'styled-components';
import { spacings } from 'utils/styles';

const StyledSection = styled(Section)`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Intro = styled.div`
    max-width: 60%;
    margin-right: 0;
    margin-left: auto;

    & > * + * {
        margin-top: ${spacings.nudge * 2}px;
    }
`;

const ContentRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
`;

const ContentCol = styled.div`
    margin: 0 auto;

    flex: 0 0 50%;
`;

const DetailList = styled.ul`
    max-width: 60%;
    margin: 0 auto;
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
                            <Copy size="large">
                                {format(parsedDate, 'EEEE', { locale: de })}
                            </Copy>
                            <Heading
                                size={1}
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
                                            <DetailLabel>{label}</DetailLabel>
                                            <Copy>{text}</Copy>
                                        </Details>
                                    );
                                })}
                        </DetailList>
                    </ContentCol>
                </ContentRow>
            </Wrapper>
            <BackgroundDecorator src="https://picsum.photos/1920/400" />
        </StyledSection>
    );
};

export default InfusionDetail;
