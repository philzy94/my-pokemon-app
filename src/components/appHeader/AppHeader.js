import React from 'react'
import mainImage from '../../assets/pokemon.png'
import { Link } from 'react-router-dom';
import './AppHeader.css'

export default function AppHeader() {
  return (
    <div className='header'>
       <div className='headerImage'>
        <Link to ='/'>  <img src={mainImage} alt="myImage"/></Link>
      </div>

    </div>
  )
}
