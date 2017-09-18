import { Component } from '@angular/core';

@Component({
	selector: 'scope-component',
	templateUrl: './scope.component.html',
	styleUrls: ['./scope.component.css']
})
export class ScopeComponent {
	title = '服务范围';

	menuUrl = 'assets/config/scope.config.json';
	
	
	
}
