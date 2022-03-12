import React from 'react'
import CV from '../../assets/CV2022.pdf'

export const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'> Descargar CV</a>
        <a href='#contact' className='btn btn-primary'> Contacta conmigo</a>

    </div>
  )
}
