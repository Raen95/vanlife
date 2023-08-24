import React from 'react'
import './style.scss'
import { useSearchParams } from 'react-router-dom';
import Vancard from '../../components/Vancard/Vancard';
import {getVans} from '../../components/api'
import Loader from '../../components/Loader/Loader';

export default function Vans() {
    //const [vansList, setVansList] = React.useState(JSON.parse(localStorage.getItem('vans')) || []);
    const [vansList, setVansList] = React.useState([]);
    const [searchParam, setSearchParam] = useSearchParams();
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const typeFilter = searchParam.get("type")

    React.useEffect(() => {       
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans()
                setVansList(data);
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadVans()
    }, []);


    // React.useEffect(() => {
    //     localStorage.setItem('vans', JSON.stringify(vansList))    
    // }, [vansList])

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
            state={{
                search : `?${searchParam.toString()}`,
                type: typeFilter
            }}
        />
    ))

    function handleFilter(key, value) {
        setSearchParam(prevParams => {
            value === null ? prevParams.delete(key) : prevParams.set(key, value);
            return prevParams
        })  
    }

    if (loading) {
        return <div className='error-loading-state'>
                <div className='container'>
                    <Loader />
                </div>
               </div>
    }

    if (error) {
        return <div className="error-loading-state">
                <div className='container'>
                    <h1>There was an error: {error.message}</h1>
                </div>
               </div>
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

                <div className="container-vans-cards">
                    {vansCards}
                </div>
            </div>
        </section>
    )
}