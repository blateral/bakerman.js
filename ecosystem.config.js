module.exports = {
    apps: [
        {
            name: '[insert cool title]',
            script: 'yarn start',
            watch: false,
            env: {
                NODE_ENV: 'development',
            },
            env_production: {
                NODE_ENV: 'production',
            },
        },
    ],
};
