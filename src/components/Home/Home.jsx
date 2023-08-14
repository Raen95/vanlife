import {Link} from 'react-router-dom'
import './style.scss'

export default function Home() {
    return (
        <div className="homepage-visual">
            <div className="homepage-container-presentation">
                <h1 className="presentation-title">You got the travel plans, we got the travel vans.</h1>

                <h2 className="presentation-description">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</h2>

                <Link to="/vans" className="presentation-cta">Find your van</Link>
            </div>
        </div>
    )
}