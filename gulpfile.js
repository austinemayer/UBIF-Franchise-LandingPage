
var gulp = require('gulp');

var jshint = require('gulp-jshint');
var autoprefixer = require('gulp-autoprefixer');
var less = require('gulp-less');



gulp.task('lint', function() {
    return gulp.src('js/main.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('less', function(){
    return gulp.src('less/style.less')
        .pipe(less())
        .pipe(autoprefixer('last 3 versions'))
        .pipe(gulp.dest('css/'));
});


gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint']);
    gulp.watch('less/*.less', ['less']);
});


gulp.task('default', ['watch']);