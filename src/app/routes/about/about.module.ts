import { NgModule } from "@angular/core";
import { NgxSharedModule } from "../../ngx-shared/ngx-shared.module";
import { SharedModule } from "../../shared/shared.module";

import { routing } from "./about.routing";

import { AboutComponent } from "./components/about/about.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { ClientsComponent } from "./components/clients/clients.component";

@NgModule({
  imports: [NgxSharedModule, SharedModule, routing],
  exports: [],
  declarations: [AboutComponent, ProfileComponent, ClientsComponent],
  providers: []
})
export class AboutModule {}
