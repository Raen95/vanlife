import { Outlet, NavLink } from "react-router-dom"
import '../assets/style/main.scss'

export default function HostLayout() {
    return (    
        <>
            <div className="container">
                <div className="nav-host">
                    <NavLink to="." end>Dashboard</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'active' : ''} to="income">Income</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'active' : ''} to="vans">Vans</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'active' : ''} to="reviews">Reviews</NavLink>
                </div>
            </div>

            <Outlet />
        </>
    )
}