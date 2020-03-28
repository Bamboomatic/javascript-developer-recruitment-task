import { Injectable } from "@angular/core";
import { StorageMap } from "@ngx-pwa/local-storage";
import { WeatherService } from "../services/weather.service";
import { Fav } from "../models/Favs";

@Injectable({
  providedIn: "root"
})
export class FavouritesService {
  tempStorage;
  constructor(
    private storage: StorageMap,
    private weatherService: WeatherService
  ) {}

  makeFavs(weather) {
    console.log(weather);
    console.log(`send ` + weather.name + ` to local storage`);
    let city = {
      id: weather.id,
      name: weather.name,
      temp: weather.main.temp,
      humidity: weather.main.humidity,
      description: weather.weather[0].description
    };
    // let favs = [city];

    this.storage.set(weather.id.toString(), city).subscribe(() => {});
  }

  delFav(id: string) {
    this.storage.delete(id.toString()).subscribe(() => {});
  }

  getFavs() {
    this.storage.get<Fav[]>("2643743").subscribe(data => {
      this.tempStorage = data;
    });

    if (this.tempStorage == undefined) {
      return [
        {
          id: 1,
          name: "Neverwhere",
          temp: 35,
          humidity: "yes",
          description: "try adding real city to favourites ;)"
        }
      ];
    }

    console.log(this?.tempStorage);
    return [this?.tempStorage];

    // mockup array of favs
    // return [
    //   {
    //     id: 1,
    //     name: "Warsaw",
    //     temp: 35,
    //     humidity: "50%",
    //     description: "sunny"
    //   },
    //   {
    //     id: 2,
    //     name: "Berlin",
    //     temp: 12,
    //     humidity: "40%",
    //     description: "snow storm"
    //   },
    //   {
    //     id: 3,
    //     name: "Kalety",
    //     temp: 25,
    //     humidity: "60%",
    //     description: "partialy cloudy"
    //   },
    //   {
    //     id: 4,
    //     name: "Katowice",
    //     temp: 25,
    //     humidity: "60%",
    //     description: "partialy cloudy"
    //   },
    //   {
    //     id: 5,
    //     name: "Gliwice",
    //     temp: 25,
    //     humidity: "60%",
    //     description: "partialy cloudy"
    //   },
    //   {
    //     id: 6,
    //     name: "Bytom",
    //     temp: 25,
    //     humidity: "60%",
    //     description: "partialy cloudy"
    //   },
    //   {
    //     id: 7,
    //     name: "Chorzow",
    //     temp: 25,
    //     humidity: "60%",
    //     description: "partialy cloudy"
    //   }
    // ];
  }
}
