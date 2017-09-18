import { NgModule } from '@angular/core';
import { NgxSharedModule } from '../../ngx-shared/ngx-shared.module';
import { SharedModule } from '../../shared/shared.module';

import { routing } from './home.routing';

import { HomeComponent } from './components/home.component';
import { CardComponent } from './components/card/card.component';
import { CardService } from './components/card/card.service';

@NgModule({
    imports: [
        NgxSharedModule,
        SharedModule,
        
        routing
    ],
    exports: [],
    declarations: [
        HomeComponent,
        CardComponent],
    providers: [CardService],
})
export class HomeModule { }
