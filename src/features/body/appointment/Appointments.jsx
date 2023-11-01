import { useState } from "react";
import "./appointment.css"
import { Link, Outlet } from "react-router-dom";


export default function Appointments() {

    const [active, setActive] = useState(location.pathname.split('/')[2])

    return (
        <div className="appointment-container">
            <h2>Check the available appointments for today</h2>

            <div className="services-button_container">
                <Link
                    to="/appointments/MakeUpStylers"
                    className={active == 'MakeUpStylers' ? 'active' : ""}
                    onClick={() => setActive('MakeUpStylers')}
                >MakeUp
                </Link>
                <Link
                    to="/appointments/HairStylers"
                    className={active == 'HairStylers' ? 'active' : ""}
                    onClick={() => setActive('HairStylers')}
                >Hair</Link>
            </div>

            <Outlet />

        </div>
    );
}

