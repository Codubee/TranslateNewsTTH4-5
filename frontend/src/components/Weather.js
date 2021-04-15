import React from 'react';
import '../styles/Weather.css';
function Weather(props){
    return(
        <div className="weather">
            <p className = "font-weight-bold">Today's Weather in {props.city} </p> 
            <div className ="temp">
                <p className="font-weight-light">{props.temp}</p>
            </div>
        </div>
    )
}
export default Weather;