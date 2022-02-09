import React, { useEffect, useState } from 'react';
import './style.css'

const Displaydata = ({weatherInfo}) => {
const [weatherMood,setWeatherMood] =useState()
    const{
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
      } = weatherInfo

useEffect(()=>{
    if(weathermood){
        switch (weathermood) {
                case 'Clouds':
                setWeatherMood("wi-day-cloudy")
                break;
                case 'Fog':
                setWeatherMood("wi-day-fog")
                break;
                case 'Clear':
                setWeatherMood("wi-day-sunny")
                break;
                case 'Snow':
                setWeatherMood("wi-day-snow")
                break;
                case 'Rain':
                setWeatherMood("wi-day-rain")
                break;
                case 'Thunderstrom':
                setWeatherMood("wi-day-thunderstorm")
                break;

                
               default:
                setWeatherMood("wi-day-sunny")
                break;
        }
    }
},[weathermood])

const sec = sunset;
let  mSec = new Date(sec * 1000);
let sunsetTime = `${mSec.getHours()}:${mSec.getMinutes()}`

  return <>
  
  <article className='widget'>
    <div className="weatherIcon">
      <i className={`wi ${weatherMood}`}></i>
    </div>
    <div className="weatherInfo">
      <div className="temperature">
        <span>{temp}&deg;</span>
      </div>
      <div className="description">
        <div className="weatherCondition">{weathermood}</div>
        <div className="place">
          {name},{country}
        </div>
      </div>
    </div>
    <div className="date">{new Date().toLocaleString()}</div>
    <div className="extra-temp">
      <div className="temp-info-minmax">
        <div className="two-sided-section">
          <p><i className={"wi wi-sunset"}></i></p>
          <p className="extra-info-leftside">
            {sunsetTime} <br />
            sunset
          </p>
        </div>
        <div className="two-sided-section">
          <p><i className={"wi wi-humidity"}></i></p>
          <p className="extra-info-leftside">
            {humidity}<br />
            Humidity
          </p>
        </div>

      </div>
      <div className="weather-extra-info">
      <div className="two-sided-section">
          <p><i className={"wi wi-rain"}></i></p>
          <p className="extra-info-leftside">
            {pressure}<br />
            Pressure
          </p>
        </div>
        <div className="two-sided-section">
          <p><i className={"wi wi-strong-wind"}></i></p>
          <p className="extra-info-leftside">
            {speed} <br />
            Speed
          </p>
        </div>
      </div>
    </div>
  </article>


  </>
};

export default Displaydata;
