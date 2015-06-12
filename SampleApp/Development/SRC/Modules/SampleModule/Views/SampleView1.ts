import {Component, View, NgFor, Inject} from 'angular2/angular2';
import {Common} from '../../Common/Views/ViewBase';
import {SampleModule as SampleModuleVM1} from '../ViewModels/SampleViewModel1';

export module SampleModule.Views
{
	@Component({
    	selector: SampleView1.Selector,
		appInjector: [SampleModuleVM1.ViewModels.SampleViewModel1.Injectables]
  	})
	  
  	@View({
    	templateUrl: SampleView1.TemplateURL,
		directives: [NgFor]
  	})
	 
	export class SampleView1 extends Common.Views.ViewBase<SampleModuleVM1.ViewModels.SampleViewModel1>
	{
		//#region Static
		
		public static Selector: string = "SampleModule-View-SampleView1";
		public static TemplateURL: string = "./Modules/SampleModule/Views/SampleView1.html?v=<%= VERSION %>";
		
		//#endregion
		
		//#region Constructors
		
		public constructor(@Inject(SampleModuleVM1.ViewModels.SampleViewModel1) 
				viewModel: SampleModuleVM1.ViewModels.SampleViewModel1)
		{
			super(viewModel);
		}
		
		//#endregion
	}
}
