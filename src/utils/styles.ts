export const mq = {
    medium: '(min-width: 40em)',
    semilarge: '(min-width: 52em)',
    large: '(min-width: 64em)',
    xlarge: '(min-width: 90em)',
    xxlarge: '(min-width: 105em)',
};

export const spacings = {
    nudge: 5,
    spacer: 20,
    wrapper: 1440,
    wrapperLarge: 1680,
};

export const fonts = {
    primary: 'serif',
    secondary: 'sans-serif',
};

// Range Helper
const getSizeByRange = (range: [number, number]): string =>
    `calc(${range[0]}px + (${range[1]} - ${range[0]}) * ((100vw - 300px) / (${spacings.wrapperLarge} - 320)));`;

export const withRange = (
    range: [number, number],
    property: string
): string => {
    if (!property) return '';

    return `
        ${property}: ${range[0]}px;
        ${property}: ${getSizeByRange(range)};

        @media ${mq.xxlarge} {
            ${property}: ${range[1]}px;
        }
    `;
};
