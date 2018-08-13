const gulp = require('gulp');

gulp.task('default', () => {
    gulp.src(['bower_components/**/*', 'elements/**/*', 'img/**/*', 'index.html'], {base: '.'}).pipe(gulp.dest('dist'))
})

