import Logo_portrait from './assets/logo-portrait.png'
//import { NavList } from './Nav.js'
import facebook from './assets/icon-facebook.svg'
import instagram from './assets/icon-instagram.svg'
import reddit from './assets/icon-reddit.svg'
import twitter from './assets/icon-twitter.svg'

const socials = [ { src: facebook,  link: "https://www.facebook.com/" }, 
                  { src: instagram, link: "https://www.instagram.com/" },
                  { src: reddit,    link: "https://www.reddit.com/" },
                  { src: twitter,   link: "https://twitter.com/" }
                ]

export function Footer(props) {
    return <footer id="about">
        <img src={Logo_portrait} alt="Little Lemon Logo"/>
        <div className="contact">
            <h2>Contact</h2>
                <p>1600 Pennsylvania Avenue NW<br/>Washington, DC 20500</p>
                <p><a href="tel:+2024561111">(202) 456-1111</a></p>
                <p><a href="mailto: little-lemon@example.com">little-lemon@example.com</a></p>
        </div>
        <div className="social">
            <h2>Social Media Links</h2>
            <div className="social-links">
                {socials.map((e, i) => (<a key={i} href={e.link}>  <img src={e.src} alt="Social Media Icon" /> </a>))}
            </div>
        </div>

    </footer>
}