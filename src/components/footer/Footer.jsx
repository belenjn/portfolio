import React from 'react'
import './footer.css'
import {BsTwitter} from 'react-icons/bs'
import {GrLinkedinOption} from 'react-icons/gr'
import {FiGithub} from 'react-icons/fi'
import {strings} from '../../utils/strings'

export const Footer = () => {
  return (
    <footer>
      <a href='#header' className='footer__logo' > BELÉN</a>

      <ul className='permalinks'>
        <li><a href='#header'>{strings.link_footer1}</a></li>
        <li><a href='#about'>{strings.title_about2}</a></li>
        <li><a href='#experience'>{strings.title_experience2}</a></li>
        <li><a href='#portfolio'>{strings.title_portfolio2}</a></li>
        <li><a href='#contact'>{strings.link_footer2}</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/belen-jn/'><GrLinkedinOption/></a>
        <a href='https://twitter.com/be_dev_'><BsTwitter/></a>
        <a href='https://github.com/belenjn'><FiGithub/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; {strings.derechos}</small>
      </div>
    </footer>
  )
}
