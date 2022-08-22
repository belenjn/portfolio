import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import {strings} from '../../utils/strings'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1wvxva2', 'template_90wc1va', form.current, 'rmxQdOfCoX7ce-T63')

    e.target.reset()
    
  };


  return (
    <section id='contact'>
      <h5>{strings.title_contact1}</h5>
      <h2>{strings.title_contact2}</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>{strings.title_contact3}</h4>
              <a href='mailto:belen.develop@gmail.com' target='_blank' rel='noreferrer'>{strings.link_contact1}</a>
          </article>
        </div>

        {/* FORMULARIO: */}

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Nombre Completo' required/>
          <input type='email' name='email' placeholder='Correo electrónico' required/>
          <textarea name='message' rows='7' placeholder='Tu mensaje' required></textarea>
          <button type='submit' className='btn btn-primary'>{strings.button_contact1}</button>
        </form>

      </div>


    </section>
  )
}
