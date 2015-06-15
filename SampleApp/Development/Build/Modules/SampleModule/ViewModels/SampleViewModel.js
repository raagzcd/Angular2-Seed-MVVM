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
            SampleViewModel.Injectables = [angular2_1.bind(SampleViewModel).toClass(SampleViewModel)];
            SampleViewModel = __decorate([
                __param(0, angular2_1.Inject(NameList_1.SampleModule.Services.NamesList)), 
                __metadata('design:paramtypes', [NameList_1.SampleModule.Services.NamesList])
            ], SampleViewModel);
            return SampleViewModel;
        })();
        ViewModels.SampleViewModel = SampleViewModel;
    })(ViewModels = SampleModule.ViewModels || (SampleModule.ViewModels = {}));
})(SampleModule = exports.SampleModule || (exports.SampleModule = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZHVsZXMvU2FtcGxlTW9kdWxlL1ZpZXdNb2RlbHMvU2FtcGxlVmlld01vZGVsLnRzIl0sIm5hbWVzIjpbIlNhbXBsZU1vZHVsZSIsIlNhbXBsZU1vZHVsZS5WaWV3TW9kZWxzIiwiU2FtcGxlTW9kdWxlLlZpZXdNb2RlbHMuU2FtcGxlVmlld01vZGVsIiwiU2FtcGxlTW9kdWxlLlZpZXdNb2RlbHMuU2FtcGxlVmlld01vZGVsLmNvbnN0cnVjdG9yIiwiU2FtcGxlTW9kdWxlLlZpZXdNb2RlbHMuU2FtcGxlVmlld01vZGVsLkFkZE5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUEseUJBQW9DLG1CQUFtQixDQUFDLENBQUE7QUFDeEQseUJBQW9ELHNCQUFzQixDQUFDLENBQUE7QUFFM0UsSUFBYyxZQUFZLENBb0N6QjtBQXBDRCxXQUFjLFlBQVk7SUFBQ0EsSUFBQUEsVUFBVUEsQ0FvQ3BDQTtJQXBDMEJBLFdBQUFBLFVBQVVBLEVBQ3JDQSxDQUFDQTtRQUNBQztZQWlCQ0MseUJBQ0dBLFFBQWlEQTtnQkFSN0NDLGVBQVVBLEdBQVdBLGlCQUFpQkEsQ0FBQ0E7Z0JBVTdDQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxRQUFRQSxDQUFDQTtZQUMxQkEsQ0FBQ0E7WUFNTUQsaUNBQU9BLEdBQWRBLFVBQWVBLE9BQU9BO2dCQUNyQkUsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2pDQSxPQUFPQSxDQUFDQSxLQUFLQSxHQUFHQSxFQUFFQSxDQUFDQTtZQUNwQkEsQ0FBQ0E7WUExQmFGLDJCQUFXQSxHQUFjQSxDQUFDQSxlQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUp6RkE7Z0JBaUJvQkEsV0FBQ0EsaUJBQU1BLENBQUNBLHVCQUFvQkEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQUE7O2dDQWdCbkVBO1lBQURBLHNCQUFDQTtRQUFEQSxDQWpDQUQsQUFpQ0NDLElBQUFEO1FBakNZQSwwQkFBZUEsa0JBaUMzQkEsQ0FBQUE7SUFDRkEsQ0FBQ0EsRUFwQzBCRCxVQUFVQSxHQUFWQSx1QkFBVUEsS0FBVkEsdUJBQVVBLFFBb0NwQ0E7QUFBREEsQ0FBQ0EsRUFwQ2EsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFvQ3pCIiwiZmlsZSI6Ik1vZHVsZXMvU2FtcGxlTW9kdWxlL1ZpZXdNb2RlbHMvU2FtcGxlVmlld01vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge0NvbXBvbmVudCwgVmlld0Fubm90YXRpb24gYXMgVmlldywgTmdGb3J9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7YmluZCwgSW5qZWN0LCBCaW5kaW5nfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge1NhbXBsZU1vZHVsZSBhcyBTYW1wbGVNb2R1bGVOYW1lTGlzdCB9IGZyb20gJy4uL1NlcnZpY2VzL05hbWVMaXN0JztcblxuZXhwb3J0IG1vZHVsZSBTYW1wbGVNb2R1bGUuVmlld01vZGVsc1xue1xuXHRleHBvcnQgY2xhc3MgU2FtcGxlVmlld01vZGVsXG5cdHtcblx0XHQvLyNyZWdpb24gU3RhdGljXG5cdFx0XG5cdFx0cHVibGljIHN0YXRpYyBJbmplY3RhYmxlczogQmluZGluZ1tdID0gW2JpbmQoU2FtcGxlVmlld01vZGVsKS50b0NsYXNzKFNhbXBsZVZpZXdNb2RlbCldO1xuXHRcdFxuXHRcdC8vI2VuZHJlZ2lvblxuXHRcdFxuXHRcdC8vI3JlZ2lvbiBQcm9wZXJ0aWVzXG5cdFx0XG5cdFx0cHVibGljIE1vZHVsZU5hbWU6IHN0cmluZyA9IFwiU2FtcGxlVmlld01vZGVsXCI7XG5cdFx0cHVibGljIE5hbWVMaXN0OiBTYW1wbGVNb2R1bGVOYW1lTGlzdC5TZXJ2aWNlcy5OYW1lc0xpc3Q7XG5cdFx0XG5cdFx0Ly8jZW5kcmVnaW9uXG5cdFx0XG5cdFx0Ly8jcmVnaW9uIENvbnN0cnVjdG9yc1xuXHRcdFxuXHRcdHB1YmxpYyBjb25zdHJ1Y3RvcihASW5qZWN0KFNhbXBsZU1vZHVsZU5hbWVMaXN0LlNlcnZpY2VzLk5hbWVzTGlzdCkgXG5cdFx0XHRcdFx0bmFtZUxpc3Q6IFNhbXBsZU1vZHVsZU5hbWVMaXN0LlNlcnZpY2VzLk5hbWVzTGlzdClcblx0XHR7XG5cdFx0XHR0aGlzLk5hbWVMaXN0ID0gbmFtZUxpc3Q7XG5cdFx0fSBcblx0XHRcblx0XHQvLyNlbmRyZWdpb25cblx0XHRcblx0XHQvLyNyZWdpb24gTWV0aG9kcyAtIFxuXHRcdFxuXHRcdHB1YmxpYyBBZGROYW1lKG5ld25hbWUpIHtcblx0XHRcdHRoaXMuTmFtZUxpc3QuQWRkKG5ld25hbWUudmFsdWUpO1xuXHRcdFx0bmV3bmFtZS52YWx1ZSA9ICcnO1xuXHRcdH1cblx0XHRcblx0XHQvLyNlbmRyZWdpb25cblx0fVxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=