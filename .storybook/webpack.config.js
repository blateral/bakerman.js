const path = require('path');

module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)?$/,
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/,
        use: [
            {
                loader: require.resolve('awesome-typescript-loader'),
                options: {
                    reportFiles: ['src/**/*.{ts,tsx}'],
                },
            },
            {
                loader: require.resolve('react-docgen-typescript-loader'),
            },
        ],
    });
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
};
