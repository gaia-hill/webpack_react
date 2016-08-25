var HtmlWebpackPlugin = require('html-webpack-plugin');

var pages=[
	//将指定的chunks包含到html文件中，并生成
  	new HtmlWebpackPlugin({
  		title:'index page',
  		// hash:true,
  		chunks:['react','index'],
  		filename:'../views/index.html',
  		template:'src/tpls/tpl.html',
  		inject:'body'
  	}),
  	//在后面添加你的页面
];

module.exports=pages;