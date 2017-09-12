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
    menuUrl: string;
    private _menu: Array<any>;

    constructor(private menuService: MenuService) { }

    ngOnInit() {
        this.menuService.loadMenu(this.menuUrl).subscribe({
            next: (menu) => {
                this._menu = menu;
            },
            error: (error) => {
                console.log(error);
            }
        })
    }
}