import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FavouritesService {
  constructor() {}

  getFavs() {
    // mockup return Array
    return [
      { id: 1, name: "Warsaw", temp: 35 },
      { id: 2, name: "Berlin", temp: 12 },
      { id: 3, name: "Kalety", temp: 25 }
    ];
  }
}
