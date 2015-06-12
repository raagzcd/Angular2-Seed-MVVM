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
var SampleViewModel1_1 = require('../ViewModels/SampleViewModel1');
var SampleModule;
(function (SampleModule) {
    var Views;
    (function (Views) {
        var SampleView1 = (function (_super) {
            __extends(SampleView1, _super);
            function SampleView1(viewModel) {
                _super.call(this, viewModel);
            }
            SampleView1.Selector = "SampleModule-View-SampleView1";
            SampleView1.TemplateURL = "./Modules/SampleModule/Views/SampleView1.html?v=0.0.1";
            SampleView1 = __decorate([
                angular2_1.Component({
                    selector: SampleView1.Selector,
                    appInjector: [SampleViewModel1_1.SampleModule.ViewModels.SampleViewModel1.Injectables]
                }),
                angular2_1.View({
                    templateUrl: SampleView1.TemplateURL,
                    directives: [angular2_1.NgFor]
                }),
                __param(0, angular2_1.Inject(SampleViewModel1_1.SampleModule.ViewModels.SampleViewModel1)), 
                __metadata('design:paramtypes', [SampleViewModel1_1.SampleModule.ViewModels.SampleViewModel1])
            ], SampleView1);
            return SampleView1;
        })(ViewBase_1.Common.Views.ViewBase);
        Views.SampleView1 = SampleView1;
    })(Views = SampleModule.Views || (SampleModule.Views = {}));
})(SampleModule = exports.SampleModule || (exports.SampleModule = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZHVsZXMvU2FtcGxlTW9kdWxlL1ZpZXdzL1NhbXBsZVZpZXcxLnRzIl0sIm5hbWVzIjpbIlNhbXBsZU1vZHVsZSIsIlNhbXBsZU1vZHVsZS5WaWV3cyIsIlNhbXBsZU1vZHVsZS5WaWV3cy5TYW1wbGVWaWV3MSIsIlNhbXBsZU1vZHVsZS5WaWV3cy5TYW1wbGVWaWV3MS5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5QkFBNkMsbUJBQW1CLENBQUMsQ0FBQTtBQUNqRSx5QkFBcUIsNkJBQTZCLENBQUMsQ0FBQTtBQUNuRCxpQ0FBOEMsZ0NBQWdDLENBQUMsQ0FBQTtBQUUvRSxJQUFjLFlBQVksQ0ErQnpCO0FBL0JELFdBQWMsWUFBWTtJQUFDQSxJQUFBQSxLQUFLQSxDQStCL0JBO0lBL0IwQkEsV0FBQUEsS0FBS0EsRUFDaENBLENBQUNBO1FBQ0FDO1lBVWlDQywrQkFBa0VBO1lBV2xHQSxxQkFDRUEsU0FBc0RBO2dCQUV2REMsa0JBQU1BLFNBQVNBLENBQUNBLENBQUNBO1lBQ2xCQSxDQUFDQTtZQVhhRCxvQkFBUUEsR0FBV0EsK0JBQStCQSxDQUFDQTtZQUNuREEsdUJBQVdBLEdBQVdBLGdFQUFnRUEsQ0FBQ0E7WUFmdEdBO2dCQUFDQSxvQkFBU0EsQ0FBQ0E7b0JBQ1BBLFFBQVFBLEVBQUVBLFdBQVdBLENBQUNBLFFBQVFBO29CQUNqQ0EsV0FBV0EsRUFBRUEsQ0FBQ0EsK0JBQWVBLENBQUNBLFVBQVVBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7aUJBQ3BFQSxDQUFDQTtnQkFFREEsZUFBSUEsQ0FBQ0E7b0JBQ0pBLFdBQVdBLEVBQUVBLFdBQVdBLENBQUNBLFdBQVdBO29CQUN2Q0EsVUFBVUEsRUFBRUEsQ0FBQ0EsZ0JBQUtBLENBQUNBO2lCQUNqQkEsQ0FBQ0E7Z0JBYWdCQSxXQUFDQSxpQkFBTUEsQ0FBQ0EsK0JBQWVBLENBQUNBLFVBQVVBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQUE7OzRCQU92RUE7WUFBREEsa0JBQUNBO1FBQURBLENBNUJBRCxBQTRCQ0MsRUFsQmdDRCxpQkFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsUUFBUUEsRUFrQnJEQTtRQWxCWUEsaUJBQVdBLGNBa0J2QkEsQ0FBQUE7SUFDRkEsQ0FBQ0EsRUEvQjBCRCxLQUFLQSxHQUFMQSxrQkFBS0EsS0FBTEEsa0JBQUtBLFFBK0IvQkE7QUFBREEsQ0FBQ0EsRUEvQmEsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUErQnpCIiwiZmlsZSI6Ik1vZHVsZXMvU2FtcGxlTW9kdWxlL1ZpZXdzL1NhbXBsZVZpZXcxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIE5nRm9yLCBJbmplY3R9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7Q29tbW9ufSBmcm9tICcuLi8uLi9Db21tb24vVmlld3MvVmlld0Jhc2UnO1xuaW1wb3J0IHtTYW1wbGVNb2R1bGUgYXMgU2FtcGxlTW9kdWxlVk0xfSBmcm9tICcuLi9WaWV3TW9kZWxzL1NhbXBsZVZpZXdNb2RlbDEnO1xuXG5leHBvcnQgbW9kdWxlIFNhbXBsZU1vZHVsZS5WaWV3c1xue1xuXHRAQ29tcG9uZW50KHtcbiAgICBcdHNlbGVjdG9yOiBTYW1wbGVWaWV3MS5TZWxlY3Rvcixcblx0XHRhcHBJbmplY3RvcjogW1NhbXBsZU1vZHVsZVZNMS5WaWV3TW9kZWxzLlNhbXBsZVZpZXdNb2RlbDEuSW5qZWN0YWJsZXNdXG4gIFx0fSlcblx0ICBcbiAgXHRAVmlldyh7XG4gICAgXHR0ZW1wbGF0ZVVybDogU2FtcGxlVmlldzEuVGVtcGxhdGVVUkwsXG5cdFx0ZGlyZWN0aXZlczogW05nRm9yXVxuICBcdH0pXG5cdCBcblx0ZXhwb3J0IGNsYXNzIFNhbXBsZVZpZXcxIGV4dGVuZHMgQ29tbW9uLlZpZXdzLlZpZXdCYXNlPFNhbXBsZU1vZHVsZVZNMS5WaWV3TW9kZWxzLlNhbXBsZVZpZXdNb2RlbDE+XG5cdHtcblx0XHQvLyNyZWdpb24gU3RhdGljXG5cdFx0XG5cdFx0cHVibGljIHN0YXRpYyBTZWxlY3Rvcjogc3RyaW5nID0gXCJTYW1wbGVNb2R1bGUtVmlldy1TYW1wbGVWaWV3MVwiO1xuXHRcdHB1YmxpYyBzdGF0aWMgVGVtcGxhdGVVUkw6IHN0cmluZyA9IFwiLi9Nb2R1bGVzL1NhbXBsZU1vZHVsZS9WaWV3cy9TYW1wbGVWaWV3MS5odG1sP3Y9PCU9IFZFUlNJT04gJT5cIjtcblx0XHRcblx0XHQvLyNlbmRyZWdpb25cblx0XHRcblx0XHQvLyNyZWdpb24gQ29uc3RydWN0b3JzXG5cdFx0XG5cdFx0cHVibGljIGNvbnN0cnVjdG9yKEBJbmplY3QoU2FtcGxlTW9kdWxlVk0xLlZpZXdNb2RlbHMuU2FtcGxlVmlld01vZGVsMSkgXG5cdFx0XHRcdHZpZXdNb2RlbDogU2FtcGxlTW9kdWxlVk0xLlZpZXdNb2RlbHMuU2FtcGxlVmlld01vZGVsMSlcblx0XHR7XG5cdFx0XHRzdXBlcih2aWV3TW9kZWwpO1xuXHRcdH1cblx0XHRcblx0XHQvLyNlbmRyZWdpb25cblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9