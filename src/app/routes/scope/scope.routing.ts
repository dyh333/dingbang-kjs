import { Routes, RouterModule }  from '@angular/router';

import { ScopeComponent } from './scope.component';
import { SjjzComponent, LzfwComponent } from './components';

const routes: Routes = [{
    path: '',
    component: ScopeComponent,
    children: [
        { path: 'sjjz', component: SjjzComponent },
        { path: 'lzfw', component: LzfwComponent },
        { path: 'dljz', component: SjjzComponent },
        { path: 'tzzx', component: SjjzComponent },
        { path: 'swfw', component: SjjzComponent },
        { path: 'jyfw', component: SjjzComponent },
        { path: 'glfw', component: SjjzComponent },
        { path: 'fwwb', component: SjjzComponent },
    ]
}];

export const routing = RouterModule.forChild(routes);
