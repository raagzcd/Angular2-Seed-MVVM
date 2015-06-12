var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
if (typeof __param !== "function") __param = function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var ViewBase_1 = require('../../Common/Views/ViewBase');
var SampleViewModel_1 = require('../ViewModels/SampleViewModel');
var SampleModule;
(function (SampleModule) {
    var Views;
    (function (Views) {
        var SampleView = (function (_super) {
            __extends(SampleView, _super);
            function SampleView(viewModel) {
                _super.call(this, viewModel);
            }
            SampleView.Selector = "SampleModule-View-SampleView";
            SampleView.TemplateURL = "./Modules/SampleModule/Views/SampleView.html?v=0.0.1";
            SampleView = __decorate([
                angular2_1.Component({
                    selector: SampleView.Selector,
                    appInjector: [SampleViewModel_1.SampleModule.ViewModels.SampleViewModel.Injectables]
                }),
                angular2_1.View({
                    templateUrl: SampleView.TemplateURL,
                    directives: [angular2_1.NgFor]
                }),
                __param(0, angular2_1.Inject(SampleViewModel_1.SampleModule.ViewModels.SampleViewModel)), 
                __metadata('design:paramtypes', [SampleViewModel_1.SampleModule.ViewModels.SampleViewModel])
            ], SampleView);
            return SampleView;
        })(ViewBase_1.Common.Views.ViewBase);
        Views.SampleView = SampleView;
    })(Views = SampleModule.Views || (SampleModule.Views = {}));
})(SampleModule = exports.SampleModule || (exports.SampleModule = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZHVsZXMvU2FtcGxlTW9kdWxlL1ZpZXdzL1NhbXBsZVZpZXcudHMiXSwibmFtZXMiOlsiU2FtcGxlTW9kdWxlIiwiU2FtcGxlTW9kdWxlLlZpZXdzIiwiU2FtcGxlTW9kdWxlLlZpZXdzLlNhbXBsZVZpZXciLCJTYW1wbGVNb2R1bGUuVmlld3MuU2FtcGxlVmlldy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5QkFBNkMsbUJBQW1CLENBQUMsQ0FBQTtBQUNqRSx5QkFBcUIsNkJBQTZCLENBQUMsQ0FBQTtBQUNuRCxnQ0FBNkMsK0JBQStCLENBQUMsQ0FBQTtBQUU3RSxJQUFjLFlBQVksQ0ErQnpCO0FBL0JELFdBQWMsWUFBWTtJQUFDQSxJQUFBQSxLQUFLQSxDQStCL0JBO0lBL0IwQkEsV0FBQUEsS0FBS0EsRUFDaENBLENBQUNBO1FBQ0FDO1lBVWdDQyw4QkFBZ0VBO1lBVy9GQSxvQkFDRUEsU0FBb0RBO2dCQUVyREMsa0JBQU1BLFNBQVNBLENBQUNBLENBQUNBO1lBQ2xCQSxDQUFDQTtZQVhhRCxtQkFBUUEsR0FBV0EsOEJBQThCQSxDQUFDQTtZQUNsREEsc0JBQVdBLEdBQVdBLCtEQUErREEsQ0FBQ0E7WUFmckdBO2dCQUFDQSxvQkFBU0EsQ0FBQ0E7b0JBQ1BBLFFBQVFBLEVBQUVBLFVBQVVBLENBQUNBLFFBQVFBO29CQUNoQ0EsV0FBV0EsRUFBRUEsQ0FBQ0EsOEJBQWNBLENBQUNBLFVBQVVBLENBQUNBLGVBQWVBLENBQUNBLFdBQVdBLENBQUNBO2lCQUNsRUEsQ0FBQ0E7Z0JBRURBLGVBQUlBLENBQUNBO29CQUNKQSxXQUFXQSxFQUFFQSxVQUFVQSxDQUFDQSxXQUFXQTtvQkFDdENBLFVBQVVBLEVBQUVBLENBQUNBLGdCQUFLQSxDQUFDQTtpQkFDakJBLENBQUNBO2dCQWFnQkEsV0FBQ0EsaUJBQU1BLENBQUNBLDhCQUFjQSxDQUFDQSxVQUFVQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFBQTs7MkJBT3JFQTtZQUFEQSxpQkFBQ0E7UUFBREEsQ0E1QkFELEFBNEJDQyxFQWxCK0JELGlCQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxRQUFRQSxFQWtCcERBO1FBbEJZQSxnQkFBVUEsYUFrQnRCQSxDQUFBQTtJQUNGQSxDQUFDQSxFQS9CMEJELEtBQUtBLEdBQUxBLGtCQUFLQSxLQUFMQSxrQkFBS0EsUUErQi9CQTtBQUFEQSxDQUFDQSxFQS9CYSxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQStCekIiLCJmaWxlIjoiTW9kdWxlcy9TYW1wbGVNb2R1bGUvVmlld3MvU2FtcGxlVmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3LCBOZ0ZvciwgSW5qZWN0fSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge0NvbW1vbn0gZnJvbSAnLi4vLi4vQ29tbW9uL1ZpZXdzL1ZpZXdCYXNlJztcbmltcG9ydCB7U2FtcGxlTW9kdWxlIGFzIFNhbXBsZU1vZHVsZVZNfSBmcm9tICcuLi9WaWV3TW9kZWxzL1NhbXBsZVZpZXdNb2RlbCc7XG5cbmV4cG9ydCBtb2R1bGUgU2FtcGxlTW9kdWxlLlZpZXdzXG57XG5cdEBDb21wb25lbnQoe1xuICAgIFx0c2VsZWN0b3I6IFNhbXBsZVZpZXcuU2VsZWN0b3IsXG5cdFx0YXBwSW5qZWN0b3I6IFtTYW1wbGVNb2R1bGVWTS5WaWV3TW9kZWxzLlNhbXBsZVZpZXdNb2RlbC5JbmplY3RhYmxlc11cbiAgXHR9KVxuXHQgIFxuICBcdEBWaWV3KHtcbiAgICBcdHRlbXBsYXRlVXJsOiBTYW1wbGVWaWV3LlRlbXBsYXRlVVJMLFxuXHRcdGRpcmVjdGl2ZXM6IFtOZ0Zvcl1cbiAgXHR9KVxuXHQgXG5cdGV4cG9ydCBjbGFzcyBTYW1wbGVWaWV3IGV4dGVuZHMgQ29tbW9uLlZpZXdzLlZpZXdCYXNlPFNhbXBsZU1vZHVsZVZNLlZpZXdNb2RlbHMuU2FtcGxlVmlld01vZGVsPlxuXHR7XG5cdFx0Ly8jcmVnaW9uIFN0YXRpY1xuXHRcdFxuXHRcdHB1YmxpYyBzdGF0aWMgU2VsZWN0b3I6IHN0cmluZyA9IFwiU2FtcGxlTW9kdWxlLVZpZXctU2FtcGxlVmlld1wiO1xuXHRcdHB1YmxpYyBzdGF0aWMgVGVtcGxhdGVVUkw6IHN0cmluZyA9IFwiLi9Nb2R1bGVzL1NhbXBsZU1vZHVsZS9WaWV3cy9TYW1wbGVWaWV3Lmh0bWw/dj08JT0gVkVSU0lPTiAlPlwiO1xuXHRcdFxuXHRcdC8vI2VuZHJlZ2lvblxuXHRcdFxuXHRcdC8vI3JlZ2lvbiBDb25zdHJ1Y3RvcnNcblx0XHRcblx0XHRwdWJsaWMgY29uc3RydWN0b3IoQEluamVjdChTYW1wbGVNb2R1bGVWTS5WaWV3TW9kZWxzLlNhbXBsZVZpZXdNb2RlbCkgXG5cdFx0XHRcdHZpZXdNb2RlbDogU2FtcGxlTW9kdWxlVk0uVmlld01vZGVscy5TYW1wbGVWaWV3TW9kZWwpXG5cdFx0e1xuXHRcdFx0c3VwZXIodmlld01vZGVsKTtcblx0XHR9XG5cdFx0XG5cdFx0Ly8jZW5kcmVnaW9uXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==