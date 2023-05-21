import Logo from './assets/Logo.svg'
import Hamburger_menu from './assets/icon-hamburger-menu.svg'

export function NavList(props) {
    return <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#order-online">Order Online</a></li>
        <li><a href="#login">Login</a></li>
    </ul>

}

export function NavMenu(props) {
    return <img className="menu-icon" src={Hamburger_menu} style={{height: "33%"}} alt="menu icon"/>

}

export function Nav(props) {
    return <nav>
        <img className="logo" src={Logo}  alt="Little Lemon Logo"/>
        <NavList />
        <NavMenu />
    </nav>
}