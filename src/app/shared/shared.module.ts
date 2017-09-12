import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxSharedModule } from '../ngx-shared/ngx-shared.module';


import {
    HeaderMenuComponent,
    MenuComponent,
    TabComponent,
    BacktopComponent,
    CarouselComponent,
} from './components';


const GEONE_COMPONENTS = [
    HeaderMenuComponent,
    MenuComponent,
    TabComponent,
    BacktopComponent,
    CarouselComponent,
];



@NgModule({
    declarations: [
        ...GEONE_COMPONENTS,
	],
    imports: [
        NgxSharedModule,
        RouterModule,
    ],
    providers: [
    ],
    exports: [
        ...GEONE_COMPONENTS,
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }
}
