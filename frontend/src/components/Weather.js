import React from 'react';
import axios from 'axios';
import '../styles/Weather.css';

class Weather extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            city: "Dallas",
            temp: ""
        }
    }

    componentDidMount(){
        axios.get("/getWeather")
          .then((response)=> {
              console.log(response.data);
              this.setState({
                  temp: response.data.temp
              })
          })
    }

    render(){
        return(
            <div className="weather">
            <p className = "font-weight-bold">Today's Weather in {this.state.city} </p> 
            <div className ="temp">
                <p className="font-weight-light">{this.state.temp}</p> 
            </div>
        </div>
        )
    }
}
export default Weather;