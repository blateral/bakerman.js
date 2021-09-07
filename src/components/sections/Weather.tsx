import Water from 'components/base/icons/Water';
import WeatherIcon, { IconType } from 'components/base/icons/WeatherIcon';
import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';
import format from 'date-fns/format';
import { de } from 'date-fns/locale';
import * as React from 'react';
import styled from 'styled-components';
import BgImage from './../../../public/Welle_light.png';

const StyledSection = styled(Section)`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;

    text-transform: uppercase;
`;

const WeatherContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    & > * + * {
        margin-left: 80px;
    }
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: max-content;
    margin: 0 auto;
`;

const Icon = styled.div`
    margin-bottom: 20px;

    & > * {
        height: 100px;
        width: 100px;
    }
`;

const Temperature = styled.div`
    height: min-content;
    margin-bottom: 20px;
`;

const BackgroundDecorator = styled.img`
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
`;

const Label = styled(Copy)`
    opacity: 0.8;
`;

const Weather: React.FC<{
    icon?: string;
    date: string | Date;
    temperature: string;
    weatherIcon: IconType;
    lakeTemp?: string;
}> = ({ date, temperature, lakeTemp, weatherIcon }) => {
    return (
        <StyledSection>
            <Wrapper>
                <WeatherContainer>
                    <div>
                        <MainContainer>
                            <Icon>
                                <WeatherIcon type={weatherIcon} />
                            </Icon>
                            <Temperature>
                                <Heading size={1}>{temperature}°</Heading>
                            </Temperature>
                        </MainContainer>
                        <Label size="small">
                            {format(new Date(date), 'EEEE, dd. MMMM yyyy', {
                                locale: de,
                            })}
                        </Label>
                    </div>
                    <div>
                        <MainContainer>
                            <Icon>
                                <Water />
                            </Icon>
                            <Temperature>
                                <Heading size={1}>{lakeTemp}°</Heading>
                            </Temperature>
                        </MainContainer>
                        <Label size="small">Bodensee-Wassertemperatur</Label>
                    </div>
                </WeatherContainer>
            </Wrapper>
            <BackgroundDecorator src={BgImage} />
        </StyledSection>
    );
};

export default Weather;
