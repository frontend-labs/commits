/*!!
 * 
 * gulpfile.js
 * @author: Jan Sanchez
 *
 */

var gulp = require('gulp'),
changelog = require('conventional-changelog'),
bump = require('gulp-bump'),
tagVersion = require('gulp-tag-version'),
filter = require('gulp-filter'),
fs = require('fs'),
loadPlugins = require('gulp-load-plugins'),
package = require('./package.json');

var plugins = loadPlugins();
plugins.runSequence = require('run-sequence');


/*!!
* 
* Tareas para changelog, tag
*
* tarea principal: gulp
*/


gulp.task('log', function () {
    return changelog({
        repository: package.repository.url,
        version: package.version
    }, function(err, log) {
        fs.writeFileSync('CHANGELOG.md', log, 'utf8');
    });
});

gulp.task('bump', function(){
    return gulp.src(['./package.json'])
    .pipe(bump())
    .pipe(gulp.dest('./'))
    .pipe(filter('package.json'))
    .pipe(tagVersion());
});

gulp.task('version', function (cb) {
    plugins.runSequence(['log', 'bump'], cb);
});


/*!!
* 
* Tareas por default
*
* tarea principal: gulp
*/

gulp.task('default', [], function (cb) {
    plugins.runSequence('version', cb);
});

