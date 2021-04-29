import React from 'react';
import {Dropdown} from 'react-bootstrap';


function Language() {

    const languages = [
        "Afrikaans",
        "Albanian",    
        "Amharic",  
        "Arabic",   
        "Armenian",
        "Assamese", 
        "Azerbaijani",  
        "Bangla",   
        "Bosnian (Latin)",  
        "Bulgarian",
        "Cantonese (Traditional)",  
        "Catalan",  
        "Chinese Simplified",   
        "Chinese Traditional",	
        "Croatian", 
        "Czech",    
        "Dari", 
        "Danish",   
        "Dutch",    
        "English",	  
        "Estonian",
        "Fijian",   
        "Filipino", 
        "Finnish",
        "French",
        "French (Canada)",
        "German",
        "Greek",
        "Gujarati",
        "Haitian Creole",
        "Hebrew",
        "Hindi",
        "Hmong Daw",
        "Hungarian",
        "Icelandic",
        "Indonesian",
        "Inuktitut",
        "Irish",
        "Italian",	
        "Japanese",	
        "Kannada",
        "Kazakh",
        "Khmer",
        "Klingon",	
        "Klingon (plqaD)",	
        "Korean",
        "Kurdish (Central)",	
        "Kurdish (Northern)",
        "Lao",
        "Latvian",	
        "Lithuanian",
        "Malagasy",
        "Malay",
        "Malayalam",
        "Maltese",
        "Maori",
        "Marathi",	
        "Myanmar",	
        "Nepali",
        "Norwegian",
        "Odia	",
        "Pashto	",
        "Persian",	
       "Polish",
        "Portuguese (Brazil)",
        "Portuguese (Portugal)",	
        "Punjabi",
        "Queretaro",	
        "Romanian",	
        "Russian",
        "Samoan",
        "Serbian (Cyrillic)",
        "Serbian (Latin)",
        "Slovak",
        "Slovenian",
        "Spanish",	
        "Swahili",	
        "Swedish",	
        "Tahitian",
        "Tamil",
        "Telugu",
        "Thai",
        "Tigrinya",
        "Tongan",
        "Turkish"	,
        "Ukrainian",	
        "Urdu",
        "Vietnamese",
        "Welsh",
        "Yucatec Maya"];

    return(
    

<Dropdown>
  <Dropdown.Toggle variant="warning" id="dropdown-basic">
   Choose a Language
  </Dropdown.Toggle>

  <Dropdown.Menu>
      {languages.map((language, index) => (  
         <Dropdown.Item href="#/action-1">{language}</Dropdown.Item>    
      ))}
  </Dropdown.Menu>
</Dropdown>
    );

};
export default Language;