var gulp = require('gulp'),
    borwserSync = require('browser-sync').create(),
    sass = require('gulp-sass');

gulp.task('sass',function() {
    gulp.src('src/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/'));
});

// gulp.task('serve', ['sass'], function() {
//     borwserSync.init({
//         server: {
//             baseDir: 'src'
//         }
//     });
//
//     gulp.watch(['src/**/*.scss'],function(){
//         gulp.run('sass');
//         borwserSync.reload();
//     });
// });

gulp.task('sass:watch', function () {
    gulp.watch('src/**/*.scss', ['sass']);
});


gulp.task('default', ['sass', 'sass:watch']);
