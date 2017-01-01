/* Constants */
var mainFile = 'app.concat.js';
var mainPath = 'dist';
var mainAppPath = mainPath+'/'+mainFile;

// Include gulp
var gulp = require('gulp');
var deploy = require('gulp-gh-pages');

// Include Our Plugins
var gulpIf = require('gulp-if');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var useref = require('gulp-useref');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var bs = require('browser-sync').create();

var del = require('del');
var runSequence = require('run-sequence');

// Browser sync
gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('clean:dist', function() {
    return del.sync(['dist']);
});
gulp.task('clean:angular', function() {
    return del.sync(mainAppPath);
});
gulp.task('clean:dist:node_modules', function() {
    return del.sync(['dist/node_modules']);
});

/****
 * Deployment
 **/
// Concatenate & Minify AngularJS app
gulp.task('concat-angular', ['clean:angular'], function() {
    return gulp.src([
        'app/app.js',
        'app/**/*.js',
        '!app/**/*.spec.js',
        'env/dev.js'
    ])
    .pipe(concat(mainFile))
    .pipe(gulp.dest(mainPath));
});

// Bundle dependencies
gulp.task('useref', function(){
    return gulp.src('./**/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        // Minifies only if it's a CSS file
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'))
});

// Optimize images
gulp.task('images', function(){
    return gulp.src('assets/images/**/*.+(png|jpg|jpeg|gif|svg)')
        // Caching images that ran through imagemin
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('dist/assets/images'))
});

// Build /dist
gulp.task('build', function (callback) {
    runSequence(
        'clean:dist',
        'concat-angular',
        ['useref', 'images'],
        'clean:dist:node_modules',
        callback
    )
});

/* Push build to gh-pages */
gulp.task('deploy', ['build'], function () {
    return gulp.src("./dist/**/*")
        .pipe(deploy({
            branch: 'master'
        }))
});

/*
 Base Tasks
 */

// Lint Task
gulp.task('lint', function() {
    return gulp.src('assets/scripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('app/**/*.js');
});

gulp.task('serve', function(callback) {
    runSequence(
        'concat-angular',
        'browser-sync',
        'watch',
        callback
    )
});

// Default Task
gulp.task('default', ['concat-angular', 'watch']);