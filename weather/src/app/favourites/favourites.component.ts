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
  constructor(private favouriteService: FavouritesService) {}

  ngOnInit(): void {
    this.favourites = this.favouriteService.populateFavs();
  }
}
