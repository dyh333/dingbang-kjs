import { Routes, RouterModule }  from '@angular/router';

import { ScopeComponent } from './scope.component';

const routes: Routes = [
    {
        path: '',
        component: ScopeComponent
    }
];

export const routing = RouterModule.forChild(routes);
