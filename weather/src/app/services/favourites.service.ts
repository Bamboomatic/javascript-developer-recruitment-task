import { Injectable } from "@angular/core";
import { StorageMap } from "@ngx-pwa/local-storage";

@Injectable()
export class YourService {
  constructor(private storage: StorageMap) {}
}

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
