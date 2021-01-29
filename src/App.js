import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./componants/Form"
import Home from "./componants/Home"
import Help from "./componants/Help"
import "./App.css"

//INITIAL STATE --------------------------------------
const initialFormValues = {
  name: '',
  PizzaSize: '',
  bacon: false,
  pepperoni: false,
  mozzarella: false,
  cheddar: false,

}


const App = () => {
//State here -----------------------------------------
const [formValues, setFormValues] = useState(initialFormValues)

//Input Changes --------------------------------------
const handleChange = ( name, value ) => {
  setFormValues({...formValues, [name]: value})
}


  return (


<Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pizza">
          <Form
          values={formValues}
          change={handleChange} />
        </Route>
        {/* <Route path="/help">
          <Help />
        </Route> */}
      </Switch>
    </Router>
 
     
 );
};
export default App;
