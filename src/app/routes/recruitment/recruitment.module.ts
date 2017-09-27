import { NgModule } from "@angular/core";
import { NgxSharedModule } from "../../ngx-shared/ngx-shared.module";
import { SharedModule } from "../../shared/shared.module";

import { routing } from "./recruitment.routing";

import { RecruitmentComponent } from "./components/recruitment.component";

@NgModule({
  imports: [NgxSharedModule, SharedModule, routing],
  exports: [],
  declarations: [RecruitmentComponent],
  providers: []
})
export class RecruitmentModule {}
