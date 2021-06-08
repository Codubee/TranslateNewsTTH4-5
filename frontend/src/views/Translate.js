import React from 'react';
import {Container} from 'reactstrap'
import Language from '../components/Language.js';
import Vaccinenews from '../components/Vaccinenews'
import LocalNews from '../components/LocalNews.js';

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
                <LocalNews/>
                <Vaccinenews />
            </Container>

        )
    }
}

export default Translate;