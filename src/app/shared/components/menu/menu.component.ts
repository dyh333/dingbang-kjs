import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { MenuService } from "./menu.service";
import { Router, NavigationEnd, RouteConfigLoadStart } from "@angular/router";


@Component({
    selector: "menu-component",
    templateUrl: "menu.component.html",
    styleUrls: ["menu.component.css"],
    providers: [MenuService]
})
export class MenuComponent implements OnInit, OnDestroy {
    @Input() menuUrl: string;
    _menu: Array<any>;

    selectedUrl: string;

    private subscriptions: Array<any> = new Array<any>();

    constructor(private menuService: MenuService,
        private router: Router) {
        this.router.events.subscribe(evt => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }

            this.selectedUrl = evt.url;
            if (this._menu) {
                this.menuService.setSelected(this._menu, this.selectedUrl);
            }
        });
    }

    ngOnInit() {
        this.menuService.loadMenu(this.menuUrl).subscribe({
            next: menu => {
                this._menu = menu;
            },
            error: error => {
                console.log(error);
            }
        });
    }


    ngOnDestroy() {
        _.forEach(this.subscriptions, (topic) => {
            postal.unsubscribe(topic);
        });
    }
}
