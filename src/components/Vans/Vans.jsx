import React from 'react'
import './style.scss'
import Vancard from '../Vancard/Vancard';
import Loader from '../Loader/Loader';

export default function Vans() {
    const [vansList, setVansList] = React.useState([]);
    const [loader, setLoader] = React.useState(true)

    React.useEffect(() => {
        let timerLoader;

        fetch('/api/vans')
            .then(response => response.json())
            .then(data => setVansList(data.vans))

        timerLoader = setTimeout(() => {
            setLoader(false)
        }, 1000)   

        return () => {
            clearInterval(timerLoader)
        }  
    }, []);

    const vansCards = vansList.map(card => (
        <Vancard 
            key={card.id}
            imageUrl={card.imageUrl}
            name={card.name}
            price={card.price}
            type={card.type}
        />
    ))

    return (
        <section className="vans-page">
            <div className="container">
                <h1>Explore our van options</h1>

                {loader ? 
                    <Loader /> :
                    
                    <div className="container-vans-cards">
                        {vansCards}
                    </div> 
                }
            </div>
        </section>
    )
}