const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const WebpackMonitor = require('webpack-monitor')
const { UnusedFilesWebpackPlugin } = require('unused-files-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV || "development"

/**
 * config of plugins
 */
const ExtractTextPluginConfig = new ExtractTextPlugin({
    filename: "plus/[name].[contenthash].css",
    disable: NODE_ENV === "development"
})

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    filename: './index.html',
    template: './index.html',
    inject: 'body',
    alwaysWriteToDisk: true
})

const DefinePlugin = new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV)
    },
    'ticketURL': JSON.stringify('https://sso.vdian.net/sso/login?app_client=metabase_plus&sso_version=1.0.1&redirect=')
})

const OpenBrowserPluginConfig = new OpenBrowserPlugin({
    url: 'http://localhost:8088'
})

const WebpackMonitorConfig = new WebpackMonitor({
    capture: true,
    launch: true,
    port: 3030
})

/**
 * config of webpack
 */

const config = {
    entry: [
        'babel-polyfill',
        path.resolve(__dirname, 'src/index')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'plus/[name].bundle.js?[hash]',
        publicPath: '/'
    },
    resolve: {
        extensions: [ '*', '.js', '.jsx'],
        alias: {
            'util': path.resolve(__dirname, 'src/util'),
            'components': path.resolve(__dirname, 'src/components'),
            'containers': path.resolve(__dirname, 'src/containers'),
            '__redux': path.resolve(__dirname, 'src/redux'),
            'router': path.resolve(__dirname, 'src/router'),
            'static': path.resolve(__dirname, 'src/static'),
            'http': path.resolve(__dirname, 'src/http'),
            'config': path.resolve(__dirname, 'src/config')
        }
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ]
            },
            {
                test: /(\.css|\.scss)$/,
                use: ExtractTextPluginConfig.extract({
                    use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            }, 
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                    ],
                    fallback: 'style-loader'
                })
            },
            {
                test:/\.(png|gif|jpg|jpeg|bmp)$/,
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5000
                        }
                    }
                ]
            },
            {
                test:/\.(woff|woff2|svg|ttf|eot)(\?[a-z0-9=.]+)?$/,
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5000
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        HtmlWebpackPluginConfig,
        ExtractTextPluginConfig,
        DefinePlugin,
        OpenBrowserPluginConfig,
        new UnusedFilesWebpackPlugin({
            patterns: ["src/**/*.*"]
        })
    ],
    devtool: 'source-map'
}

if (NODE_ENV === 'production') {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress:{
            warnings: false
        },
        output: {
            comments: false
        },
        sourceMap: true 
    }))
}

module.exports = config
