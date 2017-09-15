import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


export const routes: Routes = [{ 	
	// 	path: '', redirectTo: 'scope', pathMatch: 'full' 
	// // },{
	// // 	path: 'home',
	// // 	loadChildren: './home/home.module#HomeModule'
	// },{
		path: 'scope',
		loadChildren: './scope/scope.module#ScopeModule'
	},{
		path: 'contact',
		loadChildren: './contact/contact.module#ContactModule'
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
	useHash: true,
	preloadingStrategy: PreloadAllModules
});
