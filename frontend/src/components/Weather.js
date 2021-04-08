import React from 'react';
import '../styles/Weather.css';
function Weather(){
    var city = "Dallas";
    var temp = "66";
    return(
        <div className="weather">
            <p className = "font-weight-bold">Today's Weather in {city} </p> 
            <div className ="temp">
                <p className="font-weight-light">{temp}</p>
            </div>
        </div>
    )
}
export default Weather;