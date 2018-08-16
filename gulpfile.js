var gulp = require('gulp');
var server = require('gulp-server-livereload');

//server
gulp.task('server', function () {
    gulp.src('./')
        .pipe(server({
            livereload: true,
            open: true
        }));
});
