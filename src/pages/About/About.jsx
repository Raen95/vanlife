import {Link} from 'react-router-dom'
import './style.scss'

export default function About() {
    return (
        <section className="about-page">
            <div className="container">
                <div className="visual-image">
                    <img src="../../img/visual-about-page.png" alt="" />
                </div>

                <h1 className="title-section">Don’t squeeze in a sedan when you could relax in a van.</h1>

                <div className="description-page">
                    <p>
                        Our mission is to enliven your road trip with the perfect travel van rental. 
                        <span className="line-break">
                            Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. 
                            (Hitch costs extra 😉)
                        </span>
                    </p>

                    <p>
                        Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                    </p>
                </div>

                <div className="card">
                    <p>Your destination is waiting. <br /> Your van is ready.</p>

                    <Link to="/vans" className="cta">
                      Explore our vans
                    </Link>
                </div>
            </div>
        </section>
    )
}