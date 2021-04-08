import React from 'react';
import Features from '../components/Features';
import  Explanation from '../components/Explanation.js';
import Tools from '../components/Tools.js';
import Team from '../components/Team.js';
import Weather from '../components/Weather.js';

function LandingPage(){
    return(
        <div>
            <Explanation/>
            <Weather/>
            <Features/>
            <Tools/>
            <Team/>
        </div>
    )
}

export default LandingPage;