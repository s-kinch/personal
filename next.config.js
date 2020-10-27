// const path = require('path')
// const Dotenv = require('dotenv-webpack')

const next_config = {
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            // '/blog/:slug': { page: '/blog/:slug' },
        }
    },
    // webpack: (config) => {
    //     config.plugins = config.plugins || []

    //     config.plugins = [
    //         ...config.plugins,
    //         // Read the .env file
    //         new Dotenv({
    //             path: path.join(__dirname, '.env'),
    //             systemvars: true,
    //         }),
    //     ]

    //     return config
    // },
}

module.exports = { ...next_config }
