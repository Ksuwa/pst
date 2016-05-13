var gulp	 = require('gulp'),
	jade	 = require('gulp-jade'),
	sass	 = require('gulp-sass'),
	image	 = require('gulp-image'),
	cssmin	 = require('gulp-cssmin'),
	rename	 = require('gulp-rename'),
	concat	 = require('gulp-concat'),
	imagemin = require('gulp-imagemin'),
	del 	 = require('del'),
	cache	= require('gulp-cache'),
	connect	= require('gulp-connect'),
	livereload = require('gulp-livereload');

//TODO:Удалить лишние плагины!!

gulp.task('build', ['clean'], function() {
	gulp.start('jade', 'sass', 'image', 'css');
});

//************************************
//		GULP JADE
//************************************
gulp.task('jade', function() {
	return gulp.src(['src/*.jade', '!src/_*.jade'])
		.pipe( jade({ pretty : true }))
		.pipe(gulp.dest('dist'))
		.pipe( connect.reload() ); 
});

//************************************
//		GULP SASS
//************************************
gulp.task('sass', function() {
	return gulp.src('src/scss/**/*.scss')
		.pipe( sass({outputStyle: 'compressed'}) )
		.pipe( rename({ suffix: '.min' }) )
		.pipe( gulp.dest('dist/css') )
		.pipe( connect.reload() );
});

//************************************
//		GULP IMAGE
//************************************
gulp.task('image', function () {
	gulp.src('src/img/**/*')
		.pipe( imagemin() )
		.pipe( gulp.dest('dist/img') )
});

//************************************
//		ClEAN
//************************************

gulp.task('clean', function() {
	return del(['dist/**/*']);
});

//***********************************
//		GULP CONNECT
//************************************

gulp.task('connect', function() {
	connect.server({
		root	   : 'dist',
		livereload : true
	});
});

// //***********************************
//		GULP WATCH
//**************************************
gulp.task('watch', function() {
	gulp.watch( 'src/**/*.jade', ['jade'] );
	gulp.watch( 'src/scss/**/*.scss', ['sass'] );
//	gulp.watch( '', ['js'] );
});

// //***********************************
//		GULP 
//**************************************
gulp.task( 'default', ['watch', 'connect'] );

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




























