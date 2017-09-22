import { Routes, RouterModule }  from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ClientsComponent } from './components/clients/clients.component';

const routes: Routes = [
    {
        path: '',
        component: AboutComponent,
        children: [
            { path: '', redirectTo: 'profile', pathMatch: 'full' },
            { path: 'profile', component: ProfileComponent },
            { path: 'clients', component: ClientsComponent },
        ]
    }
];

export const routing = RouterModule.forChild(routes);
