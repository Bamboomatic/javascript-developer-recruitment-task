import { Component, OnInit, Input } from "@angular/core";
import { Favs } from "../models/Favs";
import { FavouritesService } from "../services/favourites.service";
import {
  faSun,
  faCity,
  faThermometerHalf,
  faTint
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-favourite-item",
  templateUrl: "./favourite-item.component.html",
  styleUrls: ["./favourite-item.component.scss"]
})
export class FavouriteItemComponent implements OnInit {
  @Input() fav: Favs;
  faSun = faSun;
  faCity = faCity;
  faThermometerHalf = faThermometerHalf;
  faTint = faTint;

  constructor(private favouriteService: FavouritesService) {}

  ngOnInit(): void {}

  onUnFav(fav) {
    console.log(fav.name + " will be deleted by id nr:" + fav.id);
    this.favouriteService.delFav(fav.id);
  }
}
