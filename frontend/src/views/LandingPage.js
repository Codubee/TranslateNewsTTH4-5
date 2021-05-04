import React from 'react';
import Features from '../components/Features';
import  Explanation from '../components/Explanation.js';
import Tools from '../components/Tools.js';
import Team from '../components/Team.js';
import NewsDisplay from '../components/NewsDisplay.js';

function LandingPage(){
    return(
        <div>
            <Explanation/>
            <Features/>
            <NewsDisplay/>
            <Tools/>
            <Team/>
        </div>
    )
}

export default LandingPage;