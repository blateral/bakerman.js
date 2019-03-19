module.exports = {
    apps: [
        {
            name: 'app',
            script: 'server.ts',
            watch: true,
            ignore_watch: ['data'],
            env: {
                NODE_ENV: 'development',
            },
            env_production: {
                NODE_ENV: 'production',
            },
        },
    ],
};
