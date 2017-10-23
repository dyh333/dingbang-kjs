import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouteConfigLoadStart } from "@angular/router";
import { MenuService } from '../shared/components/menu/menu.service';
@Component({
    selector: 'layout-component',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {
    array = [1, 2, 3];

    ngOnInit() {

    }
}
