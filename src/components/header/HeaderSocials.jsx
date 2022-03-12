import React from 'react'
import {AiFillLinkedin, AiFillTwitterCircle, AiFillGithub}  from 'react-icons/ai';


export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://twitter.com/be_dev_' target="_blank" rel='noreferrer'> <AiFillTwitterCircle/> </a>
        <a href='https://www.linkedin.com/in/belen-jn/' target="_blank" rel='noreferrer'> <AiFillLinkedin/> </a>
        <a href='https://github.com/belenjn' target="_blank" rel='noreferrer'> <AiFillGithub/> </a>


    </div>
  )
}
