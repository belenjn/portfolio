import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {strings} from '../../utils/strings'

export const Experience = () => {
  return (
    <section id='experience'>
    
    <h5>{strings.title_experience1}</h5>
    <h2>{strings.title_experience2}</h2>



      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>{strings.title_experience3}</h3>
          <div className='experience__content'>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>{strings.title_experience4}</h4>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                
               <div>
                <h4>{strings.title_experience5}</h4>
               </div>

              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>{strings.title_experience6}</h4>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>

                <div>
                  <h4>{strings.title_experience7}</h4>
               </div>
            

              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>{strings.title_experience8}</h4>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>{strings.title_experience9}</h4>
                </div>
              
              </article>
          </div>
        </div>

        <div className='experience__backend'>
        <h3>{strings.title_experience10}</h3>
          <div className='experience__content'>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>{strings.title_experience11}</h4>
                </div>
             
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                   <h4>{strings.title_experience12}</h4>
                </div>
               
              </article>

          </div>
        </div>
      </div>

    </section>
  )
}
