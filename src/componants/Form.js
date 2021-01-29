import React, { useState, useEffect } from 'react'
import axios from 'axios'



export default function Form(props) {

//Props from App.JS-------------------------------------------------
const { values, errors, change, submit, disabled} = props;


//On Change Function-----------------------------------------------
const onChange = evt => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)
  }
// Submit (prevents it from reloading and then executes the function) ---------------------------------------------------------
const onSubmit = event => {
    event.preventDefault()
    submit()
}


    return (
        <div className="form-container">
        hey
         </div>
        
    )
}