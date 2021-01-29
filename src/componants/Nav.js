import React from 'react'
import { useHistory as history, Link } from 'react-router-dom';


export default function Form(props) {



    return (
        
        <div className='nav-bar'>
        <h2>Lambda <span className='red-color'>Eats</span></h2>
        <div className='link-holder'>
        <Link to='/'>Home</Link>
        <Link to='/help'>Help</Link>
        </div>
    </div>
    
    )
}