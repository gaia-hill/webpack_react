var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var glob = require("glob");

var pages = require("./src/views/pages.js");

var config={
	devtool:false,
	cache:false,
	watch:false,
	entry:{
		react:[  //库文件打包
			'react',
			'react-dom'
		]
	},
	output:{
		publicPath:'//localhost:3000/static/',
		path:__dirname+'/bin/static',
		filename:'js/[name][chunkhash].js',
	},
	module:{
		loaders:[
			{   //babel，编译es6和jsx
				test:/\.js?$/,
				exclude:/node_modules/, //忽略该目录
				loader:'babel-loader',
				query:{
					presets:['react','es2015'],
				}
			},
			{	//expose，将React导出到全局
				test:require.resolve('react'),
				loader:'expose?React',
			},
			{	//expose，将ReactDOM导出到全局
				test:require.resolve('react-dom'),
				loader:'expose?ReactDOM',
			},
			{   //将css导出到单独的文件
				test:/\.less$/,
				loader:ExtractTextPlugin.extract('style','css!autoprefixer?{browsers:["last 3 versions","> 5%"]}!less'),
			},
			{
				test:/\.css$/,
				loader:ExtractTextPlugin.extract('style','css!autoprefixer?{browsers:["last 3 versions","> 5%"]}'),
			},
			{
				test:/\.(png|jpg)$/,
				loader:'url?limit=10000&name=img/[name][chunkhash].[ext]',
			},
			{
				test:/\.(svg|woff|ttf|eot)$/,
				loader:'url?limit=10000&name=fonts/[name][chunkhash].[ext]',
			},
			{
				test:/\.ico$/,
				loader:'url?name=img/[name].[ext]',
			},
		]
	},
	plugins: [

		//压缩打包文件
		new webpack.optimize.UglifyJsPlugin({
			compress:{
				warnings:false,
			}
		}),
		new webpack.ProvidePlugin({
			React:'react',
			ReactDOM:'react-dom'
		}),
		//提取相同js文件中相同的部分
      	new webpack.optimize.CommonsChunkPlugin({
      		name:"react",
      		filename:"js/[name][chunkhash].js",
      		chunks:['react','index'], //选择从哪些模块中提取
      		// minChunks: 3,
      	}),
      	// new webpack.optimize.CommonsChunkPlugin({
      	// 	name:"common",
      	// 	filename:"js/[name].bundle.js",
      	// 	chunks:['index'],
      	// }),

      	//将css单独倒出到文件
      	new ExtractTextPlugin('css/[name][chunkhash].css',{
      		allChunks:true,
      	}),
    ]
}

//生成页面
config.plugins=config.plugins.concat(pages);

//动态添加入口
var pageFiles = glob.sync('./src/js/page_entry/*.js');
var pageEntrys = pageFiles.reduce(function(entry,file){
	var name = file.split('/').reverse()[0].replace('.js', '');
	entry[name] = file;
	return entry;
},{});
config.entry = Object.assign({},config.entry,pageEntrys);

module.exports=config;