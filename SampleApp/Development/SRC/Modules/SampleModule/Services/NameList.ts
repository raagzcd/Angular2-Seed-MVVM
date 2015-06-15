
import {bind, Inject, Binding} from 'angular2/angular2';

export module SampleModule.Services
{
  export class NamesList 
  {
    //#region Static Properties
    
    public static Injectables: Binding[] = [bind(NamesList).toClass(NamesList)];
    
    //#endregion
    
    //#region Properties
    
    public Names: Array<string>;
    
    //#endregion
    
    //#region Constructor
    
    constructor() {
      this.Names = ['Dijkstra', 'Knuth', 'Turing', 'Hopper'];
    }
    
    //#endregion
    
    //#region Methods - Get
    
    public Get(): Array<string> {
      return this.Names;
    }
    
    //#endregion
    
    //#region Methods - Add
    
    Add(name: string) {
      this.Names.push(name);
    }
    
    //#endregion
  }
}


