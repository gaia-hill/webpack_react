var gulp = require('gulp');
var gulpWebpack = require('gulp-webpack');
var webpack = require('webpack');
var clean = require('gulp-clean');


gulp.task('webpack',["clean_dist"],function(){
	return gulp.src('src/js/page_entry/*.js')
		  .pipe(gulpWebpack(require('./webpack.config.js'),webpack))
		  .pipe(gulp.dest('./dist/static'))
});

gulp.task('clean_dist',function(){
	return gulp.src('./dist')
		  .pipe(clean({force:true}))
});


gulp.task('default',['webpack']);