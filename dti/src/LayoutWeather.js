import './LayoutWeather.css';
import Search from './Component/search/search';
import CurrentWeather from './Component/current-weather/current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import { useState } from 'react';
import Forecast from './Component/forecast/forecast';

function LayoutWeather() {

    const [currentWeather,setCurrentWeather]=useState(null);
    const [currentForecast,setForecast]=useState(null);


  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch,forecastFetch])
      .then(async (response)=>{
        const weatherResponse=await response[0].json();
        const forecastResponse=await response[1].json();

        setCurrentWeather({city:searchData.label,...weatherResponse})
        setForecast({city:searchData.label,...forecastResponse})

      })
      .catch((err)=>console.log(err));

  }

  console.log(currentForecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      {currentForecast && <Forecast data={currentForecast}/>}
    </div>
  );
}

export default LayoutWeather;
