import React from 'react'
import './style.scss'
import { useParams, Link, useLocation } from "react-router-dom"
import {getVan} from '../../components/api'

export default function VanDetail() {
    const [van, setVan] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false)

    const params = useParams();
    const location = useLocation();

    const previousPage = location.state?.search || '';
    const typePrevPage = location.state?.type || 'all';

    React.useEffect(() => {
        async function getVanDatas() {
            setLoading(true)
            try {
                const data = await getVan(params.id);
                setVan(data)
                setError(null)
            } catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        getVanDatas()
    }, [params.id])

    return (
        <div className='wrapper-van-details'>
            <div className="container">
                <Link className="back-link" to={`..${previousPage}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none">
                        <path d="M13.0223 6.28131C13.4036 6.28131 13.7128 5.97217 13.7128 5.59082C13.7128 5.20947 13.4036 4.90033 13.0223 4.90033V6.28131ZM0.574363 5.10257C0.304709 5.37222 0.304709 5.80942 0.574363 6.07907L4.96862 10.4733C5.23828 10.743 5.67547 10.743 5.94513 10.4733C6.21478 10.2037 6.21478 9.76648 5.94513 9.49683L2.03912 5.59082L5.94513 1.68481C6.21478 1.41516 6.21478 0.977962 5.94513 0.708308C5.67547 0.438654 5.23828 0.438654 4.96862 0.708308L0.574363 5.10257ZM13.0223 4.90033L1.06261 4.90033V6.28131L13.0223 6.28131V4.90033Z" fill="#858585"/>
                    </svg>
                    
                    Back to {typePrevPage} vans
                </Link>
            </div>

            {loading && 
                 <div className="container">
                     <h1>Loading...</h1>
                </div>
            }

            {error && 
                <div className="container">
                     <h1>Something went wrong: {error?.message}</h1>
                </div>
            }

            {van && 
                <div className='content-wrapper'>
                <div className="wrapper-image">
                    <img src={van.imageUrl} alt="van image" />
                </div>

                <div className={`tag ${van.type}`}>{van.type}</div>

                <p className="van-name">{van.namew}</p>

                <p className="van-price">
                    <span>${van.price}</span>
                    /day
                </p>

                <p className="van-description">{van.description}</p>

                <button className="link-button">Rent this van</button>
            </div>
            }
        </div>
    )
}