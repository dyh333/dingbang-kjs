import { NgModule } from '@angular/core';
import { NgxSharedModule } from '../../ngx-shared/ngx-shared.module';
import { SharedModule } from '../../shared/shared.module';

import { routing } from './home.routing';

import { HomeComponent } from './components/home.component';

@NgModule({
    imports: [
        NgxSharedModule,
        SharedModule,
        
        routing
    ],
    exports: [],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule { }
