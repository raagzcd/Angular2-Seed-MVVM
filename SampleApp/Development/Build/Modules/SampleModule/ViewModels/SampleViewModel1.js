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
        var SampleViewModel1 = (function () {
            function SampleViewModel1(nameList) {
                this.ModuleName = "SampleViewModel1";
                this.NameList = nameList;
            }
            SampleViewModel1.prototype.AddName = function (newname) {
                this.NameList.Add(newname.value);
                newname.value = '';
            };
            SampleViewModel1.Injectables = [angular2_1.bind(SampleViewModel1).toClass(SampleViewModel1)];
            SampleViewModel1 = __decorate([
                __param(0, angular2_1.Inject(NameList_1.SampleModule.Services.NamesList)), 
                __metadata('design:paramtypes', [NameList_1.SampleModule.Services.NamesList])
            ], SampleViewModel1);
            return SampleViewModel1;
        })();
        ViewModels.SampleViewModel1 = SampleViewModel1;
    })(ViewModels = SampleModule.ViewModels || (SampleModule.ViewModels = {}));
})(SampleModule = exports.SampleModule || (exports.SampleModule = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZHVsZXMvU2FtcGxlTW9kdWxlL1ZpZXdNb2RlbHMvU2FtcGxlVmlld01vZGVsMS50cyJdLCJuYW1lcyI6WyJTYW1wbGVNb2R1bGUiLCJTYW1wbGVNb2R1bGUuVmlld01vZGVscyIsIlNhbXBsZU1vZHVsZS5WaWV3TW9kZWxzLlNhbXBsZVZpZXdNb2RlbDEiLCJTYW1wbGVNb2R1bGUuVmlld01vZGVscy5TYW1wbGVWaWV3TW9kZWwxLmNvbnN0cnVjdG9yIiwiU2FtcGxlTW9kdWxlLlZpZXdNb2RlbHMuU2FtcGxlVmlld01vZGVsMS5BZGROYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLHlCQUFvQyxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3hELHlCQUFvRCxzQkFBc0IsQ0FBQyxDQUFBO0FBRTNFLElBQWMsWUFBWSxDQW9DekI7QUFwQ0QsV0FBYyxZQUFZO0lBQUNBLElBQUFBLFVBQVVBLENBb0NwQ0E7SUFwQzBCQSxXQUFBQSxVQUFVQSxFQUNyQ0EsQ0FBQ0E7UUFDQUM7WUFpQkNDLDBCQUNHQSxRQUFpREE7Z0JBUjdDQyxlQUFVQSxHQUFXQSxrQkFBa0JBLENBQUNBO2dCQVU5Q0EsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsUUFBUUEsQ0FBQ0E7WUFDMUJBLENBQUNBO1lBTU1ELGtDQUFPQSxHQUFkQSxVQUFlQSxPQUFPQTtnQkFDckJFLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLEdBQUdBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO2dCQUNqQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsR0FBR0EsRUFBRUEsQ0FBQ0E7WUFDcEJBLENBQUNBO1lBMUJhRiw0QkFBV0EsR0FBY0EsQ0FBQ0EsZUFBSUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxnQkFBZ0JBLENBQUNBLENBQUNBLENBQUNBO1lBSjNGQTtnQkFpQm9CQSxXQUFDQSxpQkFBTUEsQ0FBQ0EsdUJBQW9CQSxDQUFDQSxRQUFRQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFBQTs7aUNBZ0JuRUE7WUFBREEsdUJBQUNBO1FBQURBLENBakNBRCxBQWlDQ0MsSUFBQUQ7UUFqQ1lBLDJCQUFnQkEsbUJBaUM1QkEsQ0FBQUE7SUFDRkEsQ0FBQ0EsRUFwQzBCRCxVQUFVQSxHQUFWQSx1QkFBVUEsS0FBVkEsdUJBQVVBLFFBb0NwQ0E7QUFBREEsQ0FBQ0EsRUFwQ2EsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFvQ3pCIiwiZmlsZSI6Ik1vZHVsZXMvU2FtcGxlTW9kdWxlL1ZpZXdNb2RlbHMvU2FtcGxlVmlld01vZGVsMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3QW5ub3RhdGlvbiBhcyBWaWV3LCBOZ0Zvcn0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtiaW5kLCBJbmplY3QsIEJpbmRpbmd9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7U2FtcGxlTW9kdWxlIGFzIFNhbXBsZU1vZHVsZU5hbWVMaXN0IH0gZnJvbSAnLi4vU2VydmljZXMvTmFtZUxpc3QnO1xuXG5leHBvcnQgbW9kdWxlIFNhbXBsZU1vZHVsZS5WaWV3TW9kZWxzXG57XG5cdGV4cG9ydCBjbGFzcyBTYW1wbGVWaWV3TW9kZWwxXG5cdHtcblx0XHQvLyNyZWdpb24gU3RhdGljXG5cdFx0XG5cdFx0cHVibGljIHN0YXRpYyBJbmplY3RhYmxlczogQmluZGluZ1tdID0gW2JpbmQoU2FtcGxlVmlld01vZGVsMSkudG9DbGFzcyhTYW1wbGVWaWV3TW9kZWwxKV07XG5cdFx0XG5cdFx0Ly8jZW5kcmVnaW9uXG5cdFx0XG5cdFx0Ly8jcmVnaW9uIFByb3BlcnRpZXNcblx0XHRcblx0XHRwdWJsaWMgTW9kdWxlTmFtZTogc3RyaW5nID0gXCJTYW1wbGVWaWV3TW9kZWwxXCI7XG5cdFx0cHVibGljIE5hbWVMaXN0OiBTYW1wbGVNb2R1bGVOYW1lTGlzdC5TZXJ2aWNlcy5OYW1lc0xpc3Q7XG5cdFx0XG5cdFx0Ly8jZW5kcmVnaW9uXG5cdFx0XG5cdFx0Ly8jcmVnaW9uIENvbnN0cnVjdG9yc1xuXHRcdFxuXHRcdHB1YmxpYyBjb25zdHJ1Y3RvcihASW5qZWN0KFNhbXBsZU1vZHVsZU5hbWVMaXN0LlNlcnZpY2VzLk5hbWVzTGlzdCkgXG5cdFx0XHRcdFx0bmFtZUxpc3Q6IFNhbXBsZU1vZHVsZU5hbWVMaXN0LlNlcnZpY2VzLk5hbWVzTGlzdClcblx0XHR7XG5cdFx0XHR0aGlzLk5hbWVMaXN0ID0gbmFtZUxpc3Q7XG5cdFx0fSBcblx0XHRcblx0XHQvLyNlbmRyZWdpb25cblx0XHRcblx0XHQvLyNyZWdpb24gTWV0aG9kcyAtIFxuXHRcdFxuXHRcdHB1YmxpYyBBZGROYW1lKG5ld25hbWUpIHtcblx0XHRcdHRoaXMuTmFtZUxpc3QuQWRkKG5ld25hbWUudmFsdWUpO1xuXHRcdFx0bmV3bmFtZS52YWx1ZSA9ICcnO1xuXHRcdH1cblx0XHRcblx0XHQvLyNlbmRyZWdpb25cblx0fVxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=