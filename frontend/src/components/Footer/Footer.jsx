import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='Footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                 
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil deleniti, eveniet est ipsa blanditiis error. Incidunt dolores possimus tempora mollitia quibusdam numquam repellendus ducimus quidem amet, explicabo placeat consectetur atque?</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                    </div>
            </div>

            <div className="footer-content-right">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-conent-center">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>92189829</li>
                    <li>932902930</li>
                </ul>

            </div>
        </div>
        <hr/>
        <p className='"footer-copy-rigth'>Copyright @Foodie.com-All Right Reserved</p>
    </div>
  )
}

export default Footer