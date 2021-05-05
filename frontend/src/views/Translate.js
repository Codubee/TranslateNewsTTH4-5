import React from 'react';
import Language from '../components/Language.js';
import Vaccinenews from '../components/Vaccinenews'

class Translate extends React.Component {

    constructor(props){
        super(props)
        this.changeLanguage = this.changeLanguage.bind(this)
    }
    changeLanguage(){
        //API call to translate the news goes here
        var language = localStorage.getItem('language')
    }
    
    render() {
        return (
            <div className="center">
                <Language />
                <Vaccinenews />
            </div>

        )
    }
}

export default Translate;