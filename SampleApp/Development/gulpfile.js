
var gulp = require('gulp');
var bump = require('gulp-bump');    
var folders = require('gulp-folders');
var concat = require('gulp-concat');
var filter = require('gulp-filter');
var inject = require('gulp-inject');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var template = require('gulp-template');
var tsc = require('gulp-typescript');
var uglify = require('gulp-uglify');

var Builder = require('systemjs-builder');
var del = require('del');
var fs = require('fs');
var join = require('path').join;
var runSequence = require('run-sequence');
var semver = require('semver');
var series = require('stream-series');

var http = require('http');
var connect = require('connect');
var serveStatic = require('serve-static');
var openResource = require('open');

// Configuration

var Paths = {};

Paths.App = "App/";
Paths.Config = Paths.App + "Config/";
Paths.Images =  Paths.App + "Images/";
Paths.Libs = Paths.App + "Libs/";
Paths.Styles = Paths.App + "Styles/";
Paths.SRC = "SRC/";
Paths.Build = "Build/";
Paths.Development = "";
 
var Libs = {};
Libs.Traceur = { Name: "Traceur", SRC: "node_modules/angular2/node_modules/traceur/bin/", File: "traceur-runtime.js" };
Libs.Es6ModuleLoader = { Name: "Es6ModuleLoader", SRC: "node_modules/es6-module-loader/dist/", File: "es6-module-loader-sans-promises.js" };
Libs.Reflect = { Name: "Reflect", SRC: "node_modules/reflect-metadata/", File: "Reflect.js" };
Libs.SystemJS = { Name: "SystemJS", SRC: "node_modules/systemjs/dist/", File: "system.src.js" };
Libs.ZoneJS  = { Name: "ZoneJS", SRC: "node_modules/angular2/node_modules/zone.js/dist/", File: "zone.js"};
Libs.Angular = { Name: "AngularJS", SRC: "node_modules/angular2/", File: "angular2.js", TS: "node_modules/angular2/es6/dev/" };
Libs.Router = { Name: "Router", SRC: "node_modules/angular2/", File: "router.js" };

var Tasks = {}; 
Tasks.Dev = {}; 


var ng2Builder = new Builder({
  paths: {
    'angular2/*': Libs.Angular.TS + '*.es6',
    rx: 'node_modules/angular2/node_modules/rx/dist/rx.js'
  }, 
  meta: {
    rx: {
      format: 'cjs'
    }
  }
});

var appProdBuilder = new Builder({
  baseURL: 'file:./tmp',
  meta: {
    'angular2/angular2': { build: false },
    'angular2/router': { build: false }
  }
});

var HTMLMinifierOpts = { conditionals: true };

var tsProject = tsc.createProject('tsconfig.json', {
  typescript: require('typescript')
});

var semverReleases = ['major', 'premajor', 'minor', 'preminor', 'patch',
                      'prepatch', 'prerelease'];

var port = 5555;

// Clean

// Build dev
gulp.task('build.ng2.dev', function () {
  ng2Builder.build('angular2/router', 
  	Paths.Development + Paths.Build + Paths.Libs + Libs.Router.Name + "/" + Libs.Router.File, {});
  return ng2Builder.build('angular2/angular2', 
    Paths.Development + Paths.Build + Paths.Libs + Libs.Angular.Name +"/" + Libs.Angular.File, {});
});

 

gulp.task('clean.app.dev', function (done) {
  del([join(Paths.Development + Paths.Build, '**/*'), 
  	'!' + Paths.Development + Paths.Build + Paths.Libs, 
  	'!' +  join(Paths.Development + Paths.Build + Paths.Libs, '*')], done);
});


// Clean
gulp.task('build.app.dev', function (done) {
  runSequence(
  	'clean.app.dev', 
  	'build.copylibs.dev',
    'build.ng2.dev',
  	'build.assets.dev', 
  	'build.index.dev', done);
});

gulp.task('build.copylibs.dev', function()
{
	var allLibs = Select(Libs);
  allLibs = RemoveFromHash(allLibs, Libs.Angular);
  allLibs = RemoveFromHash(allLibs, Libs.Router); 
	var t = allLibs.map(function(lib) {
		return gulp.src(lib.SRC + lib.File)
  			.pipe(gulp.dest(Paths.Development + Paths.Build + Paths.Libs + lib.Name + "/"));
	});
	return t;
});

// Build
gulp.task('build.index.dev', function() {
  var target = gulp.src(injectableDevAssetsRef(), { read: false });
  return gulp.src(Paths.Development + Paths.SRC  + 'index.html')
    .pipe(inject(target, { transform: transformPath(Paths.Development + Paths.Build) }))
    .pipe(template({ VERSION: getVersion() })) 
    .pipe(gulp.dest(Paths.Development + Paths.Build));
});

gulp.task('build.js.dev', function () {
  var result = gulp.src(Paths.Development + Paths.SRC + '**/*ts')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(tsc(tsProject));

  return result.js
    .pipe(sourcemaps.write())
    .pipe(template({ VERSION: getVersion() }))
    .pipe(gulp.dest(Paths.Development + Paths.Build));
});

gulp.task('build.assets.dev', ['build.js.dev'], function () {
  return gulp.src([Paths.Development + Paths.SRC + '**/*.html', 
      Paths.Development + Paths.SRC + '**/*.css'])
    .pipe(gulp.dest(Paths.Development + Paths.Build));
});

gulp.task('serve.dev',  ['build.app.dev'], function () {
  var app;
  
  gulp.watch(Paths.Development + Paths.SRC + '**', ['build.app.dev']);

  app = connect().use(serveStatic(join(__dirname, Paths.Development + Paths.Build)));
  http.createServer(app).listen(port, function () {
    openResource('http://localhost:' + port);
  });
});

// Utils.

function RemoveFromHash(list, object)
{
  var index = list.indexOf(object);
  if (index >= 0)
  {
    list.splice(index, 1);
  }
  return list;
}

function Select(objects)
{
  var result = [];
  
  for (var key in objects){
    if (objects.hasOwnProperty(key)) {
        result.push(objects[key]);
    }
  }
  
  return result;
}

function injectableDevAssetsRef() {
  var allLibs = Select(Libs);
  var src = allLibs.map(function(lib) {
    return Paths.Development + Paths.Build + Paths.Libs + lib.Name + "/" + lib.File;
  });
  
  src.push(join(Paths.Development + Paths.Build + Paths.Styles, '**/*.css'));
  return src;
}

function transformPath(url) {
  var v = '?v=' + getVersion(); 
  return function (filepath) { 
    arguments[0] = filepath.replace(url, ''); 
    if (/.css$/.test(arguments[0]))
      return '<link rel="stylesheet" href="' + arguments[0] + v + '">';
    if (/.js$/.test(arguments[0])) 
      return '<script src="' + arguments[0] + v + '"></script>';
    return inject.transform.apply(inject.transform, arguments);
  };
}

function getVersion()
{
  var pkg = JSON.parse(fs.readFileSync('package.json'));
  return pkg.version;
}


