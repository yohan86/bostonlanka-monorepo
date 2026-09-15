"use client"
import Image from "next/image"
import { useEffect, useState } from "react";

const Weather = () => {
  const [cityName, setCityNme] = useState<string>("colombo");
  const weatherinfo = async (city:string)=> {
    const weatherAPI = "2a87f7e9a51c2d32e9fbcd0b66382e6f";
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherAPI}&units=metric`;


    const response = await fetch(weatherURL);
    const result = await response.json();
    const iconCode = result.weather[0].icon;
    const imgurl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    document.querySelector(".temp")!.innerHTML = result.main.temp+ `<span class="temp-type">°C</span>`;
    document.querySelector(".weather-image")!.innerHTML = `<img src=${imgurl} alt="" width="75" height="75" />`;
    document.querySelector(".city")!.innerHTML = city;
    document.querySelector(".description")!.innerHTML = result.weather[0].description;

  };
  useEffect(()=>{
    weatherinfo("colombo");

  },[]);



  return (
    <div className="flex flex-col w-full">
        <div className="search-box flex gap-2">
            <input 
            type="text" 
            name="city" 
            placeholder="City Name" 
            onChange={(e)=>setCityNme(e.target.value)}
            className="w-35 h-8 px-2 text-sm border border-[#ccc] rounded-sm" />
            <button 
            onClick={()=>weatherinfo(cityName)}
            className="btn h-8 bg-site-red text-sm font-bold border-none rounded-sm px-2">Find</button>
        </div>
        <div className="result flex flex-col justify-center">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="weather-image"></div>
            <div className="city uppercase text-[18px] font-bold"></div>
            <div className="description"></div>
          </div>
          
          <div className="flex w-full justify-center">
            <div className="temp text-2xl"></div>
          </div>
        </div>
    </div>
  )
}

export default Weather