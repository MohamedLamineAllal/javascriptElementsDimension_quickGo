var gulp = require('gulp'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    include = require('gulp-include')

// gulp default task can be run with just gulp no name is needed to be provided
// gulp.task('default', function() {

// });

// here a watch task
gulp.task('watch', function() {
    // here we tell what we want to watch (we can watch multiple files and even directories you can see /**/*.js (wildcards)  ==> all the folders including . which is current folders, and to watch all the .js files whatever the name)
    watch('./categorised/**/*.js', function () {
        gulp.start('javascript')
    })
    watch('./temp/README.md', function () {
        gulp.start('addAllToReadme')
    })
})

gulp.task('javascript', function() {
    return gulp.src('./categorised/**/*.js')
    .pipe(concat('all.js')).on('error', console.log)
    .pipe(gulp.dest('./')) && gulp.start('addAllToReadme')
})  

gulp.task('addAllToReadme', function () {
    return gulp.src('./temp/README.md')
    .pipe(include()).on('error', console.log)
    .pipe(gulp.dest('./'))
}) 
    

