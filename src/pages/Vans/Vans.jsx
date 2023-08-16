import React from 'react'
import './style.scss'
import Vancard from '../../components/Vancard/Vancard';
import Loader from '../../components/Loader/Loader';

export default function Vans() {
    const [vansList, setVansList] = React.useState(JSON.parse(localStorage.getItem('vans')) || []);

    React.useEffect(() => {
        fetch('/api/vans')
            .then(response => response.json())
            .then(data => setVansList(data.vans))
    }, []);

    React.useEffect(() => {
        localStorage.setItem('vans', JSON.stringify(vansList))    
    }, [vansList])

    const vansCards = vansList.map(card => (
        <Vancard 
            key={card.id}
            id={card.id}
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
                
                {vansList.length !== 0 ?
                    <div className="container-vans-cards">
                        {vansCards}
                    </div> : 
                    
                    <Loader />
                }
            </div>
        </section>
    )
}