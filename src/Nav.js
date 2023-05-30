import Logo from './assets/Logo.svg'
import Hamburger_menu from './assets/icon-hamburger-menu.svg'
import Close_menu from './assets/x-mark.svg'

import { Link } from "react-router-dom";
import { useState } from "react"

export function NavList(props) {
    const { show, className, setShowMenu } = props;
    const ulProps = {}
    if (show)
        ulProps['style'] = { display: "flex "}

    function menuClick(e) {
        setShowMenu(false)
    }

    return <ul className={className}>
        <li><Link to="/#home" onClick={menuClick} aria-label="On Click">Home</Link></li>
        <li><a href="/#about" onClick={menuClick} >About</a></li>
        <li><a href="/#menu" onClick={menuClick} >Menu</a></li>
        <li><Link to="/booking"  aria-label="On Click" onClick={menuClick} >Reservations</Link></li>
        <li><a href="/#order-online" onClick={menuClick} >Order Online</a></li>
        <li><a href="/#login" onClick={menuClick} >Login</a></li>
    </ul>

}

export function NavMenu(props) {
    const { showMenu, setShowMenu } = props;

    function menuClick(e) {
        e.preventDefault()
        //console.log("menuClick", e)
        setShowMenu(show => !show)
    }
    const icon = showMenu ? Close_menu : Hamburger_menu

    return <a href="menu" onClick={menuClick} style={{display: "block", width: "25px", height: "25px"}}><img className="menu-icon" src={icon} alt="Show/Hide Menu"/></a>

}

export function Nav(props) {
    const [showMenu, setShowMenu] = useState(false);
    const showClassStr = showMenu ? " show" : ""
    //console.log("show", showMenu, showClassStr)

    return <>
        <nav>
            <img className="logo" src={Logo}  alt="Little Lemon Logo"/>
            <div className={"blur" + showClassStr}></div>
            <NavList className={showClassStr} setShowMenu={setShowMenu}/>
            <NavMenu showMenu={showMenu} setShowMenu={setShowMenu} />
        </nav>
    </>
}