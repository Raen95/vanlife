import {Link} from 'react-router-dom'
import './style.scss'

export default function Vancard({id, imageUrl, name, price, type}) {
    const tagType = `${type}`;

    return (
        <div className="van-card">
            <Link to={`/vans/${id}`}>
                <div className="wrapper-image">
                    <img src={imageUrl} alt="van card preview image" />
                </div>

                <div className="wrapper-van-informations">
                    <div className="van-type">
                        <p className="title">{name}</p>

                        <p className={`tag ${tagType} selected`}>{type}</p>
                    </div>

                    <div className="van-price">
                        <p className='price'>
                            ${price}
                            <span>/day</span>
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}