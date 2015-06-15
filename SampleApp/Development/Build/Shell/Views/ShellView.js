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
/// <reference path="../../../typings/tsd.d.ts" />
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var SampleView_1 = require('Modules/SampleModule/Views/SampleView');
var SampleView1_1 = require('Modules/SampleModule/Views/SampleView1');
var SampleModule_1 = require('Modules/SampleModule/SampleModule');
var Shell;
(function (Shell) {
    var Views;
    (function (Views) {
        var ShellView = (function () {
            function ShellView() {
            }
            ShellView.InjectableServices = SampleModule_1.SampleModule.Sample.InjectableServices;
            ShellView = __decorate([
                angular2_1.Component({
                    selector: 'shell'
                }),
                router_1.RouteConfig([
                    { path: '/', component: SampleView_1.SampleModule.Views.SampleView, as: 'sample' },
                    { path: '/#sample1', component: SampleView1_1.SampleModule.Views.SampleView1, as: 'sample1' }
                ]),
                angular2_1.View({
                    templateUrl: './Shell/Views/ShellView.html?v=0.0.1',
                    directives: [router_1.RouterOutlet, router_1.RouterLink]
                }), 
                __metadata('design:paramtypes', [])
            ], ShellView);
            return ShellView;
        })();
        Views.ShellView = ShellView;
    })(Views = Shell.Views || (Shell.Views = {}));
})(Shell = exports.Shell || (exports.Shell = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNoZWxsL1ZpZXdzL1NoZWxsVmlldy50cyJdLCJuYW1lcyI6WyJTaGVsbCIsIlNoZWxsLlZpZXdzIiwiU2hlbGwuVmlld3MuU2hlbGxWaWV3IiwiU2hlbGwuVmlld3MuU2hlbGxWaWV3LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLEFBQ0Esa0RBRGtEO0FBQ2xELHlCQUFnRCxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3BFLHVCQUF1RSxpQkFBaUIsQ0FBQyxDQUFBO0FBR3pGLDJCQUEyQix1Q0FBdUMsQ0FBQyxDQUFBO0FBQ25FLDRCQUE0Qyx3Q0FBd0MsQ0FBQyxDQUFBO0FBQ3JGLDZCQUFxQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBR3pFLElBQWMsS0FBSyxDQW1CbEI7QUFuQkQsV0FBYyxLQUFLO0lBQUNBLElBQUFBLEtBQUtBLENBbUJ4QkE7SUFuQm1CQSxXQUFBQSxLQUFLQSxFQUN6QkEsQ0FBQ0E7UUFDQ0M7WUFBQUM7WUFnQkFDLENBQUNBO1lBRGFELDRCQUFrQkEsR0FBY0EsMkJBQU1BLENBQUNBLE1BQU1BLENBQUNBLGtCQUFrQkEsQ0FBQ0E7WUFmL0VBO2dCQUFDQSxvQkFBU0EsQ0FBQ0E7b0JBQ1RBLFFBQVFBLEVBQUVBLE9BQU9BO2lCQUNsQkEsQ0FBQ0E7Z0JBRURBLG9CQUFXQSxDQUFDQTtvQkFDWEEsRUFBRUEsSUFBSUEsRUFBRUEsR0FBR0EsRUFBRUEsU0FBU0EsRUFBRUEseUJBQVlBLENBQUNBLEtBQUtBLENBQUNBLFVBQVVBLEVBQUVBLEVBQUVBLEVBQUVBLFFBQVFBLEVBQUVBO29CQUNyRUEsRUFBRUEsSUFBSUEsRUFBRUEsV0FBV0EsRUFBRUEsU0FBU0EsRUFBRUEsMEJBQWFBLENBQUNBLEtBQUtBLENBQUNBLFdBQVdBLEVBQUVBLEVBQUVBLEVBQUVBLFNBQVNBLEVBQUVBO2lCQUNqRkEsQ0FBQ0E7Z0JBRURBLGVBQUlBLENBQUNBO29CQUNKQSxXQUFXQSxFQUFFQSwrQ0FBK0NBO29CQUM1REEsVUFBVUEsRUFBRUEsQ0FBQ0EscUJBQVlBLEVBQUVBLG1CQUFVQSxDQUFDQTtpQkFDdkNBLENBQUNBOzswQkFJREE7WUFBREEsZ0JBQUNBO1FBQURBLENBaEJBRCxBQWdCQ0MsSUFBQUQ7UUFGWUEsZUFBU0EsWUFFckJBLENBQUFBO0lBQ0hBLENBQUNBLEVBbkJtQkQsS0FBS0EsR0FBTEEsV0FBS0EsS0FBTEEsV0FBS0EsUUFtQnhCQTtBQUFEQSxDQUFDQSxFQW5CYSxLQUFLLEdBQUwsYUFBSyxLQUFMLGFBQUssUUFtQmxCIiwiZmlsZSI6IlNoZWxsL1ZpZXdzL1NoZWxsVmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cbmltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBib290c3RyYXAsIE5nRm9yfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBSb3V0ZXJPdXRsZXQsIFJvdXRlckxpbmssIHJvdXRlckluamVjdGFibGVzfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtiaW5kLCBJbmplY3QsIEJpbmRpbmd9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcblxuaW1wb3J0IHtTYW1wbGVNb2R1bGV9IGZyb20gJ01vZHVsZXMvU2FtcGxlTW9kdWxlL1ZpZXdzL1NhbXBsZVZpZXcnO1xuaW1wb3J0IHtTYW1wbGVNb2R1bGUgYXMgU2FtcGxlTW9kdWxlMX0gZnJvbSAnTW9kdWxlcy9TYW1wbGVNb2R1bGUvVmlld3MvU2FtcGxlVmlldzEnO1xuaW1wb3J0IHtTYW1wbGVNb2R1bGUgYXMgU2FtcGxlfSBmcm9tICdNb2R1bGVzL1NhbXBsZU1vZHVsZS9TYW1wbGVNb2R1bGUnO1xuXG5cbmV4cG9ydCBtb2R1bGUgU2hlbGwuVmlld3NcbntcbiAgQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaGVsbCdcbiAgfSlcbiAgXG4gIEBSb3V0ZUNvbmZpZyhbXG4gICAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogU2FtcGxlTW9kdWxlLlZpZXdzLlNhbXBsZVZpZXcsIGFzOiAnc2FtcGxlJyB9LFxuICAgIHsgcGF0aDogJy8jc2FtcGxlMScsIGNvbXBvbmVudDogU2FtcGxlTW9kdWxlMS5WaWV3cy5TYW1wbGVWaWV3MSwgYXM6ICdzYW1wbGUxJyB9XG4gIF0pXG4gIFxuICBAVmlldyh7XG4gICAgdGVtcGxhdGVVcmw6ICcuL1NoZWxsL1ZpZXdzL1NoZWxsVmlldy5odG1sP3Y9PCU9IFZFUlNJT04gJT4nLFxuICAgIGRpcmVjdGl2ZXM6IFtSb3V0ZXJPdXRsZXQsIFJvdXRlckxpbmtdXG4gIH0pXG4gIFxuICBleHBvcnQgY2xhc3MgU2hlbGxWaWV3IHtcblx0XHRwdWJsaWMgc3RhdGljIEluamVjdGFibGVTZXJ2aWNlczogQmluZGluZ1tdID0gU2FtcGxlLlNhbXBsZS5JbmplY3RhYmxlU2VydmljZXM7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==