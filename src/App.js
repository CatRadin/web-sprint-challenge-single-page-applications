import React from "react";
import { Switch, Route, Router, Link } from "react-router-dom";
import Form from "./componants/Form"
import Home from "./componants/Home"



const App = () => {




  return (
  <div className="App">
      
      <Router>
       <Switch>
          <Route path="/pizza">
            <Form />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
 );
};
export default App;
