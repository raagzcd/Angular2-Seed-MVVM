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
            SampleViewModel1.Injectables = [angular2_1.bind(SampleViewModel1).toClass(SampleViewModel1)].concat(NameList_1.SampleModule.Services.NamesList.Injectables);
            SampleViewModel1 = __decorate([
                __param(0, angular2_1.Inject(NameList_1.SampleModule.Services.NamesList)), 
                __metadata('design:paramtypes', [NameList_1.SampleModule.Services.NamesList])
            ], SampleViewModel1);
            return SampleViewModel1;
        })();
        ViewModels.SampleViewModel1 = SampleViewModel1;
    })(ViewModels = SampleModule.ViewModels || (SampleModule.ViewModels = {}));
})(SampleModule = exports.SampleModule || (exports.SampleModule = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZHVsZXMvU2FtcGxlTW9kdWxlL1ZpZXdNb2RlbHMvU2FtcGxlVmlld01vZGVsMS50cyJdLCJuYW1lcyI6WyJTYW1wbGVNb2R1bGUiLCJTYW1wbGVNb2R1bGUuVmlld01vZGVscyIsIlNhbXBsZU1vZHVsZS5WaWV3TW9kZWxzLlNhbXBsZVZpZXdNb2RlbDEiLCJTYW1wbGVNb2R1bGUuVmlld01vZGVscy5TYW1wbGVWaWV3TW9kZWwxLmNvbnN0cnVjdG9yIiwiU2FtcGxlTW9kdWxlLlZpZXdNb2RlbHMuU2FtcGxlVmlld01vZGVsMS5BZGROYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLHlCQUFvQyxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3hELHlCQUFvRCxzQkFBc0IsQ0FBQyxDQUFBO0FBRTNFLElBQWMsWUFBWSxDQXFDekI7QUFyQ0QsV0FBYyxZQUFZO0lBQUNBLElBQUFBLFVBQVVBLENBcUNwQ0E7SUFyQzBCQSxXQUFBQSxVQUFVQSxFQUNyQ0EsQ0FBQ0E7UUFDQUM7WUFrQkNDLDBCQUNHQSxRQUFpREE7Z0JBUjdDQyxlQUFVQSxHQUFXQSxrQkFBa0JBLENBQUNBO2dCQVU5Q0EsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsUUFBUUEsQ0FBQ0E7WUFDMUJBLENBQUNBO1lBTU1ELGtDQUFPQSxHQUFkQSxVQUFlQSxPQUFPQTtnQkFDckJFLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLEdBQUdBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO2dCQUNqQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsR0FBR0EsRUFBRUEsQ0FBQ0E7WUFDcEJBLENBQUNBO1lBM0JhRiw0QkFBV0EsR0FBY0EsQ0FBQ0EsZUFBSUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxnQkFBZ0JBLENBQUNBLENBQUNBLENBQUNBLE1BQU1BLENBQy9GQSx1QkFBb0JBLENBQUNBLFFBQVFBLENBQUNBLFNBQVNBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBO1lBTHZEQTtnQkFrQm9CQSxXQUFDQSxpQkFBTUEsQ0FBQ0EsdUJBQW9CQSxDQUFDQSxRQUFRQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFBQTs7aUNBZ0JuRUE7WUFBREEsdUJBQUNBO1FBQURBLENBbENBRCxBQWtDQ0MsSUFBQUQ7UUFsQ1lBLDJCQUFnQkEsbUJBa0M1QkEsQ0FBQUE7SUFDRkEsQ0FBQ0EsRUFyQzBCRCxVQUFVQSxHQUFWQSx1QkFBVUEsS0FBVkEsdUJBQVVBLFFBcUNwQ0E7QUFBREEsQ0FBQ0EsRUFyQ2EsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFxQ3pCIiwiZmlsZSI6Ik1vZHVsZXMvU2FtcGxlTW9kdWxlL1ZpZXdNb2RlbHMvU2FtcGxlVmlld01vZGVsMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3QW5ub3RhdGlvbiBhcyBWaWV3LCBOZ0Zvcn0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtiaW5kLCBJbmplY3QsIEJpbmRpbmd9IGZyb20gJ2FuZ3VsYXIyL2FuZ3VsYXIyJztcbmltcG9ydCB7U2FtcGxlTW9kdWxlIGFzIFNhbXBsZU1vZHVsZU5hbWVMaXN0IH0gZnJvbSAnLi4vU2VydmljZXMvTmFtZUxpc3QnO1xuXG5leHBvcnQgbW9kdWxlIFNhbXBsZU1vZHVsZS5WaWV3TW9kZWxzXG57XG5cdGV4cG9ydCBjbGFzcyBTYW1wbGVWaWV3TW9kZWwxXG5cdHtcblx0XHQvLyNyZWdpb24gU3RhdGljXG5cdFx0XG5cdFx0cHVibGljIHN0YXRpYyBJbmplY3RhYmxlczogQmluZGluZ1tdID0gW2JpbmQoU2FtcGxlVmlld01vZGVsMSkudG9DbGFzcyhTYW1wbGVWaWV3TW9kZWwxKV0uY29uY2F0KFxuXHRcdFx0U2FtcGxlTW9kdWxlTmFtZUxpc3QuU2VydmljZXMuTmFtZXNMaXN0LkluamVjdGFibGVzKTtcblx0XHRcblx0XHQvLyNlbmRyZWdpb25cblx0XHRcblx0XHQvLyNyZWdpb24gUHJvcGVydGllc1xuXHRcdFxuXHRcdHB1YmxpYyBNb2R1bGVOYW1lOiBzdHJpbmcgPSBcIlNhbXBsZVZpZXdNb2RlbDFcIjtcblx0XHRwdWJsaWMgTmFtZUxpc3Q6IFNhbXBsZU1vZHVsZU5hbWVMaXN0LlNlcnZpY2VzLk5hbWVzTGlzdDtcblx0XHRcblx0XHQvLyNlbmRyZWdpb25cblx0XHRcblx0XHQvLyNyZWdpb24gQ29uc3RydWN0b3JzXG5cdFx0XG5cdFx0cHVibGljIGNvbnN0cnVjdG9yKEBJbmplY3QoU2FtcGxlTW9kdWxlTmFtZUxpc3QuU2VydmljZXMuTmFtZXNMaXN0KSBcblx0XHRcdFx0XHRuYW1lTGlzdDogU2FtcGxlTW9kdWxlTmFtZUxpc3QuU2VydmljZXMuTmFtZXNMaXN0KVxuXHRcdHtcblx0XHRcdHRoaXMuTmFtZUxpc3QgPSBuYW1lTGlzdDtcblx0XHR9IFxuXHRcdFxuXHRcdC8vI2VuZHJlZ2lvblxuXHRcdFxuXHRcdC8vI3JlZ2lvbiBNZXRob2RzIC0gXG5cdFx0XG5cdFx0cHVibGljIEFkZE5hbWUobmV3bmFtZSkge1xuXHRcdFx0dGhpcy5OYW1lTGlzdC5BZGQobmV3bmFtZS52YWx1ZSk7XG5cdFx0XHRuZXduYW1lLnZhbHVlID0gJyc7XG5cdFx0fVxuXHRcdFxuXHRcdC8vI2VuZHJlZ2lvblxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=