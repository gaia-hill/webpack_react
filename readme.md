# webpack_react
项目是通过gulp webpack react es6进行构建

##安装
首先需要安装gulp和webpack，全局gulp版本要和项目中保持一致

npm install gulp@3.9.1 -g

npm install webpack@1.13.1 -g


##项目结构介绍
* dist是本地版本输出目录
* src是源文件目录
* router是node服务器的路由配置文件
* tpls为html模板文件目录
* views为生成html的配置文件目录
* server.js为node服务器的配置文件
* gulpfile.js是gulp的配置文件
* webpack.config.js是webpack配置文件
* package.json为项目信息的配置文件，包括脚本命令、项目信息、依赖模块（可通过 npm install 安装依赖的模块）


##配置介绍
主要配置为打包入口文件的配置和输出目录， glob用来动态的添加入口文件
加载器和插件的配置详细请看webpack官网文档[webpack doc](http://webpack.github.io/docs/)


##服务器配置
项目的使用的本地服务器是用nodejs搭建，通过不同的命令（Linux系统）切换开发/生产环境：

npm run dev    //开发环境

npm run pro    //生产环境

（windows是 SET NODE_ENV=production/development 然后运行服务器node app.js）

开发环境访问目录为dist,生产环境目录为bin

webpack有一个webpack-dev-server，里面没有使用，如果想用的话，可以去webpack的官方文档看一下怎样用

##webpack
* 模块化：webpack支持主流的模块化标准（AMD、CMD、commonjs、es6加载器），它的思想是万物皆模块，不管是image、css、font、js等，都可以当做模块来加载，需要什么样的处理方式，只要在loader中配置就可以（或者在加载模块时说明），很适合与react进行开发，因为react就是组件式开发，并且es6写react很方便
* 项目打包：webpack的核心功能，在没有使用webpack前，项目使用的是gulp对文件进行合并压缩等等去生成线上版本，在打包这一块，gulp需要配置一条长长的生产线来完成整个过程，webpack只需配置打包的入口和出口就基本上能够完成工作了

