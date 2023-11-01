import { Link, Outlet } from "react-router-dom"
import "./services.css"
import { useState } from "react"

export default function Services() {

    const [click, setClick] = useState(location.pathname.split('/')[2])

    return (
        <div className="service-container">
            <h2>At Haze, we are dedicated to helping you achieve your best look. Share your desires with us, and we will make them a reality.</h2>
            <div className="services-button_container">
                <Link
                    to='/services/coloring'
                    style={click === 'coloring' ? { fontWeight: '800', textDecoration: 'underline', textUnderlineOffset: '8px' } : {}}
                    onClick={() => setClick('coloring')}
                >Coloring</Link>
                <Link
                    to='/services/styling'
                    style={click === 'styling' ? { fontWeight: '800', textDecoration: 'underline', textUnderlineOffset: '8px' } : {}}
                    onClick={() => setClick('styling')}
                >Styling</Link>
                <Link
                    to='/services/makeup'
                    style={click === 'makeup' ? { fontWeight: '800', textDecoration: 'underline', textUnderlineOffset: '8px' } : {}}
                    onClick={() => setClick('makeup')}
                >MakeUp</Link>
                <Link
                    to='/services/treatment'
                    style={click === 'treatment' ? { fontWeight: '800', textDecoration: 'underline', textUnderlineOffset: '8px' } : {}}
                    onClick={() => setClick('treatment')}
                >Treatment</Link>
            </div>

            <Outlet />
        </div>
    )
}