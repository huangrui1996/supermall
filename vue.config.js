const path = require('path')

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                assets: '@/assets',
                components: '@/components',
                network: '@/network',
                views: '@/views',
            },
        },
        devServer: {
            host: '0.0.0.0',
            port: 8080,
        },
    },

    chainWebpack: (config) => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

        types.forEach((type) =>
            addStyleResource(config.module.rule('less').oneOf(type))
        )
    },
}

// add style resource

function addStyleResource(rule) {
    rule
        .use('style-resource')

    .loader('style-resources-loader')

    .options({
        patterns: [path.resolve(__dirname, './src/assets/common/global.less')],
    })
}