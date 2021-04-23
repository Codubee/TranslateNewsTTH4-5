import React from 'react';
import Language from '../components/Language.js';
import Vaccinenews from '../components/Vaccinenews'

/* This component is a skeleton of the Translate view. 
   It was created as a place holder for testing,
   and demonstration purposes of the routing functionality.
*/

function Translate(){
    return(
        <div className="center">
            <Language/>
            <Vaccinenews/>
        </div>
        
    )
}

export default Translate;