import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./componants/Form"
import Home from "./componants/Home"
import schema from './validation/FormSchema'
import * as yup from 'yup'
import "./App.css"
import axios from "axios";

//INITIAL STATE --------------------------------------
const initialFormValues = {
  name: '',
  pizzaSize: '',
  bacon: false,
  pepperoni: false,
  mozzarella: false,
  cheddar: false,
  olives: false,
  mushrooms: false,

}

//INITIAL ERRORS----------------------------------------
const initialFormErrors = {
  name: '',
  pizzaSize: '',
}

const initialDisabled = true;

const App = () => {
//State here -----------------------------------------
const [formValues, setFormValues] = useState(initialFormValues)
const [orders, setOrders] = useState([]);
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)

//Input Changes --------------------------------------
const handleChange = ( name, value ) => {
  setFormValues({...formValues, [name]: value})
}

//Form Submission -------------------------------------------------------
const formSubmit = (event) => {
  event.preventDefault()
  const newOrder = {
    name: formValues.name,
    pizzaSize: formValues.pizzaSize,
    toppings: ['bacon', 'pepperoni', 'mozzarella', 'cheddar', 'olives', 'mushrooms'].filter((topping) => formValues[topping])
  }
  console.log('New Order: ', newOrder)
  postOrder(newOrder)
}

//Post New Order ---------------------------------------------
const postOrder = (newOrder) => {
  axios.post('https://reqres.in/api/products', newOrder)
  .then(res => {
    setOrders([...orders, res.data]);
    setFormValues(initialFormValues)
  })
  .catch(error => {
    console.log(error)
  })
}

//Validate Data---------------------------------------------
useEffect(() => {
  schema.isValid(formValues).then(valid => {
    setDisabled(!valid)
  })
},[formValues])

  return (


<Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pizza">
          <Form
          values={formValues}
          change={handleChange}
          submit={formSubmit} 
          errors={formErrors}
          disabled={disabled}
          orders={orders}/>
        </Route>
        {/* <Route path="/help">
          <Help />
        </Route> */}
      </Switch>
    </Router>
 
     
 );
};
export default App;
