import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory as history, Link } from 'react-router-dom';
import Nav from './Nav'




export default function Form(props) {



    return (
        <div className="App">
        <Nav />
    <div className='middle-text'>
        <h3>Your favorite food, delivered while coding</h3>
    </div>
    <div className='hungry-btn'>
      {/* <button onClick={() => history.push('/pizza')}>Hungry?</button> */}
      <Link to='/pizza'>Hungry?</Link>
      
    </div>
    </div>
    )
}