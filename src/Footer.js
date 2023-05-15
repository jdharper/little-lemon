import Logo_portrait from './assets/logo-portrait.png'
import { NavList } from './Nav.js'

export function Footer(props) {
    return <footer >
        <img src={Logo_portrait} width="5%" alt="Little Lemon Logo"/>
        <div>
            <h2>Doormat Navigation</h2>
            <NavList />
        </div>
        <div>
            <h2>Contact</h2>
            <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
        </div>
        <div>
            <h2>Social Media Links</h2>
            <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
        </div>

    </footer>
}