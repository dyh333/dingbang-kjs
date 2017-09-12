import { NgModule } from '@angular/core';
import { AbmModule } from 'angular-baidu-maps';

import { routing } from './contact.routing';

import { NgxSharedModule } from '../../ngx-shared/ngx-shared.module';
import { SharedModule } from '../../shared/shared.module';

import { ContactComponent } from './contact.component';

@NgModule({
	imports: [
        NgxSharedModule,
		SharedModule,
		
		AbmModule.forRoot({
            apiKey: 'shp0CX7jzC3xySBLVWqGT51xt4Oc8pyW'
        }),

		routing
	],
	declarations: [
		ContactComponent,
	],
	providers: [
		
	]
})

export class ContactModule { }
