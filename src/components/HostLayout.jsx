import { Outlet, NavLink } from "react-router-dom"
import '../assets/style/main.scss'

export default function HostLayout() {
    return (    
        <>
            <div className="container">
                <div className="nav-host">
                    <NavLink to="/host" end>Dashboard</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'active' : ''} to="/host/income">Income</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'active' : ''} to="/host/reviews">Reviews</NavLink>
                </div>
            </div>

            <Outlet />
        </>
    )
}