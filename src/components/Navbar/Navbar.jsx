import {Link} from 'react-router-dom'
import './style.scss'

export default function Navbar() {
    return (
        <section className="header-section">
            <header>
                <Link className="header-logo" to="/">
                    <img src="../../img/vanlife-logo.png" alt="valife logo" />
                </Link>

                <nav>
                    <Link to="/about">About</Link>
                    <Link to="/vans">Vans</Link>
                </nav>
            </header>
        </section>
    )
}