
import {Component, ViewAnnotation as View, NgFor} from 'angular2/angular2';
import {bind, Inject, Binding} from 'angular2/angular2';
import {SampleModule as SampleModuleNameList } from '../Services/NameList';

export module SampleModule.ViewModels
{
	export class SampleViewModel
	{
		//#region Static
		
		public static Injectables: Binding[] = [
			bind(SampleViewModel).toClass(SampleViewModel),
			bind(SampleModuleNameList.Services.NamesList).toClass(SampleModuleNameList.Services.NamesList)];
		
		//#endregion
		
		//#region Properties
		
		public ModuleName: string = "SampleViewModel";
		public NameList: SampleModuleNameList.Services.NamesList;
		
		//#endregion
		
		//#region Constructors
		
		public constructor(@Inject(SampleModuleNameList.Services.NamesList) 
					nameList: SampleModuleNameList.Services.NamesList)
		{
			this.NameList = nameList;
		} 
		
		//#endregion
		
		//#region Methods - 
		
		public AddName(newname) {
			this.NameList.Add(newname.value);
			newname.value = '';
		}
		
		//#endregion
	}
}
