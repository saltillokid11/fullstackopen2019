import React, { useState, useEffect } from 'react'
import axios from 'axios'

const WeatherData = ({country}) => {
    const [weather, setWeather] = useState({});
    const [load, setLoad] = useState(false);
    const capital = country.capital;

    const hook = () => {
        axios
            .get('http://api.weatherstack.com/current?access_key=7b0f810808fec87f6120758ec1ebb7eb&query=' + capital)
            .then(response => {
            setWeather(response.data)
            setLoad(true)
        })
    }
      
    useEffect(hook, [])
    console.log("weather", weather.current);

    if(load){
        return (
            <div>
                <h2>Weather in {capital}</h2>
                <div>temperature: {weather.current.temperature}</div>
                <img src={weather.current.weather_icons[0]} alt={weather.current.location}></img>
                <div>wind: {weather.current.wind_speed} direction {weather.current.wind_dir}</div>
            </div>
        )
    } else{
        return (
            <div>
                Loading...
            </div>
        );
    }


  }
  
  export default WeatherData