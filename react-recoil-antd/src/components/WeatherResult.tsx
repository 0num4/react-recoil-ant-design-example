import React from "react";
import { useRecoilValue } from "recoil";
import { CurrentWeather } from "../model/currentweather";
import { weatherSelector } from "../selectors/weatherselector";

export const WeatherResult: React.FC = () => {
    const weather: CurrentWeather = useRecoilValue(weatherSelector);
    console.log(weather)
    if (!weather) {
      return null;
    }
  
    return (
      <section>
        <h2>{weather.name}の天気</h2>
  
        <div>
          {weather.weather.map((item, i) => {
            return (
              <div key={i}>
                {item.main} / {item.description}
              </div>
            );
          })}
        </div>
        <div>気温: {weather.main.temp} 度</div>
        <div>湿度: {weather.main.humidity} %</div>
        <div>気圧: {weather.main.pressure} hPa</div>
      </section>
    );
  };