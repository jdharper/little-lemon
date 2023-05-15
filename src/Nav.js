import Logo from './assets/Logo.svg'

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

export function Nav(props) {
    return <nav>
        <img src={Logo}  alt="Little Lemon Logo"/>
        <NavList />
    </nav>
}