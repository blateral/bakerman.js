import WeatherIcon, { IconType } from 'components/base/icons/WeatherIcon';
import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';
import format from 'date-fns/format';
import { de } from 'date-fns/locale';
import * as React from 'react';
import styled from 'styled-components';
import BgImage from './../../../public/Bodensee_Therme_Welle-02 1.jpg';

const StyledSection = styled(Section)`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;

    text-transform: uppercase;
    text-align: center;
`;

const WeatherContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    & > * + * {
        margin-left: 80px;
    }
`;

const Icon = styled.div`
    margin-bottom: 20px;

    & > * {
        height: 96px;
        width: 96px;
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
                        <Icon>
                            <WeatherIcon type={weatherIcon} />
                        </Icon>
                        <Temperature>
                            <Heading size={1}>{temperature}°</Heading>
                        </Temperature>
                        <Label size="small">
                            {format(new Date(date), 'EEEE, dd. MMMM yyyy', {
                                locale: de,
                            })}
                        </Label>
                    </div>
                    <div>
                        <Icon>
                            <WeatherIcon type={weatherIcon} />
                        </Icon>
                        <Temperature>
                            <Heading size={1}>{lakeTemp}°</Heading>
                        </Temperature>
                        <Label size="small">Bodensee-Wassertemperatur</Label>
                    </div>
                </WeatherContainer>
            </Wrapper>
            <BackgroundDecorator src={BgImage} />
        </StyledSection>
    );
};

export default Weather;
