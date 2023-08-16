import React from 'react'
import './style.scss'
import { useParams } from "react-router-dom"

export default function VanDetail() {
    const [van, setVan] = React.useState(null);
    const params = useParams();

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(response => response.json())
            .then(data => setVan(data.vans))
    }, [params.id])


    return (
        <div className='wrapper-van-details'>
            {van ? 
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
                : 
                <div className="container">
                    <h1>Loading...</h1>
                </div>
            }
        </div>
    )
}