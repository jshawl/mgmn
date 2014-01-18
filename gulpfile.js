var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('default', function () {
    gulp.src('src/img.png')
        .pipe(imagemin())
        .pipe(gulp.dest('dist'));
});
