import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  favouritesUrl = "https://api.openweathermap.org/data/2.5/weather";
  apiKey = "8a49f18f401904376ca92de2c7ef2aa0";

  constructor(private http: HttpClient) {}

  getWeatherByCityName(city: string) {
    let params = new HttpParams()
      .set("q", city)
      .set("units", "metric")
      .set("appid", this.apiKey);

    return this.http.get(this.favouritesUrl, { params });
  }

  getDetailedForcastById(id: number) {
    console.log(id);
  }
}
