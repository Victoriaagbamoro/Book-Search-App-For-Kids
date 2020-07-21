import React from 'react'
import './Footer.css'


export default function Footer(){
    return(
        <div className="footer">
            <section>
                <div>
                    <h5>Company</h5>
                    <ul>
                        <li>About Us</li>
                        <li>Rooms</li>
                        <li>Blog</li>
                        <li>Support</li>
                        <li>Careers</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div>
                    <h5>Social</h5>
                    <ul>
                        <li>Twitter</li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
                <div className='sub-container'>
                    <div>
                        <h5>Legal</h5>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Term of Service</li>
                        </ul>
                    </div>
                    <div>
                        <h5>Keep In Touch</h5>
                        <ul>
                            <li>hello@bandb.com</li>
                            <li>+234 123 456 7890</li>
                        </ul>
                    </div>
                </div>
                <div className='subscription-container'>
                    <h5>SIGN UP FOR OUR NEWSLETTER</h5>
                    <div>
                        <input type="email" id="footer-input" placeholder="Email Address"/>
                        <button>Sign Up</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

