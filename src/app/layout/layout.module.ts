import { NgModule } from "@angular/core";
import { NgxSharedModule } from "../ngx-shared/ngx-shared.module";
import { SharedModule } from "../shared/shared.module";

import { LayoutComponent } from "./layout.component";
import { HeaderComponent } from "./header/header.component";

import { MenuComponent } from "./menu/menu.component";

@NgModule({
  imports: [NgxSharedModule, SharedModule],
  declarations: [LayoutComponent, HeaderComponent, MenuComponent],
  exports: [LayoutComponent, HeaderComponent]
})
export class LayoutModule {}
