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
var NameList_1 = require('../Services/NameList');
var SampleModule;
(function (SampleModule) {
    var ViewModels;
    (function (ViewModels) {
        var SampleViewModel = (function () {
            function SampleViewModel(nameList) {
                this.ModuleName = "SampleViewModel";
                this.NameList = nameList;
            }
            SampleViewModel.prototype.AddName = function (newname) {
                this.NameList.Add(newname.value);
                newname.value = '';
            };
            SampleViewModel.Injectables = [
                angular2_1.bind(SampleViewModel).toClass(SampleViewModel),
                angular2_1.bind(NameList_1.SampleModule.Services.NamesList).toClass(NameList_1.SampleModule.Services.NamesList)];
            SampleViewModel = __decorate([
                __param(0, angular2_1.Inject(NameList_1.SampleModule.Services.NamesList)), 
                __metadata('design:paramtypes', [NameList_1.SampleModule.Services.NamesList])
            ], SampleViewModel);
            return SampleViewModel;
        })();
        ViewModels.SampleViewModel = SampleViewModel;
    })(ViewModels = SampleModule.ViewModels || (SampleModule.ViewModels = {}));
})(SampleModule = exports.SampleModule || (exports.SampleModule = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZHVsZXMvU2FtcGxlTW9kdWxlL1ZpZXdNb2RlbHMvU2FtcGxlVmlld01vZGVsLnRzIl0sIm5hbWVzIjpbIlNhbXBsZU1vZHVsZSIsIlNhbXBsZU1vZHVsZS5WaWV3TW9kZWxzIiwiU2FtcGxlTW9kdWxlLlZpZXdNb2RlbHMuU2FtcGxlVmlld01vZGVsIiwiU2FtcGxlTW9kdWxlLlZpZXdNb2RlbHMuU2FtcGxlVmlld01vZGVsLmNvbnN0cnVjdG9yIiwiU2FtcGxlTW9kdWxlLlZpZXdNb2RlbHMuU2FtcGxlVmlld01vZGVsLkFkZE5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUEseUJBQW9DLG1CQUFtQixDQUFDLENBQUE7QUFDeEQseUJBQW9ELHNCQUFzQixDQUFDLENBQUE7QUFFM0UsSUFBYyxZQUFZLENBc0N6QjtBQXRDRCxXQUFjLFlBQVk7SUFBQ0EsSUFBQUEsVUFBVUEsQ0FzQ3BDQTtJQXRDMEJBLFdBQUFBLFVBQVVBLEVBQ3JDQSxDQUFDQTtRQUNBQztZQW1CQ0MseUJBQ0dBLFFBQWlEQTtnQkFSN0NDLGVBQVVBLEdBQVdBLGlCQUFpQkEsQ0FBQ0E7Z0JBVTdDQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxRQUFRQSxDQUFDQTtZQUMxQkEsQ0FBQ0E7WUFNTUQsaUNBQU9BLEdBQWRBLFVBQWVBLE9BQU9BO2dCQUNyQkUsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2pDQSxPQUFPQSxDQUFDQSxLQUFLQSxHQUFHQSxFQUFFQSxDQUFDQTtZQUNwQkEsQ0FBQ0E7WUE1QmFGLDJCQUFXQSxHQUFjQTtnQkFDdENBLGVBQUlBLENBQUNBLGVBQWVBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLGVBQWVBLENBQUNBO2dCQUM5Q0EsZUFBSUEsQ0FBQ0EsdUJBQW9CQSxDQUFDQSxRQUFRQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSx1QkFBb0JBLENBQUNBLFFBQVFBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO1lBTmxHQTtnQkFtQm9CQSxXQUFDQSxpQkFBTUEsQ0FBQ0EsdUJBQW9CQSxDQUFDQSxRQUFRQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFBQTs7Z0NBZ0JuRUE7WUFBREEsc0JBQUNBO1FBQURBLENBbkNBRCxBQW1DQ0MsSUFBQUQ7UUFuQ1lBLDBCQUFlQSxrQkFtQzNCQSxDQUFBQTtJQUNGQSxDQUFDQSxFQXRDMEJELFVBQVVBLEdBQVZBLHVCQUFVQSxLQUFWQSx1QkFBVUEsUUFzQ3BDQTtBQUFEQSxDQUFDQSxFQXRDYSxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQXNDekIiLCJmaWxlIjoiTW9kdWxlcy9TYW1wbGVNb2R1bGUvVmlld01vZGVscy9TYW1wbGVWaWV3TW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7Q29tcG9uZW50LCBWaWV3QW5ub3RhdGlvbiBhcyBWaWV3LCBOZ0Zvcn0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtiaW5kLCBJbmplY3QsIEJpbmRpbmd9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7U2FtcGxlTW9kdWxlIGFzIFNhbXBsZU1vZHVsZU5hbWVMaXN0IH0gZnJvbSAnLi4vU2VydmljZXMvTmFtZUxpc3QnO1xuXG5leHBvcnQgbW9kdWxlIFNhbXBsZU1vZHVsZS5WaWV3TW9kZWxzXG57XG5cdGV4cG9ydCBjbGFzcyBTYW1wbGVWaWV3TW9kZWxcblx0e1xuXHRcdC8vI3JlZ2lvbiBTdGF0aWNcblx0XHRcblx0XHRwdWJsaWMgc3RhdGljIEluamVjdGFibGVzOiBCaW5kaW5nW10gPSBbXG5cdFx0XHRiaW5kKFNhbXBsZVZpZXdNb2RlbCkudG9DbGFzcyhTYW1wbGVWaWV3TW9kZWwpLFxuXHRcdFx0YmluZChTYW1wbGVNb2R1bGVOYW1lTGlzdC5TZXJ2aWNlcy5OYW1lc0xpc3QpLnRvQ2xhc3MoU2FtcGxlTW9kdWxlTmFtZUxpc3QuU2VydmljZXMuTmFtZXNMaXN0KV07XG5cdFx0XG5cdFx0Ly8jZW5kcmVnaW9uXG5cdFx0XG5cdFx0Ly8jcmVnaW9uIFByb3BlcnRpZXNcblx0XHRcblx0XHRwdWJsaWMgTW9kdWxlTmFtZTogc3RyaW5nID0gXCJTYW1wbGVWaWV3TW9kZWxcIjtcblx0XHRwdWJsaWMgTmFtZUxpc3Q6IFNhbXBsZU1vZHVsZU5hbWVMaXN0LlNlcnZpY2VzLk5hbWVzTGlzdDtcblx0XHRcblx0XHQvLyNlbmRyZWdpb25cblx0XHRcblx0XHQvLyNyZWdpb24gQ29uc3RydWN0b3JzXG5cdFx0XG5cdFx0cHVibGljIGNvbnN0cnVjdG9yKEBJbmplY3QoU2FtcGxlTW9kdWxlTmFtZUxpc3QuU2VydmljZXMuTmFtZXNMaXN0KSBcblx0XHRcdFx0XHRuYW1lTGlzdDogU2FtcGxlTW9kdWxlTmFtZUxpc3QuU2VydmljZXMuTmFtZXNMaXN0KVxuXHRcdHtcblx0XHRcdHRoaXMuTmFtZUxpc3QgPSBuYW1lTGlzdDtcblx0XHR9IFxuXHRcdFxuXHRcdC8vI2VuZHJlZ2lvblxuXHRcdFxuXHRcdC8vI3JlZ2lvbiBNZXRob2RzIC0gXG5cdFx0XG5cdFx0cHVibGljIEFkZE5hbWUobmV3bmFtZSkge1xuXHRcdFx0dGhpcy5OYW1lTGlzdC5BZGQobmV3bmFtZS52YWx1ZSk7XG5cdFx0XHRuZXduYW1lLnZhbHVlID0gJyc7XG5cdFx0fVxuXHRcdFxuXHRcdC8vI2VuZHJlZ2lvblxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=