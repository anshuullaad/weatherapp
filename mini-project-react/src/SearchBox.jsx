import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";

export default function SearchBox({updateInfo}){
    let[city, setCity] = useState("");
    let[error, setError] = useState(false); 
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "f4a789b949f3e9a0fca14d846aae56ea";
   
    let getWeatherInfo = async () =>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
            let jsonResponse = await response.json(); 
            console.log(jsonResponse);
            
            let result ={
                city: city,
                temp : jsonResponse.main.temp,
                tempMin : jsonResponse.main.temp_min,
                tempMax : jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }catch(err){
        throw err; 
        }
  
};
   
    
    let handleChange = (evt)=>{
setCity(evt.target.value);
    };
   
    let handleSubmit = async (evt) =>{
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            if (newInfo) {
                updateInfo(newInfo);
            }
       
        }catch(err){
            setError(true);
        }
       };
   
   return (
<div className="Searchbox">
<form onSubmit={handleSubmit}>
<TextField id="city" label="City name" variant="outlined" required value={city} onChange={handleChange}/>
    <br />
      <Button variant="contained" type="submit">
        Search
      </Button>
{error && <p>No such place exists!</p>}


</form>

</div>
    );
}