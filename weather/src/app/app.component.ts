import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { slideInAnimation } from "./animations";
import {
  faSun,
  faCloud,
  faCloudSun,
  faCloudRain,
  faThermometerHalf,
  faTint
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = "weather";
  faSun = faSun;
  faCloud = faCloud;
  faCloudSun = faCloudSun;
  faCloudRain = faCloudRain;
  faThermometerHalf = faThermometerHalf;
  faTint = faTint;
  getAnimationData(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
}
