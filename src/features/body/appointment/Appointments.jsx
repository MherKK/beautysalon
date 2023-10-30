import { useState } from "react";
import "./appointment.css"
import MakeUpArtists from "./styles/MakeUpArtists";
import HairArtists from "./styles/HairArtists";


export default function Appointments() {


    const [display, setDisplay] = useState('Hair');




    return (
        <div className="appointment-container">
            <h2>Check the available appointments for today</h2>

            <div className="services-button_container">
                <button
                    style={display === 'MakeUp' ? { fontWeight: '800', textDecoration: 'underline', textUnderlineOffset: '8px', borderLeft: '1px solid black' } : {}}
                    onClick={(e) => {
                        e.preventDefault()
                        setDisplay('MakeUp')
                    }}
                >MakeUp
                </button>
                <button
                    style={display === 'Hair' ? { fontWeight: '800', textDecoration: 'underline', textUnderlineOffset: '8px' } : { border: 'none' }}
                    onClick={(e) => {
                        e.preventDefault();
                        setDisplay('Hair')
                    }}
                >Hair</button>
            </div>


            {display === 'Hair' ? <HairArtists /> :
                <MakeUpArtists />}
        </div>
    );
}

