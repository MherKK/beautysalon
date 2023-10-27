import MakeUpServices from "./MakeUpServices"
import HairColoringServices from "./HairColoringServices"
import TreatmentServices from "./TreatmentServices"
import HairStylingServices from "./HairStylingServices"


import "./services.css"

import { useState } from "react"

export default function Services() {


    const [display, setDisplay] = useState('styling');
    return (
        <div className="service-container">
            <h2>At Haze, we are dedicated to helping you achieve your best look. Share your desires with us, and we will make them a reality.</h2>
            <div className="services-button_container">
                <button
                    style={display === 'coloring' ? { fontWeight: '800', textDecoration: 'underline', textUnderlineOffset: '8px' } : {}}
                    onClick={() => setDisplay('coloring')}>Coloring</button>
                <button
                    style={display === 'styling' ? { fontWeight: '800', textDecoration: 'underline', textUnderlineOffset: '8px' } : {}}
                    onClick={() => setDisplay('styling')}>Styling</button>
                <button
                    style={display === 'makeup' ? { fontWeight: '800', textDecoration: 'underline', textUnderlineOffset: '8px' } : {}}
                    onClick={() => setDisplay('makeup')}>MakeUp</button>
                <button
                    style={display === 'treatment' ? { fontWeight: '800', textDecoration: 'underline', textUnderlineOffset: '8px' } : {}}
                    onClick={() => setDisplay('treatment')}>Treatment</button>
            </div>
            {display === 'styling' ? <HairStylingServices display={display} /> :
                display === 'coloring' ? <HairColoringServices display={display} /> :
                    display === 'makeup' ? <MakeUpServices display={display} /> :
                        <TreatmentServices display={display} />}
        </div>
    )
}