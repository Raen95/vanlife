import '../assets/style/main.scss'
import {Link} from 'react-router-dom'

export default function PageNotFound() {
    return (
        <section className='not-found-page'>
            <div className='container'>
                <h1>Page not found</h1>
                <Link to="/" className="cta">Back to homepage</Link>
            </div>
        </section>
    )
}