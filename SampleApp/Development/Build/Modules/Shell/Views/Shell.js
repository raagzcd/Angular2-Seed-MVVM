if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../../../../typings/tsd.d.ts" />
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var SampleView_1 = require('Modules/SampleModule/Views/SampleView');
var SampleView1_1 = require('Modules/SampleModule/Views/SampleView1');
var Shell = (function () {
    function Shell() {
    }
    Shell = __decorate([
        angular2_1.Component({
            selector: 'shell'
        }),
        router_1.RouteConfig([
            { path: '/', component: SampleView_1.SampleModule.Views.SampleView, as: 'sample' },
            { path: '/sample1', component: SampleView1_1.SampleModule.Views.SampleView1, as: 'sample1' }
        ]),
        angular2_1.View({
            templateUrl: './Modules/Shell/Views/Shell.html?v=0.0.1',
            directives: [router_1.RouterOutlet, router_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [])
    ], Shell);
    return Shell;
})();
angular2_1.bootstrap(Shell, [router_1.routerInjectables]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZHVsZXMvU2hlbGwvVmlld3MvU2hlbGwudHMiXSwibmFtZXMiOlsiU2hlbGwiLCJTaGVsbC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxBQUNBLHFEQURxRDtBQUNyRCx5QkFBZ0QsbUJBQW1CLENBQUMsQ0FBQTtBQUNwRSx1QkFBdUUsaUJBQWlCLENBQUMsQ0FBQTtBQUV6RiwyQkFBMkIsdUNBQXVDLENBQUMsQ0FBQTtBQUNuRSw0QkFBNEMsd0NBQXdDLENBQUMsQ0FBQTtBQUVyRjtJQUFBQTtJQWFhQyxDQUFDQTtJQWJkRDtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsT0FBT0E7U0FDbEJBLENBQUNBO1FBRURBLG9CQUFXQSxDQUFDQTtZQUNYQSxFQUFFQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFFQSxTQUFTQSxFQUFFQSx5QkFBWUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsVUFBVUEsRUFBRUEsRUFBRUEsRUFBRUEsUUFBUUEsRUFBRUE7WUFDckVBLEVBQUVBLElBQUlBLEVBQUVBLFVBQVVBLEVBQUVBLFNBQVNBLEVBQUVBLDBCQUFhQSxDQUFDQSxLQUFLQSxDQUFDQSxXQUFXQSxFQUFFQSxFQUFFQSxFQUFFQSxTQUFTQSxFQUFFQTtTQUNoRkEsQ0FBQ0E7UUFFREEsZUFBSUEsQ0FBQ0E7WUFDSkEsV0FBV0EsRUFBRUEsbURBQW1EQTtZQUNoRUEsVUFBVUEsRUFBRUEsQ0FBQ0EscUJBQVlBLEVBQUVBLG1CQUFVQSxDQUFDQTtTQUN2Q0EsQ0FBQ0E7O2NBQ1lBO0lBQURBLFlBQUNBO0FBQURBLENBYmIsQUFhY0EsSUFBQTtBQUdkLG9CQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsMEJBQWlCLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6Ik1vZHVsZXMvU2hlbGwvVmlld3MvU2hlbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XG5pbXBvcnQge0NvbXBvbmVudCwgVmlldywgYm9vdHN0cmFwLCBOZ0Zvcn0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUm91dGVyT3V0bGV0LCBSb3V0ZXJMaW5rLCByb3V0ZXJJbmplY3RhYmxlc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuaW1wb3J0IHtTYW1wbGVNb2R1bGV9IGZyb20gJ01vZHVsZXMvU2FtcGxlTW9kdWxlL1ZpZXdzL1NhbXBsZVZpZXcnO1xuaW1wb3J0IHtTYW1wbGVNb2R1bGUgYXMgU2FtcGxlTW9kdWxlMX0gZnJvbSAnTW9kdWxlcy9TYW1wbGVNb2R1bGUvVmlld3MvU2FtcGxlVmlldzEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaGVsbCdcbn0pXG5cbkBSb3V0ZUNvbmZpZyhbXG4gIHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IFNhbXBsZU1vZHVsZS5WaWV3cy5TYW1wbGVWaWV3LCBhczogJ3NhbXBsZScgfSxcbiAgeyBwYXRoOiAnL3NhbXBsZTEnLCBjb21wb25lbnQ6IFNhbXBsZU1vZHVsZTEuVmlld3MuU2FtcGxlVmlldzEsIGFzOiAnc2FtcGxlMScgfVxuXSlcblxuQFZpZXcoe1xuICB0ZW1wbGF0ZVVybDogJy4vTW9kdWxlcy9TaGVsbC9WaWV3cy9TaGVsbC5odG1sP3Y9PCU9IFZFUlNJT04gJT4nLFxuICBkaXJlY3RpdmVzOiBbUm91dGVyT3V0bGV0LCBSb3V0ZXJMaW5rXVxufSlcbmNsYXNzIFNoZWxsIHt9XG5cblxuYm9vdHN0cmFwKFNoZWxsLCBbcm91dGVySW5qZWN0YWJsZXNdKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==