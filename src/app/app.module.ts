import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { NgxSharedModule } from './ngx-shared/ngx-shared.module';

import { routing } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
		BrowserModule,
		BrowserAnimationsModule,
		
		RouterModule,
		routing,

		NgxSharedModule,
		// AppTranslationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
