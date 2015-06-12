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
            SampleViewModel1.Injectables = [
                angular2_1.bind(SampleViewModel1).toClass(SampleViewModel1),
                angular2_1.bind(NameList_1.SampleModule.Services.NamesList).toClass(NameList_1.SampleModule.Services.NamesList)];
            SampleViewModel1 = __decorate([
                __param(0, angular2_1.Inject(NameList_1.SampleModule.Services.NamesList)), 
                __metadata('design:paramtypes', [NameList_1.SampleModule.Services.NamesList])
            ], SampleViewModel1);
            return SampleViewModel1;
        })();
        ViewModels.SampleViewModel1 = SampleViewModel1;
    })(ViewModels = SampleModule.ViewModels || (SampleModule.ViewModels = {}));
})(SampleModule = exports.SampleModule || (exports.SampleModule = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZHVsZXMvU2FtcGxlTW9kdWxlL1ZpZXdNb2RlbHMvU2FtcGxlVmlld01vZGVsMS50cyJdLCJuYW1lcyI6WyJTYW1wbGVNb2R1bGUiLCJTYW1wbGVNb2R1bGUuVmlld01vZGVscyIsIlNhbXBsZU1vZHVsZS5WaWV3TW9kZWxzLlNhbXBsZVZpZXdNb2RlbDEiLCJTYW1wbGVNb2R1bGUuVmlld01vZGVscy5TYW1wbGVWaWV3TW9kZWwxLmNvbnN0cnVjdG9yIiwiU2FtcGxlTW9kdWxlLlZpZXdNb2RlbHMuU2FtcGxlVmlld01vZGVsMS5BZGROYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLHlCQUFvQyxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3hELHlCQUFvRCxzQkFBc0IsQ0FBQyxDQUFBO0FBRTNFLElBQWMsWUFBWSxDQXNDekI7QUF0Q0QsV0FBYyxZQUFZO0lBQUNBLElBQUFBLFVBQVVBLENBc0NwQ0E7SUF0QzBCQSxXQUFBQSxVQUFVQSxFQUNyQ0EsQ0FBQ0E7UUFDQUM7WUFtQkNDLDBCQUNHQSxRQUFpREE7Z0JBUjdDQyxlQUFVQSxHQUFXQSxrQkFBa0JBLENBQUNBO2dCQVU5Q0EsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsUUFBUUEsQ0FBQ0E7WUFDMUJBLENBQUNBO1lBTU1ELGtDQUFPQSxHQUFkQSxVQUFlQSxPQUFPQTtnQkFDckJFLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLEdBQUdBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO2dCQUNqQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsR0FBR0EsRUFBRUEsQ0FBQ0E7WUFDcEJBLENBQUNBO1lBNUJhRiw0QkFBV0EsR0FBY0E7Z0JBQ3RDQSxlQUFJQSxDQUFDQSxnQkFBZ0JBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLGdCQUFnQkEsQ0FBQ0E7Z0JBQ2hEQSxlQUFJQSxDQUFDQSx1QkFBb0JBLENBQUNBLFFBQVFBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLE9BQU9BLENBQUNBLHVCQUFvQkEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFObEdBO2dCQW1Cb0JBLFdBQUNBLGlCQUFNQSxDQUFDQSx1QkFBb0JBLENBQUNBLFFBQVFBLENBQUNBLFNBQVNBLENBQUNBLENBQUFBOztpQ0FnQm5FQTtZQUFEQSx1QkFBQ0E7UUFBREEsQ0FuQ0FELEFBbUNDQyxJQUFBRDtRQW5DWUEsMkJBQWdCQSxtQkFtQzVCQSxDQUFBQTtJQUNGQSxDQUFDQSxFQXRDMEJELFVBQVVBLEdBQVZBLHVCQUFVQSxLQUFWQSx1QkFBVUEsUUFzQ3BDQTtBQUFEQSxDQUFDQSxFQXRDYSxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQXNDekIiLCJmaWxlIjoiTW9kdWxlcy9TYW1wbGVNb2R1bGUvVmlld01vZGVscy9TYW1wbGVWaWV3TW9kZWwxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdBbm5vdGF0aW9uIGFzIFZpZXcsIE5nRm9yfSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge2JpbmQsIEluamVjdCwgQmluZGluZ30gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtTYW1wbGVNb2R1bGUgYXMgU2FtcGxlTW9kdWxlTmFtZUxpc3QgfSBmcm9tICcuLi9TZXJ2aWNlcy9OYW1lTGlzdCc7XG5cbmV4cG9ydCBtb2R1bGUgU2FtcGxlTW9kdWxlLlZpZXdNb2RlbHNcbntcblx0ZXhwb3J0IGNsYXNzIFNhbXBsZVZpZXdNb2RlbDFcblx0e1xuXHRcdC8vI3JlZ2lvbiBTdGF0aWNcblx0XHRcblx0XHRwdWJsaWMgc3RhdGljIEluamVjdGFibGVzOiBCaW5kaW5nW10gPSBbXG5cdFx0XHRiaW5kKFNhbXBsZVZpZXdNb2RlbDEpLnRvQ2xhc3MoU2FtcGxlVmlld01vZGVsMSksXG5cdFx0XHRiaW5kKFNhbXBsZU1vZHVsZU5hbWVMaXN0LlNlcnZpY2VzLk5hbWVzTGlzdCkudG9DbGFzcyhTYW1wbGVNb2R1bGVOYW1lTGlzdC5TZXJ2aWNlcy5OYW1lc0xpc3QpXTtcblx0XHRcblx0XHQvLyNlbmRyZWdpb25cblx0XHRcblx0XHQvLyNyZWdpb24gUHJvcGVydGllc1xuXHRcdFxuXHRcdHB1YmxpYyBNb2R1bGVOYW1lOiBzdHJpbmcgPSBcIlNhbXBsZVZpZXdNb2RlbDFcIjtcblx0XHRwdWJsaWMgTmFtZUxpc3Q6IFNhbXBsZU1vZHVsZU5hbWVMaXN0LlNlcnZpY2VzLk5hbWVzTGlzdDtcblx0XHRcblx0XHQvLyNlbmRyZWdpb25cblx0XHRcblx0XHQvLyNyZWdpb24gQ29uc3RydWN0b3JzXG5cdFx0XG5cdFx0cHVibGljIGNvbnN0cnVjdG9yKEBJbmplY3QoU2FtcGxlTW9kdWxlTmFtZUxpc3QuU2VydmljZXMuTmFtZXNMaXN0KSBcblx0XHRcdFx0XHRuYW1lTGlzdDogU2FtcGxlTW9kdWxlTmFtZUxpc3QuU2VydmljZXMuTmFtZXNMaXN0KVxuXHRcdHtcblx0XHRcdHRoaXMuTmFtZUxpc3QgPSBuYW1lTGlzdDtcblx0XHR9IFxuXHRcdFxuXHRcdC8vI2VuZHJlZ2lvblxuXHRcdFxuXHRcdC8vI3JlZ2lvbiBNZXRob2RzIC0gXG5cdFx0XG5cdFx0cHVibGljIEFkZE5hbWUobmV3bmFtZSkge1xuXHRcdFx0dGhpcy5OYW1lTGlzdC5BZGQobmV3bmFtZS52YWx1ZSk7XG5cdFx0XHRuZXduYW1lLnZhbHVlID0gJyc7XG5cdFx0fVxuXHRcdFxuXHRcdC8vI2VuZHJlZ2lvblxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=