import React from "react"
import './contact.styles.css'
import Background from './components/background/bg'
import Social from './components/socials/social'
import Forms from './components/contact_form/Forms'

import { withAssetPrefix } from "gatsby";


const ContactUs = () => {
  
 
  return (
    <div>
    <Background/>
    <div className="outer">
      
    <h1 className="heading">Contact Us</h1>
     <Forms/>
     <Social/>
     
</div>
</div>
    
  )
}

export default ContactUs
