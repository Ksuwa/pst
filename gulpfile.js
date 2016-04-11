var gulp	 = require('gulp'),
	jade	 = require('gulp-jade'),
	sass	 = require('gulp-sass'),
	image	 = require('gulp-image'),
	cssmin	 = require('gulp-cssmin'),
	rename	 = require('gulp-rename'),
	concat	 = require('gulp-concat'),
	imagemin = require('gulp-imagemin'),
	del 	 = require('del'),
	cache 	 = require('gulp-cache');
	livereload = require('gulp-livereload');


gulp.task('build', ['clean'], function() {
	gulp.start('jade', 'sass', 'image', 'css');
});

//************************************
//		GULP JADE
//************************************
gulp.task('jade', function() {
	return gulp.src('src/*.jade')
		.pipe( jade({ pretty : true }))
		.pipe(gulp.dest('dist')); 
});

//************************************
//		GULP SASS
//************************************
gulp.task('sass', function() {
	return gulp.src('src/scss/**/*.scss') 
		.pipe( sass({outputStyle: 'compressed'}) )
		.pipe( rename({ suffix: '.min' }) )
		.pipe( gulp.dest('dist/css') )
});

//************************************
//		GULP CSS
//************************************
gulp.task('css', function() {
	gulp.src('src/scss/**/*.css')
		.pipe( cssmin() )
		.pipe( rename({ suffix: '.min' }) )
		.pipe( gulp.dest('dist/css') );
});

//************************************
//		GULP IMAGE
//************************************
gulp.task('image', function () {
	gulp.src('scr/img/**/*.{jpg,jpeg,png,gif}')
	.pipe( image() )
//	.pipe( imagemin() )
	.pipe( gulp.dest('dist/img') );
});

//************************************
//		ClEAN
//************************************

gulp.task('clean', function() {
	return del(['dist/**/*']);
});

//***********************************
//		GULP WATCH
//************************************

gulp.task('watch', function(){
	gulp.watch('src/**/*.jade', ['jade']); 
	gulp.watch('src/scss/**/*.scss', ['sass']); 
	gulp.watch('src/images/**/*', ['image'])
	livereload.listen();
	gulp.watch(['dist/**']).on('change', livereload.changed);
	livereload.listen();
	gulp.watch(['dist/**']).on('change', livereload.changed);
})


////************************************
////		GULP JS
////************************************
//gulp.task('js', function() {
//	return es.concat(
//		// Copy all js files
//		gulp.src('./src/js/**/*')
//			.pipe( gulp.dest( './dist/js' ) ),
//
//		gulp.src([
//				'./src/js/libs/jquery-2.2.0.min.js',
//				'./src/js/libs/jquery.mmenu.min.all.js'
//			])
//			.pipe( concat('vendor.js') )
//
//			.pipe( gulp.dest('dist/js/libs') )
//
//			.pipe( rename({
//				suffix: '.min'
//			}))
//
//			.pipe( uglify() )
//
//			.pipe( sourcemaps.write('./') )
//
//			.pipe( gulp.dest('dist/js/libs') ),
//
//		// main.min.js
//		gulp.src('./src/js/common/main.js')
//			.pipe( concat('main.js') )
//
//			.pipe( gulp.dest('dist/js/common') )
//
//			.pipe( rename({
//				suffix: '.min'
//			}))
//
//			.pipe( uglify() )
//
//			.pipe( sourcemaps.write('./') )
//
//			.pipe( gulp.dest('dist/js/common') )
//	);
//});
//




























