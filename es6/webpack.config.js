const path = require('path');
module.exports = {
    entry: './src/js/menu.js',
    output: {
        ﬁlename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {                 loader: 'babel-loader',
                    options: {
                    presets:
                        ['env', 'stage-0']
                    }
                }
            }
        ]
    }
};