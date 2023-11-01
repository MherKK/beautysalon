import { useState } from "react";
import "./appointment.css"
import { Link, Outlet } from "react-router-dom";


export default function Appointments() {

    const [click, setClick] = useState(location.pathname.split('/')[2])

    return (
        <div className="appointment-container">
            <h2>Check the available appointments for today</h2>

            <div className="services-button_container">
                <Link
                    to="/appointments/MakeUpStylers"
                    style={click === 'MakeUpStylers' ? { fontWeight: '800', textDecoration: 'underline', textUnderlineOffset: '8px' } : {}}
                    onClick={() => setClick('MakeUpStylers')}
                >MakeUp
                </Link>
                <Link
                    to="/appointments/HairStylers"
                    style={click === 'HairStylers' ? { fontWeight: '800', textDecoration: 'underline', textUnderlineOffset: '8px' } : {}}
                    onClick={() => setClick('HairStylers')}
                >Hair</Link>
            </div>

            <Outlet />

        </div>
    );
}

