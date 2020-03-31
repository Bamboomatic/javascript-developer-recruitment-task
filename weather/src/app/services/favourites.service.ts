import { Injectable } from "@angular/core";
// import { StorageMap } from "@ngx-pwa/local-storage";
import { WeatherService } from "../services/weather.service";

@Injectable({
  providedIn: "root"
})
export class FavouritesService {
  constructor(private weatherService: WeatherService) {}

  populateFavs() {
    console.log("make Favs from favservice initiated ");
  }

  delFav(id: string) {
    let tempStorage = this.getFavsFromLocalStorage();
    tempStorage = JSON.stringify(tempStorage)
      .replace(id, "")
      .replace(",,", ",");
    localStorage.setItem("favArr", tempStorage);
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
