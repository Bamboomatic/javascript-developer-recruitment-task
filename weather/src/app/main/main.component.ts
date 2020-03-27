import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../services/weather.service";
import { FavouritesService } from "../services/favourites.service";
import {
  faSun,
  faCloud,
  faCloudSun,
  faCloudRain,
  faThermometerHalf,
  faTint,
  faSearchLocation,
  faInfo,
  faStar
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  weather;
  faSun = faSun;
  faStar = faStar;
  faCloud = faCloud;
  faCloudSun = faCloudSun;
  faCloudRain = faCloudRain;
  faThermometerHalf = faThermometerHalf;
  faTint = faTint;
  faInfo = faInfo;
  faSearchLocation = faSearchLocation;
  constructor(
    private weatherService: WeatherService,
    private favouriteService: FavouritesService
  ) {}

  ngOnInit(): void {
    this.getCityName("Londyn");
  }

  getCityId(id: number) {
    this.weatherService.passId(id);
  }

  toFavs(weather: object) {
    this.favouriteService.makeFavs(weather);
  }

  getCityName(city: string) {
    this.weatherService.getWeatherByCityName(city).subscribe(data => {
      this.weather = data;
    });
  }
}
