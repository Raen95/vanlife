import React from 'react'
import {Link} from 'react-router-dom'
import Loader from '../../components/Loader/Loader';
import {getHostVans} from '../../components/api'
import './style.scss'

export default function HostVans() {
    const [userVans, setUserVans] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        async function getVans() {
            setLoading(true)
            try {
              const datas = await getHostVans()
              setUserVans(datas)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        getVans()
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

                {loading && <Loader />}

                {error && <p>There was an error: {error.message}</p>}

                <div className="wrapper-listed-vans">
                    {listedVans}
                </div>
            </div>
        </section>
    )
}