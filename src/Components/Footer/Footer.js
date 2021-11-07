import React from 'react'

import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
import styled from 'styled-components'
import './FooterElement.css'
import { Link } from 'react-router-dom';

const Footer = () => {


    return (
        <>

            <div className = "footer">
                <div className = "container">
                    <div className = "foot">                       
                        <div className = "footer-col2">
                            <img src = {require('../../Logo/logo2.png').default} ></img>
                            <div className = "footer-col9"></div>
                            <a href = "https://www.freeprivacypolicy.com/live/4500019d-c3fa-41bb-b0af-63ce534b8db0">
                                <img src = {require('../../Logo/Privacy.png').default} ></img>
                                </a>
                            
                        </div>
                        


                        <div className ="footer-col4">
                            <h3>Follow Us</h3>
                            <div className="links">

                                <a href = "https://www.facebook.com/profile.php?id=100073372615783">
                                <img src = {require('../../Logo/fb.svg').default} ></img>
                                </a>
                               
                                <a href = "https://twitter.com/blazeupindia?t=gWBm9VBismSabAtDIM02Bw&s=08">
                                <img src = {require('../../Logo/twitter.svg').default} ></img>
                                </a>
                                
                                <a href= "https://www.instagram.com/blazeupindia/">
                                 <img src = {require('../../Logo/insta.svg').default} ></img>
                                </a>

                             
                                {/* <FaYoutube/> */}
                                </div>
                            
                        </div>
                        </div>
                        <hr />
                        <WebsiteRights>© {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    
                </div>
            </div>


    

                    </>

            )
}

            export default Footer;


            const WebsiteRights = styled.small`
              color: #8a8a8a;
            font-size: 16px;
        `;
