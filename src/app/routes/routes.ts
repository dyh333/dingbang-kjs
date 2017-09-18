import { Routes, RouterModule }  from '@angular/router';

import { LayoutComponent } from "../layout/layout.component";

export const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', loadChildren: './home/home.module#HomeModule' },
        // { path: 'about', loadChildren: './about/about.module#AboutModule' },
        { path: 'scope', loadChildren: './scope/scope.module#ScopeModule' },
        // { path: 'partner', loadChildren: './partner/partner.module#PartnerModule' },
        // { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
    ]
}];