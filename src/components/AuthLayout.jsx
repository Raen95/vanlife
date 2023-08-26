import {Outlet, Navigate, useLocation} from 'react-router-dom'

export default function AuthLayout() {
    const isLoggedIn = localStorage.getItem("loggedin")
    const location = useLocation()

    return isLoggedIn ? 
            <Outlet /> : 
            <Navigate to="/login" 
                      state={{ 
                        message: 'Yout must login first!',
                        from: location.pathname
                      }}
                      replace
            />     
}