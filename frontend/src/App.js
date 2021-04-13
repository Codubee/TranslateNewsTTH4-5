import './App.css';
import LandingPage from './views/LandingPage'
import Translate from './views/Translate'
import Navigationbar from './components/Navigationbar'

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navigationbar/> {/* The NavigationBar remains outside of Route path direction so it always displays */}
        
        {/* <Route /> is a component used to direct the user to different application views.
              - "exact" means that the component will only display for the given path.
                  ex: the LandingPage component only displays when the path is "/", not "/news", or anything else.
                  Without exact, components will display if any children paths are included as well.
                      ex: /news/covid would display both the News component and, for example's sake, a COVID component.
        */}

        <Route path="/" exact component={LandingPage}/> 
        <Route path="/translate" component={Translate}/>
      </div>
    </Router>
  );
}

export default App;
