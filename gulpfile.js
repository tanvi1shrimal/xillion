var gulp = require('gulp'),
	jade = require('gulp-jade'),
	sass = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer');

//Convert .jade to .html file
gulp.task('jade', function(){
	gulp.src('src/*.jade')
	.pipe(jade({
		pretty: true
	}))
	.pipe(gulp.dest('dist/'));
});

gulp.task("copy_all", function(){
	gulp.src('src/*').pipe(gulp.dest('dist/'));
});

//Convert .scss file to .css
gulp.task('sass', function(){
	sass('src/css/main.scss')
	.pipe(autoprefixer({
		browsers: ['last 3 versions'],
	}))
	.pipe(gulp.dest('dist/css/'))
});

gulp.task('copy_js', function(){
	gulp.src('src/js/*.js').pipe(gulp.dest('dist/js/'))
});

gulp.task('copy_img', function(){
	gulp.src('src/img/**/*').pipe(gulp.dest('dist/img/'))
});

gulp.task('copy_fonts', function(){
	gulp.src('src/fonts/*').pipe(gulp.dest('dist/fonts/'))
});

//Sass watcher
gulp.task('watch', function(){
	gulp.watch('src/css/*.scss', ['sass']);
	gulp.watch('src/css/**/*.scss', ['sass']);
	gulp.watch('src/*.jade', ['jade']);
	gulp.watch('src/**/*.jade', ['jade']);
	gulp.watch('src/js/*.js', ['copy_js']);
	gulp.watch('src/img/', ['copy_img']);
	gulp.watch('src/img/*.svg', ['copy_img']);
	gulp.watch('src/img/**/*.svg', ['copy_img']);
	gulp.watch('src/fonts/', ['copy_fonts']);
});