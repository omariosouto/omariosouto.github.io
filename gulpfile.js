var env         = require('minimist')(process.argv.slice(2)),
	gulp        = require('gulp'),
	plumber     = require('gulp-plumber'),
	browserSync = require('browser-sync'),
	stylus      = require('gulp-stylus'),
	uglify      = require('gulp-uglify'),
	concat      = require('gulp-concat'),
	jeet        = require('jeet'),
	rupture     = require('rupture'),
	koutoSwiss  = require('kouto-swiss'),
	prefixer    = require('autoprefixer-stylus'),
	imagemin    = require('gulp-imagemin'),
	runSequence = require('run-sequence'),
	cp          = require('child_process');

var messages = {
	jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};


/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
	browserSync.notify(messages.jekyllBuild);
	return cp.spawn('jekyll.bat', ['build'], {stdio: 'inherit'})
		.on('close', done);
});
/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('browser-reload', function() {
	browserSync.reload();
});
gulp.task('jekyll-rebuild', function (cb) {
	runSequence('jekyll-build', ['js', 'stylus'], 'browser-reload', cb);
});
/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['jekyll-build'], function() {
	browserSync({
		server: {
			baseDir: '_site'
		}
	});
});



/**
 * Stylus task
 */
gulp.task('stylus', function(){
	gulp.src('assets/styl/application.styl')
		.pipe(plumber())
		.pipe(stylus({
			use:[koutoSwiss(), prefixer(), jeet(), rupture()],
			compress: true
		}))
		.pipe(gulp.dest('assets/css/'))
		.pipe(browserSync.reload({stream:true}))
		.pipe(gulp.dest('_site/assets/css'));
});



/**
 * Javascript Task
 */
gulp.task('js', function(){
	return gulp.src('assets/js/**/*.js')
		.pipe(concat('scripts.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('_site/assets/js'))
		.pipe(gulp.dest('assets/js'));
});




// Watch Task
gulp.task('watch', function () {
	gulp.watch('assets/styl/**/*.styl', ['stylus']);
	gulp.watch('assets/js/**/*.js', ['js']);
	gulp.watch(['index.html', '_includes/*.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
});


/**
 * Default task, running just `gulp` will compile the stylus,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', function (cb) {
	runSequence('browser-sync', ['js', 'stylus', 'watch'], cb);
});