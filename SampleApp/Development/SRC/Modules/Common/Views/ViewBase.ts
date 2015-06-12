export module Common.Views
{
	export class ViewBase<T>
	{	
		//#region Properties
		
		public ViewModel: T;
		
		//#endregion
		
		//#region Constructors
		
		public constructor(viewModel: T)
		{
			this.ViewModel = viewModel;
		}
		
		//#endregion
	}
}
