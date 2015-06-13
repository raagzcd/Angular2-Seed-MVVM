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
var Shell;
(function (Shell) {
    var Views;
    (function (Views) {
        var ShellView = (function () {
            function ShellView() {
            }
            ShellView = __decorate([
                angular2_1.Component({
                    selector: 'shell'
                }),
                router_1.RouteConfig([
                    { path: '/', component: SampleView_1.SampleModule.Views.SampleView, as: 'sample' },
                    { path: '/sample1', component: SampleView1_1.SampleModule.Views.SampleView1, as: 'sample1' }
                ]),
                angular2_1.View({
                    templateUrl: './Modules/Shell/Views/ShellView.html?v=0.0.1',
                    directives: [router_1.RouterOutlet, router_1.RouterLink]
                }), 
                __metadata('design:paramtypes', [])
            ], ShellView);
            return ShellView;
        })();
        Views.ShellView = ShellView;
    })(Views = Shell.Views || (Shell.Views = {}));
})(Shell = exports.Shell || (exports.Shell = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZHVsZXMvU2hlbGwvVmlld3MvU2hlbGxWaWV3LnRzIl0sIm5hbWVzIjpbIlNoZWxsIiwiU2hlbGwuVmlld3MiLCJTaGVsbC5WaWV3cy5TaGVsbFZpZXciLCJTaGVsbC5WaWV3cy5TaGVsbFZpZXcuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsQUFDQSxxREFEcUQ7QUFDckQseUJBQWdELG1CQUFtQixDQUFDLENBQUE7QUFDcEUsdUJBQXVFLGlCQUFpQixDQUFDLENBQUE7QUFFekYsMkJBQTJCLHVDQUF1QyxDQUFDLENBQUE7QUFDbkUsNEJBQTRDLHdDQUF3QyxDQUFDLENBQUE7QUFFckYsSUFBYyxLQUFLLENBaUJsQjtBQWpCRCxXQUFjLEtBQUs7SUFBQ0EsSUFBQUEsS0FBS0EsQ0FpQnhCQTtJQWpCbUJBLFdBQUFBLEtBQUtBLEVBQ3pCQSxDQUFDQTtRQUNDQztZQUFBQztZQWN3QkMsQ0FBQ0E7WUFkekJEO2dCQUFDQSxvQkFBU0EsQ0FBQ0E7b0JBQ1RBLFFBQVFBLEVBQUVBLE9BQU9BO2lCQUNsQkEsQ0FBQ0E7Z0JBRURBLG9CQUFXQSxDQUFDQTtvQkFDWEEsRUFBRUEsSUFBSUEsRUFBRUEsR0FBR0EsRUFBRUEsU0FBU0EsRUFBRUEseUJBQVlBLENBQUNBLEtBQUtBLENBQUNBLFVBQVVBLEVBQUVBLEVBQUVBLEVBQUVBLFFBQVFBLEVBQUVBO29CQUNyRUEsRUFBRUEsSUFBSUEsRUFBRUEsVUFBVUEsRUFBRUEsU0FBU0EsRUFBRUEsMEJBQWFBLENBQUNBLEtBQUtBLENBQUNBLFdBQVdBLEVBQUVBLEVBQUVBLEVBQUVBLFNBQVNBLEVBQUVBO2lCQUNoRkEsQ0FBQ0E7Z0JBRURBLGVBQUlBLENBQUNBO29CQUNKQSxXQUFXQSxFQUFFQSx1REFBdURBO29CQUNwRUEsVUFBVUEsRUFBRUEsQ0FBQ0EscUJBQVlBLEVBQUVBLG1CQUFVQSxDQUFDQTtpQkFDdkNBLENBQUNBOzswQkFFdUJBO1lBQURBLGdCQUFDQTtRQUFEQSxDQWR4QkQsQUFjeUJDLElBQUFEO1FBQVpBLGVBQVNBLFlBQUdBLENBQUFBO0lBQzNCQSxDQUFDQSxFQWpCbUJELEtBQUtBLEdBQUxBLFdBQUtBLEtBQUxBLFdBQUtBLFFBaUJ4QkE7QUFBREEsQ0FBQ0EsRUFqQmEsS0FBSyxHQUFMLGFBQUssS0FBTCxhQUFLLFFBaUJsQiIsImZpbGUiOiJNb2R1bGVzL1NoZWxsL1ZpZXdzL1NoZWxsVmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbmltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBib290c3RyYXAsIE5nRm9yfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBSb3V0ZXJPdXRsZXQsIFJvdXRlckxpbmssIHJvdXRlckluamVjdGFibGVzfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5pbXBvcnQge1NhbXBsZU1vZHVsZX0gZnJvbSAnTW9kdWxlcy9TYW1wbGVNb2R1bGUvVmlld3MvU2FtcGxlVmlldyc7XG5pbXBvcnQge1NhbXBsZU1vZHVsZSBhcyBTYW1wbGVNb2R1bGUxfSBmcm9tICdNb2R1bGVzL1NhbXBsZU1vZHVsZS9WaWV3cy9TYW1wbGVWaWV3MSc7XG5cbmV4cG9ydCBtb2R1bGUgU2hlbGwuVmlld3NcbntcbiAgQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaGVsbCdcbiAgfSlcbiAgXG4gIEBSb3V0ZUNvbmZpZyhbXG4gICAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogU2FtcGxlTW9kdWxlLlZpZXdzLlNhbXBsZVZpZXcsIGFzOiAnc2FtcGxlJyB9LFxuICAgIHsgcGF0aDogJy9zYW1wbGUxJywgY29tcG9uZW50OiBTYW1wbGVNb2R1bGUxLlZpZXdzLlNhbXBsZVZpZXcxLCBhczogJ3NhbXBsZTEnIH1cbiAgXSlcbiAgXG4gIEBWaWV3KHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vTW9kdWxlcy9TaGVsbC9WaWV3cy9TaGVsbFZpZXcuaHRtbD92PTwlPSBWRVJTSU9OICU+JyxcbiAgICBkaXJlY3RpdmVzOiBbUm91dGVyT3V0bGV0LCBSb3V0ZXJMaW5rXVxuICB9KVxuICBcbiAgZXhwb3J0IGNsYXNzIFNoZWxsVmlldyB7fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9