import { Routes, RouterModule }  from '@angular/router';

import { PartnerComponent } from './components/partner.component';

const routes: Routes = [
    {
        path: '',
        component: PartnerComponent
    }
];

export const routing = RouterModule.forChild(routes);
