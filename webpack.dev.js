const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',

    module: {
        rules: [{
            test: /\.(sass|scss)$/,
            use: [                
                {
                    loader: MiniCssExtractPlugin.loader, options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'css-loader', options: {
                        sourceMap: true,
                        importLoaders: 1
                    }
                },
                {
                    loader: 'postcss-loader', options: {
                        sourceMap: true,                          
                        ident: 'postcss',                      
                        plugins: [
                            postcssPresetEnv({
                                stage: 3,
                                browsers: '> 5%',                                                          
                                autoprefixer: { grid: true }
                            }),
                            
                            require('rucksack-css'),
                                                    
                        ]                        
                    }
                },                                
                {
                    loader: 'sass-loader', options: {
                        sourceMap: true
                    }
                }                
            ]
        },
        {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192
                }
              }
            ]
        },
        {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: '../fonts/'
                }
              }
            ]
        }]
    }
});
