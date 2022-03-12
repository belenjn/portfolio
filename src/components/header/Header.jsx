import React from 'react'
import { CTA } from './CTA'
import './header.css'
import ME from '../../assets/be.png'
import { AiOutlineDown } from 'react-icons/ai';
import { HeaderSocials } from './HeaderSocials';

export const Header = () => {
  return (
    <header id='header'>
      <div className='container header__container'>

        <h5>¡Hola! Mi nombre es: </h5>
        <h1>Belén Jaraba</h1>
        <h5 className='text-light'>Desarrolladora Front-end</h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
          <img src={ME} alt=''/>
        </div>

        <a href='#contact' className='scroll__down'> <AiOutlineDown/> </a>
      </div>
    </header>
  )
}
