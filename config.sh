#!/bin/bash

  
if [ -z "$1" ]
  then
    echo "No project name supplied"
    exit 1
fi

case "$1" in 
  -h|--help)
    echo "Help: config.sh <ProjectName>"
    exit 1
esac

echo "Project Name: $1"

declare -a branchs=("Development")
declare -a compile=("/SRC" "/Build")
declare -a paths=("/App/Libs" "/App/Styles" "/App/Config" "/App/Images" "/Modules/Common/Views" 
  "/Modules/SampleModule/Services" "/Modules/SampleModule/ViewModels" "/Modules/SampleModule/Views"
  "/Modules/Shell/ViewModels" "/Modules/Shell/Views")

echo "[1] Creating Folders"

for i in "${branchs[@]}"
do
  for j in "${compile[@]}"
  do
    for k in "${paths[@]}"
    do
      mkdir -p "$1/$i$j$k" > /dev/null
    done
  done
done

echo "[1] Done"

echo "[2] Configuring Dependencies"

cat > package.json << EOF 
{
  "name": "Test",
  "version": "0.0.1",
  "description": "The most awesome generator",
  "repository": "https://github.com/xnramx/Angular2-Seed-MVVM",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Nuno Morais <nram>",
  "license": "MIT",
  "devDependencies": {
    "connect": "^3.3.5",
    "del": "^1.1.1",
    "gulp": "^3.8.11",
    "gulp-bump": "^0.3.1",
    "gulp-concat": "^2.5.2",
    "gulp-filter": "^2.0.2",
    "gulp-inject": "^1.2.0",
    "gulp-minify-css": "^1.1.6",
    "gulp-minify-html": "^1.0.3",
    "gulp-plumber": "~1.0.1",
    "gulp-sourcemaps": "~1.5.2",
    "gulp-template": "^3.0.0",
    "gulp-typescript": "~2.7.5",
    "gulp-uglify": "^1.2.0",
    "open": "0.0.5",
    "run-sequence": "^1.1.0",
    "semver": "^4.3.6",
    "serve-static": "^1.9.2",
    "stream-series": "^0.1.1",
    "systemjs-builder": "^0.10.6",
    "gulp-folders": "^1.1.0",
    "typescript": "~1.5.0-beta"
  },
  "dependencies": {
    "angular2": "2.0.0-alpha.26",
    "es6-module-loader": "^0.15.0",
    "systemjs": "^0.16.0",
    "zone.js": "^0.4.1",
    "reflect-metadata": "0.1.0"
  }
}
EOF

cp package.json $1/Development/
echo "[2] Installing dependencies"

npm install > /dev/null

cp -af node_modules $1/Development/
cp -af typings $1/Development/

echo "[2] Configuring Gulp"

cat > $1/Development/gulpfile.js << EOF

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


EOF

echo "[2] Done"

echo "[3] Writing Files"

cat > $1/Development/tsconfig.json << EOF 
{
  "version": "1.5.0",
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "declaration": false,
    "noImplicitAny": false,
    "removeComments": true,
    "noLib": false,
    "emitDecoratorMetadata": true,
    "sourceMap": true,
    "listFiles": true
  },
  "files": []
}

EOF

cat > $1/Development/SRC/APP/Config/Config.ts << EOF 

/// <reference path="../../../typings/custom.system.d.ts" />
System.config({
  paths: {'*': '*.js?v=<%= VERSION %>'}
});

// Ugly workaround of systemjs issue https://github.com/systemjs/systemjs/issues/487
(function () {
  var c = System.defined['angular2/core'];
  var i = c.deps.indexOf('angular2/src/core/compiler/interfaces');
  if (i >= 0) {
    c.deps[i] = 'angular2/src/core/zone/ng_zone';
  }
}());

System.import('./App/Config/Initialize')
  .catch(e => console.error(e,
    'Report this error at https://github.com/xnramx/Angular2-Seed-MVVM/issues'));
     
EOF

cat > $1/Development/SRC/APP/Config/Initialize.ts << EOF 

import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';

import {Shell} from 'Modules/Shell/Views/ShellView';

bootstrap(Shell.Views.ShellView, [routerInjectables]);

EOF

cat > $1/Development/SRC/Modules/Common/Views/ViewBase.ts << EOF
export module Common.Views
{
	export class ViewBase<T>
	{	
		//#region Properties
		
		public ViewModel: T;
		
		//#endregion
		
		//#region Constructors
		
		public constructor(viewModel: T)
		{
			this.ViewModel = viewModel;
		}
		
		//#endregion
	}
}
EOF


cat > $1/Development/SRC/Modules/SampleModule/Services/NameList.ts << EOF

import {bind, Inject, Binding} from 'angular2/angular2';

export module SampleModule.Services
{
  export class NamesList 
  {
    //#region Static Properties
    
    public static Injectables: Binding[] = [bind(NamesList).toClass(NamesList)];
    
    //#endregion
    
    //#region Properties
    
    public Names: Array<string>;
    
    //#endregion
    
    //#region Constructor
    
    constructor() {
      this.Names = ['Dijkstra', 'Knuth', 'Turing', 'Hopper'];
    }
    
    //#endregion
    
    //#region Methods - Get
    
    public Get(): Array<string> {
      return this.Names;
    }
    
    //#endregion
    
    //#region Methods - Add
    
    Add(name: string) {
      this.Names.push(name);
    }
    
    //#endregion
  }
}


EOF

cat > $1/Development/SRC/Modules/SampleModule/ViewModels/SampleViewModel.ts << EOF

import {Component, ViewAnnotation as View, NgFor} from 'angular2/angular2';
import {bind, Inject, Binding} from 'angular2/angular2';
import {SampleModule as SampleModuleNameList } from '../Services/NameList';

export module SampleModule.ViewModels
{
	export class SampleViewModel
	{
		//#region Static
		
		public static Injectables: Binding[] = [bind(SampleViewModel).toClass(SampleViewModel)].concat(
			SampleModuleNameList.Services.NamesList.Injectables);
		
		//#endregion
		
		//#region Properties
		
		public ModuleName: string = "SampleViewModel";
		public NameList: SampleModuleNameList.Services.NamesList;
		
		//#endregion
		
		//#region Constructors
		
		public constructor(@Inject(SampleModuleNameList.Services.NamesList) 
					nameList: SampleModuleNameList.Services.NamesList)
		{
			this.NameList = nameList;
		} 
		
		//#endregion
		
		//#region Methods - 
		
		public AddName(newname) {
			this.NameList.Add(newname.value);
			newname.value = '';
		}
		
		//#endregion
	}
}

EOF

cat > $1/Development/SRC/Modules/SampleModule/ViewModels/SampleViewModel1.ts << EOF
import {Component, ViewAnnotation as View, NgFor} from 'angular2/angular2';
import {bind, Inject, Binding} from 'angular2/angular2';
import {SampleModule as SampleModuleNameList } from '../Services/NameList';

export module SampleModule.ViewModels
{
	export class SampleViewModel1
	{
		//#region Static
		
		public static Injectables: Binding[] = [bind(SampleViewModel1).toClass(SampleViewModel1)].concat(
			SampleModuleNameList.Services.NamesList.Injectables);
		
		//#endregion
		
		//#region Properties
		
		public ModuleName: string = "SampleViewModel1";
		public NameList: SampleModuleNameList.Services.NamesList;
		
		//#endregion
		
		//#region Constructors
		
		public constructor(@Inject(SampleModuleNameList.Services.NamesList) 
					nameList: SampleModuleNameList.Services.NamesList)
		{
			this.NameList = nameList;
		} 
		
		//#endregion
		
		//#region Methods - 
		
		public AddName(newname) {
			this.NameList.Add(newname.value);
			newname.value = '';
		}
		
		//#endregion
	}
}

EOF


cat > $1/Development/SRC/Modules/SampleModule/Views/SampleView.ts << EOF
import {Component, View, NgFor, Inject} from 'angular2/angular2';
import {Common} from '../../Common/Views/ViewBase';
import {SampleModule as SampleModuleVM} from '../ViewModels/SampleViewModel';

export module SampleModule.Views
{
	@Component({
    	selector: SampleView.Selector,
		appInjector: [SampleModuleVM.ViewModels.SampleViewModel.Injectables]
  	})
	  
  	@View({
    	templateUrl: SampleView.TemplateURL,
		directives: [NgFor]
  	})
	 
	export class SampleView extends Common.Views.ViewBase<SampleModuleVM.ViewModels.SampleViewModel>
	{
		//#region Static
		
		public static Selector: string = "SampleModule-View-SampleView";
		public static TemplateURL: string = "./Modules/SampleModule/Views/SampleView.html?v=<%= VERSION %>";
		
		//#endregion
		
		//#region Constructors
		
		public constructor(@Inject(SampleModuleVM.ViewModels.SampleViewModel) 
				viewModel: SampleModuleVM.ViewModels.SampleViewModel)
		{
			super(viewModel);
		}
		
		//#endregion
	}
}
EOF


cat > $1/Development/SRC/Modules/SampleModule/Views/SampleView.html << EOF
<p>Name: {{ ViewModel.ModuleName }}!</p>
<p>
  For reward, here is a list of awesome computer scientists!
</p>

<p>
  You want more? Add them yourself!
</p>
<p>
  <input #newname>
  <button (click)="ViewModel.AddName(newname)">Add</button>
</p>
<ul>
  <li *ng-for="#name of ViewModel.NameList.Names">{{name}}</li>
</ul>

EOF

cat > $1/Development/SRC/Modules/SampleModule/Views/SampleView1.ts << EOF
import {Component, View, NgFor, Inject} from 'angular2/angular2';
import {Common} from '../../Common/Views/ViewBase';
import {SampleModule as SampleModuleVM1} from '../ViewModels/SampleViewModel1';

export module SampleModule.Views
{
	@Component({
    	selector: SampleView1.Selector,
		appInjector: [SampleModuleVM1.ViewModels.SampleViewModel1.Injectables]
  	})
	  
  	@View({
    	templateUrl: SampleView1.TemplateURL,
		directives: [NgFor]
  	})
	 
	export class SampleView1 extends Common.Views.ViewBase<SampleModuleVM1.ViewModels.SampleViewModel1>
	{
		//#region Static
		
		public static Selector: string = "SampleModule-View-SampleView1";
		public static TemplateURL: string = "./Modules/SampleModule/Views/SampleView1.html?v=<%= VERSION %>";
		
		//#endregion
		
		//#region Constructors
		
		public constructor(@Inject(SampleModuleVM1.ViewModels.SampleViewModel1) 
				viewModel: SampleModuleVM1.ViewModels.SampleViewModel1)
		{
			super(viewModel);
		}
		
		//#endregion
	}
}
EOF

cat > $1/Development/SRC/Modules/SampleModule/Views/SampleView1.html << EOF
<p>Name: {{ ViewModel.ModuleName }}!</p>
<p>
  For reward, here is a list of awesome computer scientists!
</p>

<p>
  You want more? Add them yourself!
</p>
<p>
  <input #newname>
  <button (click)="ViewModel.AddName(newname)">Add</button>
</p>
<ul>
  <li *ng-for="#name of ViewModel.NameList.Names">{{name}}</li>
</ul>

EOF

cat > $1/Development/SRC/Modules/Shell/Views/ShellView.html << EOF
<section class="shell">
  <nav>
    <a router-link="sample">Sample</a>
    <a router-link="sample1">Sample1</a>
  </nav>

  <router-outlet></router-outlet>
</section>
EOF

cat > $1/Development/SRC/Modules/Shell/Views/ShellView.ts << EOF
/// <reference path="../../../../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';

import {SampleModule} from 'Modules/SampleModule/Views/SampleView';
import {SampleModule as SampleModule1} from 'Modules/SampleModule/Views/SampleView1';

export module Shell.Views
{
  @Component({
    selector: 'shell'
  })
  
  @RouteConfig([
    { path: '/', component: SampleModule.Views.SampleView, as: 'sample' },
    { path: '/sample1', component: SampleModule1.Views.SampleView1, as: 'sample1' }
  ])
  
  @View({
    templateUrl: './Modules/Shell/Views/ShellView.html?v=<%= VERSION %>',
    directives: [RouterOutlet, RouterLink]
  })
  
  export class ShellView {}
}
EOF

cat > $1/Development/SRC/index.html << EOF
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Test Project</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- inject:css -->
  <!-- endinject -->
</head>
<body>

  <shell>Loading...</shell>

  <!-- inject:js -->
  <!-- endinject -->

  <script src="./App/Config/Config.js?v=<%= VERSION %>"></script>

</body>
</html>
EOF
echo "[3] Done"