var HtmlWebpackPlugin = require('html-webpack-plugin');

var pages=[
	//将指定的chunks包含到html文件中，并生成
  	new HtmlWebpackPlugin({
  		title:'index page',
  		// hash:true,
  		chunks:['common','index'],
  		filename:'../views/index.html',
  		template:'src/tpls/tpl.html',
  		inject:'body'
  	}),
  	//在后面添加你的页面
  	new HtmlWebpackPlugin({
  		title:'test page',
  		// hash:true,
  		chunks:['common','test'],
  		filename:'../views/test.html',
  		template:'src/tpls/tpl.html',
  		inject:'body'
  	}),
];

module.exports=pages;