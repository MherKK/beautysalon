import { useEffect, useState } from "react";
import "./appointment.css"
import { Link, Outlet } from "react-router-dom";


export default function Appointments() {

    const [active, setActive] = useState(location.pathname.split('/')[2]);

    let hairStylersWorkingData = {
        "AlexVazen": {
            workingHours: [
                { time: '9:00', isBooked: false },
                { time: '10:00', isBooked: false },
                { time: '11:00', isBooked: false },
                { time: '12:00', isBooked: false },
                { time: '13:00', isBooked: false },
                { time: '14:00', isBooked: false },
                { time: '15:00', isBooked: false },
                { time: '16:00', isBooked: false },
                { time: '17:00', isBooked: false },
                { time: '18:00', isBooked: false },
                { time: '19:00', isBooked: false },
                { time: '20:00', isBooked: false },
            ]
        },
        "EthanCarlos": {
            workingHours: [
                { time: '9:00', isBooked: false },
                { time: '10:00', isBooked: false },
                { time: '11:00', isBooked: false },
                { time: '12:00', isBooked: false },
                { time: '13:00', isBooked: false },
                { time: '14:00', isBooked: false },
                { time: '15:00', isBooked: false },
                { time: '16:00', isBooked: false },
                { time: '17:00', isBooked: false },
                { time: '18:00', isBooked: false },
                { time: '19:00', isBooked: false },
                { time: '20:00', isBooked: false },
            ]
        },
        "SarahMitchell": {
            workingHours: [
                { time: '9:00', isBooked: false },
                { time: '10:00', isBooked: false },
                { time: '11:00', isBooked: false },
                { time: '12:00', isBooked: false },
                { time: '13:00', isBooked: false },
                { time: '14:00', isBooked: false },
                { time: '15:00', isBooked: false },
                { time: '16:00', isBooked: false },
                { time: '17:00', isBooked: false },
                { time: '18:00', isBooked: false },
                { time: '19:00', isBooked: false },
                { time: '20:00', isBooked: false },
            ]
        },
        "JakeVille": {
            workingHours: [
                { time: '9:00', isBooked: false },
                { time: '10:00', isBooked: false },
                { time: '11:00', isBooked: false },
                { time: '12:00', isBooked: false },
                { time: '13:00', isBooked: false },
                { time: '14:00', isBooked: false },
                { time: '15:00', isBooked: false },
                { time: '16:00', isBooked: false },
                { time: '17:00', isBooked: false },
                { time: '18:00', isBooked: false },
                { time: '19:00', isBooked: false },
                { time: '20:00', isBooked: false },
            ]
        },
    };

    let makeUpStylersWorkingData = {
        "EllenGirri": {
            workingHours: [
                { time: '9:00', isBooked: false },
                { time: '10:00', isBooked: false },
                { time: '11:00', isBooked: false },
                { time: '12:00', isBooked: false },
                { time: '13:00', isBooked: false },
                { time: '14:00', isBooked: false },
                { time: '15:00', isBooked: false },
                { time: '16:00', isBooked: false },
                { time: '17:00', isBooked: false },
                { time: '18:00', isBooked: false },
                { time: '19:00', isBooked: false },
                { time: '20:00', isBooked: false },
            ]
        },
        "EmilyGusto": {
            workingHours: [
                { time: '9:00', isBooked: false },
                { time: '10:00', isBooked: false },
                { time: '11:00', isBooked: false },
                { time: '12:00', isBooked: false },
                { time: '13:00', isBooked: false },
                { time: '14:00', isBooked: false },
                { time: '15:00', isBooked: false },
                { time: '16:00', isBooked: false },
                { time: '17:00', isBooked: false },
                { time: '18:00', isBooked: false },
                { time: '19:00', isBooked: false },
                { time: '20:00', isBooked: false },
            ]
        }
    };

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

