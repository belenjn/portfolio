import React from 'react'
import CV from '../../assets/CV2022.pdf'
import {strings} from '../../utils/strings'


export const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>{strings.button_cv}</a>
        <a href='#contact' className='btn btn-primary'>{strings.button_contact}</a>

    </div>
  )
}
