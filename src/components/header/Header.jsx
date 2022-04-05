import React from 'react'
import { CTA } from './CTA'
import './header.css'
import ME from '../../assets/be.png'
import { AiOutlineDown } from 'react-icons/ai';
import { HeaderSocials } from './HeaderSocials';
import {strings} from '../../utils/strings'

export const Header = () => {
  return (
    <header id='header'>
      <div className='container header__container'>

        <h5>{strings.title_header1}</h5>
        <h1>{strings.title_header2}</h1>
        <h5 className='text-light'>{strings.title_header3}</h5>
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
