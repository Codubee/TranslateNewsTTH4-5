import React from 'react';
import  Explanation from '../components/Explanation.js';
import Tools from '../components/Tools.js';
import Team from '../components/Team.js';

function LandingPage(){
    return(
        <div>
            <Explanation/>
            <Tools/>
            <Team/>
        </div>
    )
}

export default LandingPage;