//webpack 配置文件
console.log("webpack");

// 文件打包 和 模块化开发 
// js 处理ES6 ES7 jsx语法
// png jpg gif  iconfont 
// less css scss
// string 

var path = require("path");  //无需安装 node内置模块
var  htmlWebpackPlugin = require("html-webpack-plugin");//处理html 文件
var openBrowserWebpackPlugin = require("open-browser-webpack-plugin");  // 自动打开浏览器 
var extractTextPlugin = require("extract-text-webpack-plugin");  // 抽离样式

var webpack = require("webpack");

module.exports = {
    entry:["./src/main.js"], //入口可能有多个入口预留位置写数组
    output:{    //出口
        path:path.resolve(__dirname,"dist"),
        filename:"js/[name].[hash:8].js",//hash:8 加密得到 长度 8的字符串 阻止文件重命名缓存
        publicPath:"",  //文件的公共路径
    },

    devtool:"source-map", //方便在线调试

    resolve:{
        alias:{  //设置别名 @===>等价于 src
            "@":path.resolve("src"),
            "~":path.resolve("src/scripts")
        }
    },
    

    //写模块module
    module:{
        rules:[
            {  //打包js或者jsx文件后缀排除node_modules这个文件夹内的东西
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:["babel-loader"]
            },
            { //打包图片
                test:/\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/,
                use:[{
                    loader:"url-loader",
                    options:{
                        limit:8192,
                        name:"imgs/[name].[hash:8].[ext]"
                    }
                }]
            },
            {//打包css/scss文件
                test:/\.(css|scss)/,
                use:extractTextPlugin.extract({
                    fallback:"style-loader",//把node字符串代码转化为style节点
                    use:[
                        "css-loader",
                        {
                           loader:"postcss-loader",//css代码转化
                           options:{
                                plugins:function(){
                                    return[
                                        require("cssgrace"),
                                        //代码美化
                                        require("autoprefixer"),
                                        //自动补全
                                        require("postcss-px2rem-exclude")(
                                            {
                                                remUnit:100,
                                                //将转化rem
                                                exclude:/antd-mobile/i
                                                //排除UI库的适配
                                            }
                                        ),
                                    ]
                                }
                           } 
                        },
                        "sass-loader"
                    ]
                })
            },
            {//打包less的文件
                test:/\.(css|less)/,
                use:extractTextPlugin.extract({
                    fallback:"style-loader",//把node字符串代码转化为style节点
                    use:[
                        "css-loader",
                        {
                           loader:"postcss-loader",//css代码转化
                           options:{
                                plugins:function(){
                                    return[
                                        require("cssgrace"),
                                        //代码美化
                                        require("autoprefixer"),
                                       // 自动补全
                                        require("postcss-px2rem-exclude")(
                                            {
                                                remUnit:100,
                                                //将转化rem
                                                exclude:/antd-mobile/i
                                                //排除UI库的适配
                                            }
                                        ),
                                    ]
                                }
                           } 
                        },
                        "less-loader"
                    ]
                })
            }
        ]
    },

    devServer:{   // 配置 服务器 webpack-dev-server 开发使用 
        contentBase:path.join(__dirname,"dist"),  // 服务器 作用于 dist 
        host:"0.0.0.0",
        port:8000,
        compress:true,
        hot:true,
        inline:true,
        // open:true,
        publicPath:"",
        proxy:{   // 代理
            "/vue":{
                target:"http://localhost:1901/",
                changeOrigin:true,
            },
            "/react":{
                target:"http://localhost:1901/",
                changeOrigin:true,
            }
        }
    },


    plugins:[ //声明使用的插件
        new openBrowserWebpackPlugin({url:"http://localhost:8000"}),//自动打开网页

        new htmlWebpackPlugin({
            template:"./public/index.html",
            inject:true  //自动注入 打包的css和js
        }),

        new extractTextPlugin({
            filename:"css/app.[hash:8].css",
            allChunks:true, //打包所有样式数据
            disable:false //才进行抽离样式为true的话就不能进行 
        }),
        //自动引入脚手架帮忙引入了 已经全局引入了
        new webpack.ProvidePlugin({
            React:"React",
            Component:['react','Component']
        })
    ]
}