import { Routes, RouterModule }  from '@angular/router';

import { ScopeComponent } from './scope.component';
import { SjywComponent, SwywComponent, YzywComponent, ZcpgComponent, DljzComponent, ZxpxComponent } from './components';

const routes: Routes = [{
    path: '',
    component: ScopeComponent,
    children: [
        { path: '', redirectTo: 'sjyw', pathMatch: 'full' },
        { path: 'sjyw', component: SjywComponent },
        { path: 'swyw', component: SwywComponent },
        { path: 'yzyw', component: YzywComponent },
        { path: 'zcpg', component: ZcpgComponent },
        { path: 'dljz', component: DljzComponent },
        { path: 'zxpx', component: ZxpxComponent },
        { path: 'glfw', component: SjywComponent },
        { path: 'fwwb', component: SjywComponent },
    ]
}];

export const routing = RouterModule.forChild(routes);
