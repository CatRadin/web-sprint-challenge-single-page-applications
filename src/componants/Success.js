import React from 'react'
import { useHistory as history, Link } from 'react-router-dom';
import Nav from './Nav'


export default function Form(props) {

const { details } = props;
console.log(details.order.name)

    return (
        
        <div className='order-printer'>
           
            <h2>Success! Your order is below.</h2>
         <h3>{details.order.name}</h3>
        <p>Pizza Size: {details.order.pizzaSize}</p>
        {
        details.order.toppings.map(topping => {
           return <ul>
               <li>{topping}</li>
           </ul> 
        })
}

        </div>
    
    )
}