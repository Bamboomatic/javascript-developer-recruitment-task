import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../services/weather.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  forecast;
  id;
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.id = this.weatherService.getCurrentId();
    this.getForecast(this.id);
  }

  getForecast(id) {
    this.weatherService.getDetailedForcastById(id).subscribe(data => {
      this.forecast = data;
    });
  }
}
