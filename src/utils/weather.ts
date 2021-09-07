import { useState, useEffect } from 'react';
// import { getWeather } from '../../pages/api/wetter/utils';


export const numberToInt = (input: string) => {
    return Math.round(parseInt(input));
};

export const parseTemperature = (input: string) => {
    return Math.round(parseFloat(input) * 2) / 2;
};

export interface Weather {
    current?: {
        date: string | Date;
        temperature: number;
    };
}

export const useWeather = (): {
    temperature: number | null;
    // symbol: WeatherSymbol | null;
} => {
    const [temperature, /* setTemp */] = useState<number | null>(null);
    // const [symbol, setSymbol] = useState<WeatherSymbol | null>(null);

    useEffect(() => {
        const getWeatherData = async () => {
            // const { forecast, current } = await getWeather();

            // setTemp(current ? current.temperature : null);

            // setSymbol(
            //     forecast[0] ? (forecast[0].symbol as WeatherSymbol) : null
            // );
        };

        getWeatherData();
    }, []);

    return {
        temperature,
        // symbol,
    };
};
