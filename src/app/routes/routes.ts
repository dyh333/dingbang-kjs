import { Routes, RouterModule }  from '@angular/router';

import { LayoutComponent } from "../layout/layout.component";

export const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [
        { path: '', redirectTo: 'scope', pathMatch: 'full' },
        { path: 'scope', loadChildren: './scope/scope.module#ScopeModule' },
    ]
}];

// export const routing = RouterModule.forChild(routes);