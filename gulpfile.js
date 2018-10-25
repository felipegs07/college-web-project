var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var imagemin = require('gulp-imagemin');

gulp.task('default', ['sass', 'watch', 'imagemin']);

gulp.task('sass', function(){
    return gulp.src('./src/assets/scss/main.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/assets/css/'));
});

gulp.task('watch', function(){
    gulp.watch('./src/assets/scss/*.scss',['sass']);
    gulp.watch('./src/assets/images/**',['imagemin']);
});

gulp.task('imagemin', function(){
    gulp.src('./src/assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/assets/img/'));
});