import { Injectable } from "@angular/core";
// import { StorageMap } from "@ngx-pwa/local-storage";
import { WeatherService } from "../services/weather.service";
// import { Observable } from "rxjs";
// import { Fav } from "../models/Fav";

@Injectable({
  providedIn: "root"
})
export class FavouritesService {
  constructor(private weatherService: WeatherService) {}

  makeFav(weather) {
    let city = {
      id: weather.id,
      name: weather.name,
      temp: weather.main.temp,
      humidity: weather.main.humidity,
      description: weather.weather[0].description
    };
    return city;
  }

  populateFavs() {
    let tempStorage = this.getFavsFromLocalStorage();
    console.log(tempStorage);
    let favs = [];

    tempStorage.forEach(id => {
      this.weatherService
        .getWeatherByCityId(id)
        .subscribe(data => favs.push(this.makeFav(data)));
    });

    console.log(favs);
    return favs;
  }

  delFav(id: string) {
    let tempStorage = this.getFavsFromLocalStorage();
    tempStorage = tempStorage.filter(element => element !== id);
    localStorage.setItem("favArr", JSON.stringify(tempStorage));
    // this.populateFavs();
  }

  addFav(id: string) {
    let tempStorage = this.getFavsFromLocalStorage();
    console.log(typeof tempStorage);
    if (!tempStorage.includes(id)) {
      tempStorage.push(id);
      localStorage.setItem("favArr", JSON.stringify(tempStorage));
    }
  }

  getFavsFromLocalStorage() {
    let tempStorage = JSON.parse(localStorage.getItem("favArr"));
    console.log("data from local storage as string: " + tempStorage);
    return tempStorage == null ? [] : tempStorage;
  }
}
