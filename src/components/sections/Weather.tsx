import WeatherIcon, { IconType } from 'components/base/icons/WeatherIcon';
import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';
import format from 'date-fns/format';
import { de } from 'date-fns/locale';
import * as React from 'react';
import styled from 'styled-components';

const StyledSection = styled(Section)`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;

    text-transform: uppercase;
    text-align: center;
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
                <WeatherIcon type={weatherIcon} />
                <Heading size={1}>{temperature}°</Heading>
                <Copy>
                    {format(new Date(date), 'EEEE, dd. MMMM yyyy', {
                        locale: de,
                    })}
                </Copy>
                <Heading size={1}>{lakeTemp}°</Heading>
                <Copy>Bodensee-Wassertemperatur</Copy>
            </Wrapper>
        </StyledSection>
    );
};

export default Weather;
