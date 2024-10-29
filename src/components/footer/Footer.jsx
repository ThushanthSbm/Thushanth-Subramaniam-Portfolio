import React from 'react'
import './footer.css' 

const Footer = () => {
  return (
   
    <footer className="footer">
        <div className="footer__container container">

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#qualification" className="footer__link">Qualification</a>
                </li>
            </ul>

            <div className="footer__social">

            <a href="https://github.com/ThushanthSbm" className="footer__social-link" target="_blank">
            <i className="bx bxl-github"> </i>
            </a>

            <a href="https://www.facebook.com/anojan.sbm.9?mibextid=ZbWKwL" className="footer__social-link" target="_blank">
            <i className="bx bxl-facebook"></i>
            </a>

            <a href="https://www.instagram.com/thushanth.sbm/profilecard/?igsh=MTFkZGwyZWo3dWNrdQ==" className="footer__social-link" target="_blank">
            <i className="bx bxl-instagram"> </i>
            </a>

            </div>

            <span className="footer__copy">
                    &#169; Thushanth.S | All rights reserved. Crafted with ❤️ using  <i class='bx bxl-react' style={{ color:'#37afe4', fontSize: '1.5rem' }}></i> React.
            </span>

        </div>
    </footer>
  )
}

export default Footer
