import { Routes, RouterModule }  from '@angular/router';

import { RecruitmentComponent } from './components/recruitment.component';

const routes: Routes = [
    {
        path: '',
        component: RecruitmentComponent
    }
];

export const routing = RouterModule.forChild(routes);
