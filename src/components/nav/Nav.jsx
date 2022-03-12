import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageRoundedDetail} from 'react-icons/bi'
import {RiPassportFill} from 'react-icons/ri'
import {useState} from 'react'

export const Nav = () => {

  const [activeNav, setActiveNav] = useState('#header');
  return (
    <nav>
      <a href='#header'
       onClick={() => setActiveNav('#header')}
       className={activeNav === '#header' ? 'active' : ''}
       > <AiOutlineHome/> </a>

      <a href='#about' 
      onClick={() => setActiveNav('#about')}
      className={activeNav === '#about' ? 'active' : ''}
      > <AiOutlineUser/> </a>

      <a href='#experience'
      onClick={() => setActiveNav('#experience')}
      className={activeNav === '#experience' ? 'active' : ''}
      > <BiBook/> </a>

      <a href='#portfolio'
      onClick={() => setActiveNav('#portfolio')}
      className={activeNav === '#portfolio' ? 'active' : ''}
      > <RiPassportFill/> </a>

      <a href='#contact'
      onClick={() => setActiveNav('#contact')}
      className={activeNav === '#contact' ? 'active' : ''}
      > <BiMessageRoundedDetail/> </a>
    </nav>
  )
}
