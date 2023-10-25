import { useSelector } from "react-redux"
import { ourTeamList } from "../home/ourteam/OurTeamSlice"
import { useState } from "react";
import { useEffect } from "react";
import Styler from "./Styler";
import "./stylists.css"
import AddStylist from "./AddStylist";

export default function Stylists() {

    let user = 'admin';
    const ourTeam = useSelector(ourTeamList);
    const [display, setDisplay] = useState(false);
    let [team, setTeam] = useState(ourTeam);


    useEffect(() => {
        setTeam(ourTeam)
    }, [ourTeam])

    return (
        <div className="stylists-container">
            <p>Our Advanced Team of Stylists and Colorists and More</p>
            <div className="add-filter_container">
                {user === 'admin' && window.location.pathname == '/stylists' &&
                    <button
                        className="add-button"
                        onClick={(e) => {
                            setDisplay(!display)
                        }}
                    >Add Styler
                    </button>
                }
                <select onChange={(e) => {
                    setTeam(ourTeam.filter((styler) => e.target.value === '' ? styler : styler.role === e.target.value))
                }}>
                    <option value=''>All Stylers</option>
                    <option value="Hair Colorist" >Hair Colorist</option>
                    <option value='Hair Brusher'>Hair Brusher</option>
                    <option value="Make Up">Make Up</option>
                </select>
            </div>


            <div className="stylists-container_members">
                {team.map((member) => {
                    return (
                        <Styler key={member.name}
                            member={member}
                            team={team}
                            setTeam={setTeam}
                            user={user}
                        />
                    )
                })}
            </div>

            {display === true &&
                <AddStylist
                    display={display}
                    setDisplay={setDisplay}
                />}
        </div >
    )
}