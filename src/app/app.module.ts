import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxSharedModule } from './ngx-shared/ngx-shared.module';
import { RoutesModule } from "./routes/routes.module";
import { LayoutModule } from "./layout/layout.module";

// import { routing } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
		BrowserModule,
		BrowserAnimationsModule,
    
    NgxSharedModule,
    
		LayoutModule,
    RoutesModule,

		// AppTranslationModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
