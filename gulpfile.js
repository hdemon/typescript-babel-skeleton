var gulp = require('gulp')
var ts = require('gulp-typescript')
var replace = require('gulp-replace')
var rename = require('gulp-rename')
var babel = require('gulp-babel')
var tsProject = ts.createProject('tsconfig.json', {
  typescript: require('typescript'),
  sortOutput: true
})

gulp.task('build:ts', function() {
  tsProject.src()
    .pipe(ts(tsProject))
    .pipe(rename(function(p) {
      p.dirname = p.dirname.replace('src', '')
    }))
    .pipe(babel())
    .pipe(gulp.dest('lib'))
})

gulp.task('watch:ts', function() {
  gulp.watch('src/**/*.ts', ['build:ts'])
})
