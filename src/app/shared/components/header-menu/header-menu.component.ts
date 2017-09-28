import { Component, OnInit } from '@angular/core';
import { HeaderMenuService } from './header-menu.service';

@Component({
  selector: 'header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css'],
  providers: [
    HeaderMenuService
  ]
})
export class HeaderMenuComponent implements OnInit {
   _menuData: Object;

  constructor(private service: HeaderMenuService) { }

  ngOnInit() {
    this.service.loadMenu().subscribe({
      next: (menuData) => {
        this._menuData = menuData;
      }
    });
  }

}
