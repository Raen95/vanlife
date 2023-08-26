import React, { useState } from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import './style.scss'
import {loginUser} from '../../components/api'

export default function Login() {
    const [formDatas, setFormDatas] = useState({ email: '', password: ''});
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('idle');

    const navigate = useNavigate();
    const location = useLocation();

    const navigateFromLocation = location.state?.from || '/host'
    const hostLoginErrorTitlte = location.state?.message && location.state?.message; 


    function handleChange(e) {
        const {name, value} = e.target;

        setFormDatas(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        loginUser(formDatas)
            .then(data => {
                setError(null)
                localStorage.setItem("loggedin", true)
                navigate(navigateFromLocation, {replace: true})
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setStatus("idle")
            })
    }

    return (
        <section className="login-page">
            <div className="container">
                {
                    <h3>{hostLoginErrorTitlte}</h3>
                }

                <h1>Sign in to your account</h1>

                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} type="text" name="email" placeholder='Email address'/>
                    <input onChange={handleChange} type="password" name="password" placeholder='Password'/>

                    <button disabled={status === 'submitting'} className="submit-button">
                        {status === "submitting"
                            ? "Logging in..."
                            : "Log in"
                        }
                    </button>
                </form>

                {error && <h3 className='error-message'>No user found with that credentials</h3>}
            </div>
        </section>
    )
}