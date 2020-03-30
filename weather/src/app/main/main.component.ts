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
  lat;
  lon;
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
    this.getCoordinates();
  }

  getCoordinates() {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition(success => {
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;
        this.weatherService
          .getWeatherByCoordinates(this.lat, this.lon)
          .subscribe(data => {
            this.weather = data;
          });
      });
    }
  }
  getCityId(id: number) {
    this.weatherService.passId(id);
  }

  toFavs(weather) {
    console.log(weather.name + " is going toFavs by id: " + weather.id);
    this.favouriteService.addFav(weather.name);
  }

  getCityName(city: string) {
    this.weatherService.getWeatherByCityName(city).subscribe(data => {
      this.weather = data;
      this.lat = this.weather.coord.lat;
      this.lon = this.weather.coord.lon;
    });
  }
}
