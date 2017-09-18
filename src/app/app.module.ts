import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxSharedModule } from './ngx-shared/ngx-shared.module';
import { RoutesModule } from "./routes/routes.module";
import { LayoutModule } from "./layout/layout.module";

// import { routing } from './app.routing';
import { AppComponent } from './app.component';

import { CarouselComponent } from './carousel/carousel.component';
// import { MenuComponent } from './menu/menu.component';
// import { MenuService } from './menu/menu.service';
import { CardComponent } from './card/card.component';
import { CardService } from './card/card.service';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    // MenuComponent,
    CardComponent
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
    // MenuService,
    CardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
