import { NgModule } from "@angular/core";
import { NgxSharedModule } from "../../ngx-shared/ngx-shared.module";
import { SharedModule } from "../../shared/shared.module";

import { routing } from "./partner.routing";

import { PartnerComponent } from "./components/partner.component";

@NgModule({
  imports: [NgxSharedModule, SharedModule, routing],
  exports: [],
  declarations: [PartnerComponent],
  providers: []
})
export class PartnerModule {}
