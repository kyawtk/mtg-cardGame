import React from 'react'
import './Header.scss'
import logo from '../assets/images/logo.png'
const Header = ({setModal}) => {
  return (
    <div className="header">
        <img src={logo} alt="" />
        <button className='btn' onClick={()=>setModal(true)}> How to play</button>
    </div>
  )
}

export default Header