import React from 'react';
import Features from '../components/Features';
import  Explanation from '../components/Explanation.js';
import Tools from '../components/Tools.js';
import Team from '../components/Team.js';
import Language from '../components/Language.js';

function LandingPage(){
    return(
        <div>
            <Explanation/>
            <Language/>
            <Features/>
            <Tools/>
            <Team/>
        </div>
    )
}

export default LandingPage;