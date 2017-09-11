import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
	{ path: '', redirectTo: 'index', pathMatch: 'full' },
	{
		path: 'index',
		loadChildren: './geone/feature/login/login.module#LoginModule'
	},{
		path: 'dashboard',
		loadChildren: './business/dashboard/dashboard.module#DashboardModule'
	},{
		path: 'demo',
		loadChildren: './business/demo/demo.module#DemoModule'
	},{
		path: 'grid',
		loadChildren: './business/grid-layout/grid.module#GridModule'
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
	useHash: true,
	preloadingStrategy: PreloadAllModules
});
