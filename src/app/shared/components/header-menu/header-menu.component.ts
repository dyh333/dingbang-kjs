import { Component, OnInit } from '@angular/core';
import { HeaderMenuService } from './header-menu.service';
import { Router, NavigationEnd, RouteConfigLoadStart } from "@angular/router";

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
  selectedUrl: string;

  constructor(private service: HeaderMenuService,
    private router: Router) {
    this.router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.selectedUrl = evt.url;
      if (this._menuData) {
        this.service.setSelected(this._menuData, this.selectedUrl);
      }
    });
  }

  ngOnInit() {
    this.service.loadMenu().subscribe({
      next: (menuData) => {
        this._menuData = menuData;
      }
    });
  }

}
