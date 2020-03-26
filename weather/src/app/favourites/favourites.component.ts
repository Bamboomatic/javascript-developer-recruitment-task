import { Component, OnInit } from "@angular/core";
import { Favs } from "../models/Favs";
import { FavouritesService } from "../services/favourites.service";

@Component({
  selector: "app-favourites",
  templateUrl: "./favourites.component.html",
  styleUrls: ["./favourites.component.scss"]
})
export class FavouritesComponent implements OnInit {
  favourites: Favs[];

  constructor(private favouriteService: FavouritesService) {}

  ngOnInit(): void {
    this.favourites = this.favouriteService.getFavs();
  }
}
