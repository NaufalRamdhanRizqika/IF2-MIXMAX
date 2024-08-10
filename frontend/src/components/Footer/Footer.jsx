import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="div footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Hungry for Something Different? <br />
              At Clowny Bar & Resto, We Serve Up More Than Just Great Food <br />
              We Dish Out Laughter and a Dash of Sarcasm <br />
              Perfect for Those Who Like Their Meals with a Side of Fun</p>
            <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+62-234-757-423</li>
                <li>contact@kosatan.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 @ KOSATAN - All Right Reserved.</p>
    </div>
  )
}

export default Footer
