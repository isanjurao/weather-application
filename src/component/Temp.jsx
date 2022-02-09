// api.openweathermap.org/data/2.5/weather?q=delhi&appid=8c9800e84bf40c2e6b1051f0262cb36b

import { useEffect, useState } from 'react';
import './style.css'
import Displaydata from './Displaydata';

const Temp = () => {

const [input,setInput] = useState("Delhi");
const [weatherInfo,setWeaterInfo] =useState({})

const getWeatherInfo = async ()=>{
  try{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=8c9800e84bf40c2e6b1051f0262cb36b`;
    const res = await fetch(url);
    const data = await res.json();
    const {temp,humidity,pressure} = data.main;
    const {main: weathermood} = data.weather[0];
    const {name} = data;
    const {speed} = data.wind;
    const {country,sunset} = data.sys;
    console.log(data)
const weather={
  temp,
  humidity,
  pressure,
  weathermood,
  name,
  speed,
  country,
  sunset
};

setWeaterInfo(weather);

  } catch (error){
    console.log(error)
  }
};

useEffect(()=>{
  getWeatherInfo();
},[]);
  return <>
  <div className="wrap">
    <div className="search">
        <input type="search" placeholder='search...' autoFocus id="search" className='searchTerm'value={input}onChange={(e)=> setInput(e.target.value)} />
        <button className="searchButton" type='button' onClick={getWeatherInfo}>search</button>
        </div>  
  </div>
  <Displaydata weatherInfo={weatherInfo}/>
  </>
};

export default Temp;
