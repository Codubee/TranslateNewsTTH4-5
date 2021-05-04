import React from 'react';
function NewsDisplay() {
    const data =[{"image":"imageurl",
    "title":"news title",
    "subtext":"some subtext",
    "url":"news article url"
    }];
    const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);

    return (
      <div>
      {listItems}
      </div>
    );
  }

export default NewsDisplay;