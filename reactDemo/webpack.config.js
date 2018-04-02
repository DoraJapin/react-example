var path = require("path");
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

// process.env.NODE_ENV  product or dev

var config = {
    devtool:false,
    entry: {   //获取项目入口js文件
        admin : path.resolve(__dirname, 'containers/Admin'),
        all: './index',
    },
    output: {
        path: path.resolve(__dirname, 'build/'),  //文件输出目录
        filename: "[name].js",  //根据入口文件输出的对应多个文件名
        publicPath: "/build/"  //用于配置文件发布路径，如CDN或本地服务器
    },

    module: { //各种加载器，即让各种文件格式可用require引用
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: [node_modules_dir]
            },{
                  test: /\.json$/,
                  loaders: ['json'],
                  exclude: /node_modules/
            },{
                  test: /\.(png|jpg)$/,
                  loader: 'url?limit=25000'
            }, {
                  test: /\.less/,
                  loader: 'style-loader!css-loader!less-loader'
            },
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.jsx', 'less']
    },
    //压缩 提前common文件
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                except: ['import', '$', 'export']
            },
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('common.js'),
    ]
};
module.exports = config;