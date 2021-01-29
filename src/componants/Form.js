import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Nav from './Nav'
import Success from './Success'



export default function Form(props) {
//Props from App.js------------------------------
const { values, errors, change, submit, disabled, orders} = props;

//On change Function----------------------------
const onChange = evt => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)






}
    return (
        
        <div className="App">
            <Nav />
            <div className='form-container'>
            <div className='form-block'>
            <div className='tan-bar'></div>
                <h3>Place your order</h3>
                <div className="errors-container">
                    <p>{errors.name}</p>
                    {errors.pizzaSlice}
                </div>
                <div className="form-inner-box">
                <form onSubmit={submit}>
                    
                    <input
                    type='text'
                    name='name'
                    placeholder='Your name here'
                    value={values.name}
                    onChange={onChange}
                     /> <br />
                     <label>Pizza Size: </label>
                     <select
                     name='pizzaSize'
                     value={values.pizzaSize}
                     onChange={onChange}>
                         <option value= ''>-select size-</option>
                         <option value='small'>Small</option>
                         <option value='medium'>Medium</option>
                         <option value='large'>Large</option>
                         <option value='extra large'>Extra Large</option>
                         </select> <br />
                         <div className='tan-bar2'></div>
                    
                         <h4>Choose meats:</h4>
                         <div className="toppings">
                             
                            <label>
                                Bacon: 
                             </label>
                             <input
                             type='checkbox'
                             name='bacon'
                             checked={values.bacon}
                             onChange={onChange}
                              ></input>
                             <label>
                                Pepperoni: 
                             </label>
                             <input
                             type='checkbox'
                             name='pepperoni'
                             checked={values.pepperoni}
                             onChange={onChange}
                             ></input>
                         </div>

                         <div className='tan-bar2'></div>
                            <h4>Choose cheese:</h4>
                         <div className="toppings">
                             
                            <label>
                            Mozzarella: 
                             </label>
                             <input
                             type='checkbox'
                             name='mozzarella'
                             checked={values.mozzarella}
                             onChange={onChange}
                             ></input>
                             <label>
                                Cheddar: 
                             </label>
                             <input
                             type='checkbox'
                             name='cheddar'
                             checked={values.cheddar}
                             onChange={onChange}
                             ></input>
                         </div>

                         <div className='tan-bar2'></div>
                            <h4>Choose vegetables:</h4>
                         <div className="toppings">
                             
                            <label>
                            Olives: 
                             </label>
                             <input
                             type='checkbox'
                             name='olives'
                             checked={values.olives}
                             onChange={onChange}
                             ></input>
                             <label>
                                Mushrooms: 
                             </label>
                             <input
                             type='checkbox'
                             name='mushrooms'
                             checked={values.mushrooms}
                             onChange={onChange}
                             ></input>
                             
                         </div>
                         <div className="submit-btn">
                         <button disabled={disabled}>Submit</button>
                             </div>
                    

                </form>
              
                </div>
               
            </div>
            {
           orders.map(order => {
             return <Success details={{order}} />
           })
         }
        </div>
        
         </div>


        
    )
}