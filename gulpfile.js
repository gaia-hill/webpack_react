var gulp = require('gulp');
var gulpWebpack = require('gulp-webpack');
var webpack = require('webpack');
var clean = require('gulp-clean');


gulp.task('webpack',function(){
	return gulp.src('src/js/page_entry/*.js')
		  .pipe(gulpWebpack(require('./webpack.config.dev.js'),webpack))
		  .pipe(gulp.dest('./dist/static'))
});

gulp.task('webpack_rev',function(){
	return gulp.src('src/js/page_entry/*.js')
		  .pipe(gulpWebpack(require('./webpack.config.pro.js'),webpack))
		  .pipe(gulp.dest('./bin/static'))
});

gulp.task('clean_dist',function(){
	return gulp.src('./dist')
		  .pipe(clean({force:true}))
});

gulp.task('clean_bin',function(){
	return gulp.src('./bin')
		  .pipe(clean({force:true}))
});

gulp.task('clean_all',function(){
	return gulp.src(['./bin','./dist'])
		  .pipe(clean({force:true}))
});


gulp.task('default',['webpack']);