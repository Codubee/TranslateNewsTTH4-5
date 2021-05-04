import React from 'react';
import "../styles/NewsDisplay.css";

function NewsDisplay() {
    const data =[{"image":"https://blog.cdn.own3d.tv/resize=fit:crop,height:400,width:600/1yUTadzQTDWnMKQunV2T",
    "title":"Peepo is Happy",
    "subtext":"Happiness has reached the Peepo and now he will become wide",
    "url":"https://youtu.be/accF0gAmdeg"
    }];
    const listItems = data.map((d) => <li key={d.title}>{
       
        <ul >
            <h1><a href={d.url}>{d.title}</a></h1>

            <li> <img src={d.image} alt= {d.name}/> </li>
            <li> {d.subtext} </li>
        </ul>
        } </li>);

    return (
      <div>
      {listItems}
      </div>
    );
  }

export default NewsDisplay;