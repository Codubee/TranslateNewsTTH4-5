// This is where the explanation component will be created


import React from 'react';

function ExplanationBox() {
    return (
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">What is this?</h1>
          <p class="lead">This is a project powered by students that gives you the power to translate any news article to your preferred langauge :).</p>
        </div>
        <div style={{ display: "flex" }}>
        <a class="btn btn-primary btn-lg" href="#1" role="button" style={{ marginLeft: "1010px" }}>Learn more</a>
      </div>
      </div>
    )
}

export default ExplanationBox;