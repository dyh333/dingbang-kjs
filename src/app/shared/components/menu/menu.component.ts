import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
    selector: 'menu-component',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.css'],
    providers: [
        MenuService
    ]
})

export class MenuComponent implements OnInit {
    @Input()
    private menuUrl: string;
    private menu: Object;

    constructor(private menuService: MenuService) { }

    ngOnInit() { 
        // this.menuService.loadMenu(this.menuUrl).subscribe({
        //     next: (_menu) => {
        //         this.menu = _menu;
        //     },
        //     error: (error) => {
        //         console.log(error);
        //     }
        // })
    }
}