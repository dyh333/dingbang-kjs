import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxSharedModule } from '../ngx-shared/ngx-shared.module';


import {
    MenuComponent,
    TabComponent,
    BacktopComponent,
} from './components';


const GEONE_COMPONENTS = [
    MenuComponent,
    TabComponent,
    BacktopComponent,
];



@NgModule({
    declarations: [
        ...GEONE_COMPONENTS,
	],
    imports: [
        NgxSharedModule,

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
