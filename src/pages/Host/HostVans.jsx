import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

export default function HostVans() {
    const [userVans, setUserVans] = React.useState([]);

    React.useEffect(() => {
        fetch('/api/host/vans')
            .then(response => response.json())
            .then(data => setUserVans(data.vans))
    }, [])

    const listedVans = userVans.map(van => (
       <div className='listed-van' key={van.id}>
            <Link to={`/host/vans/${van.id}`}>
                <img src={van.imageUrl} alt="van preview image" />

                <div className="container-van-infos">
                    <p className="van-name">{van.name}</p>
                    <p className='price'>${van.price}/day</p>
                </div>
            </Link>
       </div>
    ))

    return (
        <section className="host-vans-page">
            <div className="container">
                <h1>Your listed vans</h1>

                <div className="wrapper-listed-vans">
                    {listedVans}
                </div>
            </div>
        </section>
    )
}