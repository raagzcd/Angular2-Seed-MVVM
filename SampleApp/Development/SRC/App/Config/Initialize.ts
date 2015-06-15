import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';

import {Shell} from 'Shell/Views/ShellView';

bootstrap(Shell.Views.ShellView, [routerInjectables, Shell.Views.ShellView.InjectableServices]);
