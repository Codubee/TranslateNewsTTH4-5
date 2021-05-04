import React from 'react';
function NewsDisplay() {
    const data =[{"image":"https://blog.cdn.own3d.tv/resize=fit:crop,height:400,width:600/1yUTadzQTDWnMKQunV2T",
    "title":"Peepo is Happy",
    "subtext":"Happiness has reached the Peepo and now he will become wide",
    "url":"news article url"
    }];
    const listItems = data.map((d) => <li key={d.title}>{
        <img 
        src={d.image}
        alt= {d.url}
        width="300" height="300"
        />
        } </li>);

    return (
      <div>
      {listItems}
      </div>
    );
  }

export default NewsDisplay;