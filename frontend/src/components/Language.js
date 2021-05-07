import React from 'react';
import { Dropdown } from 'react-bootstrap';


class Language extends React.Component {

    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        localStorage.setItem('language', event);
    }

    render() {

        const languages = [
            {language:'Afrikaans',code:'af'},
            {language:'Albanian',code:'sq'},
            {language:'Amharic',code:'am'},
            {language:'Arabic',code:'ar'},
            {language:'Armenian',code:'hy'},
            {language:'Assamese',code:'as'},
            {language:'Azerbaijani',code:'az'},
            {language:'Bangla',code:'bn'},
            {language:'Bosnian',code:'bs'},
            {language:'Bulgarian',code:'bg'},
            {language:'Cantonese',code:'yue'},
            {language:'Catalan',code:'ca'},
            {language:'Chinese Simplified',code:'zh-Hans'},
            {language:'Chinese Traditional',code:'zh-Hant'},
            {language:'Croatian',code:'hr'},
            {language:'Czech',code:'cs'},
            {language:'Cambodian',code:'km'},
            {language:'Danish',code:'da'},
            {language:'Dutch',code:'nl'},
            {language:'English',code:'en'},
            {language:'Estonian',code:'et'},
            {language:'Fijian',code:'fj'},
            {language:'Filipino',code:'fil'},
            {language:'Finnish',code:'fi'},
            {language:'French',code:'fr'},
            {language:'French (Canada)',code:'fr-ca'},
            {language:'German',code:'de'},
            {language:'Greek',code:'el'},
            {language:'Gujarati',code:'gu'},
            {language:'Haitian Creole',code:'ht'},
            {language:'Hebrew',code:'he'},
            {language:'Hindi',code:'hi'},
            {language:'Hmong Daw',code:'mww'},
            {language:'Hungarian',code:'hu'},
            {language:'Icelandic',code:'is'},
            {language:'Indonesian',code:'id'},
            {language:'Inuktitut',code:'iu'},
            {language:'Irish',code:'ga'},
            {language:'Italian',code:'it'},
            {language:'Japanese',code:'ja'},
            {language:'Kannada',code:'kd'},
            {language:'Kazakh',code:'kk'},
            {language:'Khmer',code:'km'},
            {language:'Korean',code:'ko'},
            {language:'Kurdish (Central)',code:'ku'},
            {language:'Kurdish (Northern)',code:'kmr'},
            {language:'Lao',code:'lo'},
            {language:'Latvian',code:'lv'},
            {language:'Lithuanian',code:'lt'},
            {language:'Malagasy',code:'mg'},
            {language:'Malay',code:'ms'},
            {language:'Malayalam',code:'ml'},
            {language:'Maltese',code:'mt'},
            {language:'Marathi',code:'mr'},
            {language:'Myanmar',code:'my'},
            {language:'Nepali',code:'ne'},
            {language:'Norwegian',code:'nb'},
            {language:'Odia',code:'or'},
            {language:'Pashto',code:'ps'},
            {language:'Persian',code:'fa'},
            {language:'Polish',code:'pl'},
            {language:'Portuguese (Brazil)',code:'pt'},
            {language:'Portuguese (Portugal)',code:'pt-pt'},
            {language:'Punjabi',code:'pa'},
            {language:'Queretaro',code:'otq'},
            {language:'Romanian',code:'ro'},
            {language:'Russian',code:'ru'},
            {language:'Samoan',code:'sm'},
            {language:'Serbian (Latin)',code:'sr-Latn'},
            {language:'Slovak',code:'sk'},
            {language:'Slovenian',code:'sl'},
            {language:'Spanish',code:'es'},
            {language:'Swahili',code:'sw'},
            {language:'Swedish',code:'sv'},
            {language:'Tahitian',code:'ty'},
            {language:'Tamil',code:'ta'},
            {language:'Telugu',code:'te'},
            {language:'Thai',code:'th'},
            {language:'Tigrinya',code:'ti'},
            {language:'Tongan',code:'to'},
            {language:'Turkish',code:'tr'},
            {language:'Ukrainian',code:'uk'},
            {language:'Urdu',code:'ur'},
            {language:'Vietnamese',code:'vi'},
            {language:'Welsh',code:'cy'},
            {language:'Yucatec Maya',code:'yua'}];

        return (


            <Dropdown  onSelect={this.handleChange}>
                <Dropdown.Toggle variant="warning" id="dropdown-basic" >
                    Choose a Language
                </Dropdown.Toggle>

                <Dropdown.Menu >
                    {languages.map((obj, index) => (
                        <Dropdown.Item key={index} eventKey={obj.code} >{obj.language}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        );
    }
};
export default Language;