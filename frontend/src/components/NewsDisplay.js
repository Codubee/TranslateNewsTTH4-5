import React from 'react';
import "../styles/NewsDisplay.css";

function NewsDisplay() {
  const data = [{
    "text": "Happiness has reached the Peepo and now he will become wide",
    "url": "https://google.com"
  }];
  const listItems = data.map((item,val) =>
    <li key={val}>
      {
      <ul >
        <h5><a href={item.url}>{item.text}</a></h5>
      </ul>
    }
    </li>
  );

  return (
    <div className="mt-sm">
      <h1>Local news</h1>
      {listItems}
    </div>
  );
}

export default NewsDisplay;