/// <reference path="../../../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';
import {bind, Inject, Binding} from 'angular2/angular2';

import {SampleModule} from 'Modules/SampleModule/Views/SampleView';
import {SampleModule as SampleModule1} from 'Modules/SampleModule/Views/SampleView1';
import {SampleModule as Sample} from 'Modules/SampleModule/SampleModule';


export module Shell.Views
{
  @Component({
    selector: 'shell'
  })
  
  @RouteConfig([
    { path: '/', component: SampleModule.Views.SampleView, as: 'sample' },
    { path: '/#sample1', component: SampleModule1.Views.SampleView1, as: 'sample1' }
  ])
  
  @View({
    templateUrl: './Shell/Views/ShellView.html?v=<%= VERSION %>',
    directives: [RouterOutlet, RouterLink]
  })
  
  export class ShellView {
		public static InjectableServices: Binding[] = Sample.Sample.InjectableServices;
  }
}
