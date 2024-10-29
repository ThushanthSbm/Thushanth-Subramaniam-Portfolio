import React from "react";
import CIcon from '@coreui/icons-react';
import { cibBitbucket } from '@coreui/icons';
import { cibYoutube } from '@coreui/icons';
import { cibStackoverflow } from '@coreui/icons';
import { cibInstagram } from '@coreui/icons';
import { cibLinkedinIn } from '@coreui/icons';

const Social = () => {
    return (
         <div className="home__social">

<a href="https://www.linkedin.com/in/thushanth-subramaniam-15764b1a8/" className="home__social-icon" target="_blank">
   <CIcon icon={cibLinkedinIn} className="social-icon" /> 
</a>

<a href="https://github.com/ThushanthSbm" className="home__social-icon" target="_blank">
    <i className="uil uil-github-alt"> </i>
</a>

<a href="https://bitbucket.org/customer-address-book-webco/workspace/overview/" className="home__social-icon" target="_blank">
  <CIcon icon={cibBitbucket} className="social-icon" />
</a>

<a href="https://stackoverflow.com/users/18393532/thushanth-sbm" className="home__social-icon" target="_blank">
  <CIcon icon={cibStackoverflow} className="social-icon" />
</a>


<a href="https://www.instagram.com/thushanth.sbm/profilecard/?igsh=MTFkZGwyZWo3dWNrdQ==" className="home__social-icon" target="_blank">
  <CIcon icon={cibInstagram} className="social-icon" />
</a>

<a href="https://www.youtube.com/@thushanthsbm804" className="home__social-icon" target="_blank">
    <CIcon icon={cibYoutube} className="social-icon" style={{ fontSize: '2rem', color: '#ff0000', transition: 'color 0.3s ease' }} />
</a>


         </div>
    )
}

export default Social