import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {

  WeatherData: any;
  constructor() { }

  ngOnInit() {
    this.getWeatherData();
  }

  getWeatherData() {
    let data = JSON.parse('{"coord":{"lon":-77.51,"lat":38.9},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"base":"stations","main":{"temp":284.16,"feels_like":280.19,"temp_min":282.04,"temp_max":286.48,"pressure":1003,"humidity":93},"visibility":16093,"wind":{"speed":5.7,"deg":210,"gust":10.3},"rain":{"1h":0.39},"clouds":{"all":90},"dt":1581610728,"sys":{"type":1,"id":4481,"country":"US","sunrise":1581595467,"sunset":1581633856},"timezone":-18000,"id":0,"name":"Chantilly","cod":200}');
    this.setWeatherData(data);
  }

  setWeatherData(data){
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }

}
