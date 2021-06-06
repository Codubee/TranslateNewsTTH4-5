import React from 'react';
import "../styles/NewsDisplay.css";

function NewsDisplay(props) {

  return (
    <div className="mt-sm">
      <h1>Local news</h1>
      {props.newsItems.map((obj, index) => (
        <div className="newsItem" key={index}>
          <h4>{obj.text}</h4>
        <a href={obj.url}>Read more</a>
        </div>
          
      ))}
    </div>
  );
}

export default NewsDisplay;