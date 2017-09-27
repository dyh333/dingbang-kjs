import { NgModule } from '@angular/core';

import { routing } from './scope.routing';

import { NgxSharedModule } from '../../ngx-shared/ngx-shared.module';
import { SharedModule } from '../../shared/shared.module';

import { ScopeComponent } from './scope.component';
import { SjywComponent, SwywComponent } from './components';
import { YzywComponent } from './components/yzyw/yzyw.component';
import { ZcpgComponent } from './components/zcpg/zcpg.component';
import { DljzComponent } from './components/dljz/dljz.component';
import { ZxpxComponent } from './components/zxpx/zxpx.component';
import { QtfwComponent } from './components/qtfw/qtfw.component';


@NgModule({
	imports: [
        NgxSharedModule,
        SharedModule,

		routing
	],
	declarations: [
		ScopeComponent,
		SjywComponent,
		SwywComponent,
		YzywComponent,
		ZcpgComponent,
		DljzComponent,
		ZxpxComponent,
		QtfwComponent,
	],
	providers: [
	]
})

export class ScopeModule { }
