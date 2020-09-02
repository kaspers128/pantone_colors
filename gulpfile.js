'use strict';

let gulp = require('gulp'),
    prefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

let path = {
    build: { 
        style: 'public/css/',
        img: 'public/images/',
        //fonts: 'public/fonts/'
    },
    src: {
        style: 'src/scss/main.scss',
        img: 'src/images/**/*.*', 
        //fonts: 'src/fonts/**/*.*'
    },
    watch: {
        style: 'src/scss/**/*.scss',
        img: 'src/images/**/*.*',
        //fonts: 'src/fonts/**/*.*'
    },
};

gulp.task('style:build', function (done) {
    gulp.src(path.src.style) 
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'})) 
        .pipe(prefixer({overrideBrowserslist:  ['last 2 versions']})) 
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.style)); 
        done();
});


gulp.task('image:build', function (done) {
    gulp.src(path.src.img) 
        .pipe(gulp.dest(path.build.img)); 
        done();
});
/*
gulp.task('fonts:build', function(done) {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
    done();
});
*/
gulp.task('build', gulp.parallel(
  'style:build',
  //'fonts:build',
  'image:build'
));

gulp.task('watch', function(){
	gulp.watch(path.watch.style, gulp.series('style:build'));
	gulp.watch(path.watch.img, gulp.series('image:build'));
	//gulp.watch(path.watch.fonts, gulp.series('fonts:build'));
});

gulp.task('default', gulp.parallel('build', 'watch'));