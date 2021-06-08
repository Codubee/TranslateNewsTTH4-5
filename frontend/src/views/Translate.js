import React from 'react';
import {Container} from 'reactstrap'
import Language from '../components/Language.js';
import Vaccinenews from '../components/Vaccinenews'
import NewsDisplay from '../components/NewsDisplay.js';
import Weather from '../components/Weather.js';

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
            <Container className="lg-section">
                <Language />
                <Weather/>
                <NewsDisplay/>
                <Vaccinenews />
            </Container>

        )
    }
}

export default Translate;