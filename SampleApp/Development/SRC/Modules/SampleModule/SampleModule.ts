
import {bind, Inject, Binding} from 'angular2/angular2';
import {SampleModule as SampleModuleNL} from 'Modules/SampleModule/Services/NameList';

export module SampleModule
{
	export class Sample
	{
		public static InjectableServices: Binding[] = SampleModuleNL.Services.NamesList.Injectables;
	}
}

