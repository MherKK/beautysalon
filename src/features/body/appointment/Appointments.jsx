import { useState } from "react";
import "./appointment.css"
import { useSelector } from "react-redux";
import { ourTeamList } from "../home/ourteam/OurTeamSlice";
import MakeUpArtists from "./styles/MakeUpArtists";
import HairArtists from "./styles/HairArtists";


export default function Appointments() {


    const [display, setDisplay] = useState('Hair');
    const ourTeam = useSelector(ourTeamList);
    let hairStylers = ourTeam.filter(styler => !styler.role.search('Hair')) || [];
    let makeUpStlylers = ourTeam.filter(styler => !styler.role.search('Make Up')) || [];



    return (
        <div className="appointment-container">
            <h2>Check the available appointments for today</h2>

            <div className="services-button_container">
                <button
                    style={display === 'MakeUp' ? { fontWeight: '800', textDecoration: 'underline', textUnderlineOffset: '8px', borderLeft: '1px solid black' } : {}}
                    onClick={() => setDisplay('MakeUp')}
                >MakeUp
                </button>
                <button
                    style={display === 'Hair' ? { fontWeight: '800', textDecoration: 'underline', textUnderlineOffset: '8px' } : { border: 'none' }}
                    onClick={() => {
                        setDisplay('Hair')
                    }}
                >Hair</button>

            </div>


            {display === 'Hair' ? <HairArtists hairStylers={hairStylers} /> :
                <MakeUpArtists makeUpStlylers={makeUpStlylers} />}
        </div>
    );
}

