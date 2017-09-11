import { NgModule } from '@angular/core';

import { routing } from './scope.routing';

import { NgxSharedModule } from '../ngx-shared/ngx-shared.module';
import { SharedModule } from '../shared/shared.module';

import { ScopeComponent } from './scope.component';

@NgModule({
	imports: [
        NgxSharedModule,
        SharedModule,

		routing
	],
	declarations: [
		ScopeComponent,
	],
	providers: [
		
	]
})

export class ScopeModule { }
