import { Injectable } from "@angular/core";
import { StorageMap } from "@ngx-pwa/local-storage";
import { WeatherService } from "../services/weather.service";

@Injectable({
  providedIn: "root"
})
export class FavouritesService {
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

  addFav(id: string) {
    let tempStorage: Array<string>;
    this.storage.get("favArr").subscribe(data => {
      tempStorage.push(data);
      console.log("data: " + data);
    });

    if (tempStorage.length === 0) {
      console.log("temp is undefined");
      tempStorage = [id];
      console.log(
        "temp is now defined = " + tempStorage + " and sent to local storage"
      );
      this.storage.set("favArr", tempStorage).subscribe(() => {});
    } else {
      console.log("temp is defined as: " + tempStorage);
      console.log("temp will be updated with id = " + id);
      tempStorage = [...tempStorage, id];
      console.log(
        "temp is now updated = " + tempStorage + " and sent to local storage"
      );
      this.storage.set("favArr", [...tempStorage, id]).subscribe(() => {});
    }
  }
}
