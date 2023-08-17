import {Link, NavLink} from 'react-router-dom'
import './style.scss'

export default function Navbar() {
    return (
        <section className="header-section">
            <header>
                <Link className="header-logo" to="/">
                    <img src="../../img/vanlife-logo.png" alt="valife logo" />
                </Link>

                <nav>
                    <NavLink className={({isActive}) => isActive ? 'active' : null} to="/host">Host</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'active' : null} to="/about">About</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'active' : null} to="/vans">Vans</NavLink>
                </nav>
            </header>
        </section>
    )
}