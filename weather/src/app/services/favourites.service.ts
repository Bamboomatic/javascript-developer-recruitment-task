import { Injectable } from "@angular/core";
import { StorageMap } from "@ngx-pwa/local-storage";
import { WeatherService } from "../services/weather.service";

@Injectable({
  providedIn: "root"
})
export class FavouritesService {
  tempStorage;
  constructor(
    private storage: StorageMap,
    private weatherService: WeatherService
  ) {}

  populateFavs() {
    console.log("make Favs from favservice initiated ");

    // let favs = [city];

    // this.storage.set(weather.id.toString(), city).subscribe(() => {});
  }

  delFav(id: string) {
    console.log(" deleting fav by id ");
  }

  addFav() {
    this.storage.get("favArr").subscribe(data => {
      this.tempStorage = data;
    });

    console.log(this?.tempStorage);
  }
}
