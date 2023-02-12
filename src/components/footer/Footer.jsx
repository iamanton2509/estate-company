import {NavLink} from 'react-router-dom';

import './footer.css';

import instagram from "./../../images/socials/instagram-light.svg";
import facebook from "./../../images/socials/facebook-light.svg";
import tiktok from "./../../images/socials/tiktok-light.svg";
import twitter from "./../../images/socials/twitter-light.svg";
import youtube from "./../../images/socials/youtube-light.svg";

import instagramOriginal from "./../../images/socials/instagram-original.svg";
import facebookOriginal from "./../../images/socials/facebook-original.svg";
import tiktokOriginal from "./../../images/socials/tiktok-original.svg";
import twitterOriginal from "./../../images/socials/twitter-original.svg";
import youtubeOriginal from "./../../images/socials/youtube-original.svg";

function Footer() {

    const swapIcons = (e) => {
        switch (e.target.getAttribute('src')) {
            case instagram:
                e.target.setAttribute('src', instagramOriginal);
                break;
            case facebook:
                e.target.setAttribute('src', facebookOriginal);
                break;
            case tiktok:
                e.target.setAttribute('src', tiktokOriginal);
                break;
            case twitter:
                e.target.setAttribute('src', twitterOriginal);
                break;
            case youtube:
                e.target.setAttribute('src', youtubeOriginal);
        }
    }

    const swapToLightIcons = (e) => {
        switch (e.target.getAttribute('src')) {
            case instagramOriginal:
                e.target.setAttribute('src', instagram);
                break;
            case facebookOriginal:
                e.target.setAttribute('src', facebook);
                break;
            case tiktokOriginal:
                e.target.setAttribute('src', tiktok);
                break;
            case twitterOriginal:
                e.target.setAttribute('src', twitter);
                break;
            case youtubeOriginal:
                e.target.setAttribute('src', youtube);
        }
    }

    return (
        <footer className="footer">
            <div className="container">
                <ul className="footer-items">
                    <li><NavLink to="/career">Career</NavLink></li>
                    <li><NavLink to="/contacts">Contact us</NavLink></li>
                    <li><NavLink to="/privacy">Legal & privacy</NavLink></li>
                    <li>
                        <div className="email-container">
                            <form method='post' autoComplete='off'>
                                <input type='email' className='email-field' placeholder='Follow updates' />
                                <button type='submit' onClick={(e) => e.preventDefault()}>Subcribe</button>
                            </form>
                        </div>
                    </li>
                </ul>
                <div className="footer-socials">
                    <a href="https://www.instagram.com/" target="_blank"><img onMouseOver={swapIcons} onMouseOut={swapToLightIcons} src={instagram} className="social-icon" /></a>
                    <a href="https://facebook.com/" target="_blank"><img onMouseOver={swapIcons} onMouseOut={swapToLightIcons} src={facebook} className="social-icon" /></a>           
                    <a href="https://tiktok.com/" target="_blank"><img onMouseOver={swapIcons} onMouseOut={swapToLightIcons} src={tiktok} className="social-icon" /></a>
                    <a href="https://twitter.com/" target="_blank"><img onMouseOver={swapIcons} onMouseOut={swapToLightIcons} src={twitter} className="social-icon" /></a>
                    <a href="https://www.youtube.com/" target="_blank"><img onMouseOver={swapIcons} onMouseOut={swapToLightIcons} src={youtube} className="social-icon" /></a>            
                </div>
            </div>
        </footer>
    )
}

export default Footer;