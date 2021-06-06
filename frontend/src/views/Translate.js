import React from 'react';
import axios from 'axios';
import {Container} from 'reactstrap'
import Language from '../components/Language.js';
import Vaccinenews from '../components/Vaccinenews'
import NewsDisplay from '../components/NewsDisplay.js';

class Translate extends React.Component {

    constructor(props){
        super(props)
        this.changeLanguage = this.changeLanguage.bind(this)
        this.state = { localNews: []};
    }
    changeLanguage(){
        //API call to translate the news goes here
        var language = localStorage.getItem('language')
    }

    componentDidMount(){
        axios.get("/getLocalNews")
            .then((response) => {
                this.setState({
                    localNews: response.data
                })
       
            })

    }
    
    
    
    
    render() {
        return (
            <Container className="lg-section">
                <Language/>
                <NewsDisplay newsItems = {this.state.localNews}/>
                <Vaccinenews/>
            </Container>

        )
    }
}

export default Translate;