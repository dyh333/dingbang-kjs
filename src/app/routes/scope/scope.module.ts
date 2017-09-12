import { NgModule } from '@angular/core';

import { routing } from './scope.routing';

import { NgxSharedModule } from '../../ngx-shared/ngx-shared.module';
import { SharedModule } from '../../shared/shared.module';

import { ScopeComponent } from './scope.component';
import { SjjzComponent, LzfwComponent } from './components';

import { ArticlesService } from './services/articles.service';

@NgModule({
	imports: [
        NgxSharedModule,
        SharedModule,

		routing
	],
	declarations: [
		ScopeComponent,
		SjjzComponent,
		LzfwComponent,
	],
	providers: [
		ArticlesService,
	]
})

export class ScopeModule { }
