import { Component, OnInit, Input } from "@angular/core";
import { FavouritesService } from "../services/favourites.service";
import { Fav } from "../models/Fav";
import { FavouritesComponent } from "../favourites/favourites.component";
import { WeatherService } from "../services/weather.service";
import {
  faSun,
  faCity,
  faThermometerHalf,
  faTint,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-favourite-item",
  templateUrl: "./favourite-item.component.html",
  styleUrls: ["./favourite-item.component.scss"],
})
export class FavouriteItemComponent implements OnInit {
  @Input()
  fav: Fav;
  faSun = faSun;
  faCity = faCity;
  faThermometerHalf = faThermometerHalf;
  faTint = faTint;

  constructor(
    private favouriteService: FavouritesService,
    private favouritesComponent: FavouritesComponent,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {}

  onUnFav(id) {
    this.favouriteService.delFav(id);
    this.favouritesComponent.refreshFavs();
  }

  showDetailsOnNameClick(id) {
    this.weatherService.passId(id.toString());
  }
}
