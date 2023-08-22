import React from 'react'
import './style.scss'
import { useSearchParams } from 'react-router-dom';
import Vancard from '../../components/Vancard/Vancard';
import Loader from '../../components/Loader/Loader';

export default function Vans() {
    const [vansList, setVansList] = React.useState(JSON.parse(localStorage.getItem('vans')) || []);
    const [searchParam, setSearchParam] = useSearchParams();

    const typeFilter = searchParam.get("type")

    React.useEffect(() => {
        fetch('/api/vans')
            .then(response => response.json())
            .then(data => setVansList(data.vans))
    }, []);

    React.useEffect(() => {
        localStorage.setItem('vans', JSON.stringify(vansList))    
    }, [vansList])

    const renderedVans = typeFilter
                         ? vansList.filter(van => van.type === typeFilter)
                         : vansList

    const vansCards = renderedVans.map(card => (
        <Vancard 
            key={card.id}
            id={card.id}
            imageUrl={card.imageUrl}
            name={card.name}
            price={card.price}
            type={card.type}
        />
    ))

    function handleFilter(key, value) {
        setSearchParam(prevParams => {
            value === null ? prevParams.delete(key) : prevParams.set(key, value);
            return prevParams
        })  
    }

    return (
        <section className="vans-page">
            <div className="container">
                <h1>Explore our van options</h1>

                <div className="wrapper-filters">
                    <button onClick={() => handleFilter('type', 'simple')} className={`simple ${typeFilter === 'simple' ? 'selected' : null}`}>Simple</button>
                    <button onClick={() => handleFilter('type', 'rugged')} className={`rugged ${typeFilter === 'rugged' ? 'selected' : null}`}>Rugged</button>
                    <button onClick={() => handleFilter('type', 'luxury')} className={`luxury ${typeFilter === 'luxury' ? 'selected' : null}`}>Luxury</button>

                    {typeFilter &&
                     <button onClick={() => handleFilter('type', null)} className='clear-filter'>clear filter</button>
                    }
                </div>
                
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