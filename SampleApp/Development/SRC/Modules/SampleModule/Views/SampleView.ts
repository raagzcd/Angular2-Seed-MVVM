import {Component, View, NgFor, Inject} from 'angular2/angular2';
import {Common} from '../../Common/Views/ViewBase';
import {SampleModule as SampleModuleVM} from '../ViewModels/SampleViewModel';

export module SampleModule.Views
{
	@Component({
    	selector: SampleView.Selector,
		appInjector: [SampleModuleVM.ViewModels.SampleViewModel.Injectables]
  	})
	  
  	@View({
    	templateUrl: SampleView.TemplateURL,
		directives: [NgFor]
  	})
	 
	export class SampleView extends Common.Views.ViewBase<SampleModuleVM.ViewModels.SampleViewModel>
	{
		//#region Static
		
		public static Selector: string = "SampleModule-View-SampleView";
		public static TemplateURL: string = "./Modules/SampleModule/Views/SampleView.html?v=<%= VERSION %>";
		
		//#endregion
		
		//#region Constructors
		
		public constructor(@Inject(SampleModuleVM.ViewModels.SampleViewModel) 
				viewModel: SampleModuleVM.ViewModels.SampleViewModel)
		{
			super(viewModel);
		}
		
		//#endregion
	}
}
