import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { MenuService } from "./menu.service";

@Component({
  selector: "menu-component",
  templateUrl: "menu.component.html",
  styleUrls: ["menu.component.css"],
  providers: [MenuService]
})
export class MenuComponent implements OnInit, OnDestroy {
  @Input() menuUrl: string;
  _menu: Array<any>;

  private subscriptions: Array<any> = new Array<any>();

  constructor(private menuService: MenuService) {
    this.subscriptions.push(
      postal
        .channel("LEFT_MENU")
        .subscribe("menu.selected", (data, envelope) => {
          console.log(data);
        })
    );
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

  ngOnDestroy(){
    _.forEach(this.subscriptions, (topic)=>{
        postal.unsubscribe(topic);
    });
  }
}
