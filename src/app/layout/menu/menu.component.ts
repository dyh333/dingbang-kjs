import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [MenuService]
})
export class MenuComponent implements OnInit {
  private _menuData: Object;

  constructor(private service: MenuService) { }

  ngOnInit() {
    this.service.loadMenu().subscribe({
      next: (menuData) => {
        console.log(menuData);
        this._menuData = menuData;
      }
    });
  }

}
