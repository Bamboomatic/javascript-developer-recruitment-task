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
  faStar,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
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
    console.log("on init started!");
  }

  getCoordinates() {
    console.log("geolocation" in navigator);
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition((success) => {
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;
        this.weatherService
          .getWeatherByCoordinates(this.lat, this.lon)
          .subscribe((data) => {
            this.weather = data;
          });
      });
    }
  }

  mapClick(event) {
    this.lat = event.coords.lat;
    this.lon = event.coords.lng;
    this.weatherService
      .getWeatherByCoordinates(this.lat, this.lon)
      .subscribe((data) => {
        this.weather = data;
      });
  }

  getCityId(id: number) {
    this.weatherService.passId(id);
  }

  toFavs(weather) {
    this.favouriteService.addFav(weather.id.toString());
  }

  getCityName(city: string) {
    this.weatherService.getWeatherByCityName(city).subscribe((data) => {
      this.weather = data;
      this.lat = this.weather.coord.lat;
      this.lon = this.weather.coord.lon;
    });
  }
}
