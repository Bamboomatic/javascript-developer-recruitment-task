import { Component, OnInit } from "@angular/core";
import { FavouritesService } from "../services/favourites.service";
import { Fav } from "../models/Fav";

@Component({
  selector: "app-favourites",
  templateUrl: "./favourites.component.html",
  styleUrls: ["./favourites.component.scss"]
})
export class FavouritesComponent implements OnInit {
  favourites: Fav[];
  sorted: boolean = false;
  constructor(private favouriteService: FavouritesService) {}

  ngOnInit(): void {
    this.favourites = this.favouriteService.populateFavs();
  }
  refreshFavs() {
    this.ngOnInit();
  }
  sortAZ() {
    this.favourites = this.favourites.sort((a, b) => {
      if (this.sorted === true) {
        return a.name < b.name ? 1 : a.name > b.name ? -1 : 0;
      }
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
    this.sorted = !this.sorted;
  }
}
