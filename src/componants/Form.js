import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from './Nav'



export default function Form(props) {
//Props from App.js
    const { values, change } = props;

//On change Function
    const onChange = evt => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : values;
    change(name, valueToUse)
}
    return (
        
        <div className="App">
            <Nav />
            <div className='form-container'>
            <div className='form-block'>
            <div className='tan-bar'></div>
                <h3>Place your order</h3>
                <div className="form-inner-box">
                <form>
                    {/* <label>Name: </label> <br /> */}
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
                         <option value='Extra Large'>Extra Large</option>
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
                             onChange={onchange}
                             ></input>
                             <label>
                                Pepperoni: 
                             </label>
                             <input
                             type='checkbox'
                             name='pepperoni'
                             checked={values.pepperoni}
                             onChange={onchange}
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
                             onChange={onchange}
                             ></input>
                             <label>
                                Cheddar: 
                             </label>
                             <input
                             type='checkbox'
                             name='cheddar'
                             checked={values.cheddar}
                             onChange={onchange}
                             ></input>
                         </div>


                </form>
                </div>
            </div>
        </div>
         </div>
        
    )
}