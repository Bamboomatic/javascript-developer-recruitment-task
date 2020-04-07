import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FavouritesComponent } from "./favourites/favourites.component";
import { MainComponent } from "./main/main.component";
import { FavouriteItemComponent } from "./favourite-item/favourite-item.component";
import { DetailsComponent } from "./details/details.component";
import { AgmCoreModule } from "@agm/core";
import { FocusTrapModule } from "primeng/focustrap";
import { ButtonModule } from "primeng/button";
import { TooltipModule } from "primeng/tooltip";

@NgModule({
  declarations: [
    AppComponent,
    FavouritesComponent,
    MainComponent,
    FavouriteItemComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyD81y8ZhPx2biBcyRohITwq9WxPoRMNIEk",
    }),
    FocusTrapModule,
    ButtonModule,
    TooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
