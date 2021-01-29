import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./componants/Form"
import Home from "./componants/Home"
import Help from "./componants/Help"
import "./App.css"



const App = () => {




  return (


<Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pizza">
          <Form />
        </Route>
        {/* <Route path="/help">
          <Help />
        </Route> */}
      </Switch>
    </Router>
 
     
 );
};
export default App;
