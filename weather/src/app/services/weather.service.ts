import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  url = "https://api.openweathermap.org/data/2.5/";
  apiKey = "8a49f18f401904376ca92de2c7ef2aa0";
  currentId: number;

  constructor(private http: HttpClient) {}

  getWeatherByCityName(city: string) {
    let params = new HttpParams()
      .set("q", city)
      .set("units", "metric")
      .set("appid", this.apiKey);

    return this.http.get(this.url + "weather", { params });
  }

  getWeatherByCityId(id: string) {
    let params = new HttpParams()
      .set("id", id)
      .set("units", "metric")
      .set("appid", this.apiKey)
      .set("mode", "html");

    return this.http.get(this.url + "weather", { params });
  }

  getDetailedForcastById(id: string) {
    let params = new HttpParams()
      .set("id", id)
      .set("units", "metric")
      .set("appid", this.apiKey);

    return this.http.get(this.url + "forecast", { params });
  }

  getWeatherByCoordinates(lat: string, lon: string) {
    let params = new HttpParams()
      .set("lat", lat)
      .set("lon", lon)
      .set("units", "metric")
      .set("appid", this.apiKey);

    return this.http.get(this.url + "weather", { params });
  }

  getCurrentId() {
    return this.currentId;
  }

  passId(id: number) {
    this.currentId = id;
  }
}
