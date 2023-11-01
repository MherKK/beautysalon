import { Link, Outlet } from "react-router-dom"
import "./services.css"
import { useState } from "react"


export default function Services() {

    const [active, setActive] = useState(location.pathname.split('/')[2])

    return (
        <div className="service-container">
            <h2>At Haze, we are dedicated to helping you achieve your best look. Share your desires with us, and we will make them a reality.</h2>
            <div className="services-button_container">
                <Link
                    className={active == 'coloring' ? 'active' : ""}
                    to='/services/coloring'
                    onClick={() => setActive('coloring')}

                >Coloring</Link>
                <Link
                    className={active == 'styling' ? 'active' : ""}
                    to='/services/styling'
                    onClick={() => setActive('styling')}

                >Styling</Link>
                <Link
                    className={active == 'makeup' ? 'active' : ""}
                    to='/services/makeup'
                    onClick={() => setActive('makeup')}

                >MakeUp</Link>
                <Link
                    className={active == 'treatment' ? 'active' : ""}
                    to='/services/treatment'
                    onClick={() => setActive('treatment')}
                >Treatment</Link>
            </div>

            <Outlet />
        </div>
    )
}