import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from "./module-import-guard";

import { ArticlesService } from "./services/articles.service";

@NgModule({
    imports: [
    ],
    providers: [
        ArticlesService
    ],
    declarations: [
    ],
    exports: [
    ]
  })
  export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
      throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
  }  