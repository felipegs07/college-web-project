var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('default', ['sass', 'watch']);

gulp.task('sass', function(){
    return gulp.src('./src/assets/scss/style.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/assets/css/'));
});

gulp.task('watch', function(){
    gulp.watch('./src/assets/scss/*.scss',['sass']);
});