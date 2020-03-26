import { Component, OnInit } from "@angular/core";
import {
  faSun,
  faCloud,
  faCloudSun,
  faCloudRain,
  faThermometerHalf,
  faTint
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  faSun = faSun;
  faCloud = faCloud;
  faCloudSun = faCloudSun;
  faCloudRain = faCloudRain;
  faThermometerHalf = faThermometerHalf;
  faTint = faTint;
  constructor() {}

  ngOnInit(): void {}
}
