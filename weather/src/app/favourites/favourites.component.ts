import { Component, OnInit } from "@angular/core";
import { Favs } from "../models/Favs";

@Component({
  selector: "app-favourites",
  templateUrl: "./favourites.component.html",
  styleUrls: ["./favourites.component.scss"]
})
export class FavouritesComponent implements OnInit {
  favourites: Favs[];

  constructor() {}

  ngOnInit(): void {
    this.favourites = [
      { id: 1, name: "Warsaw", temp: 35 },
      { id: 2, name: "Berlin", temp: 12 },
      { id: 3, name: "Kalety", temp: 25 }
    ];
  }
}
