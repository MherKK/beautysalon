import { useSelector } from "react-redux"
import "./stylists.css"
import { ourTeamList } from "../home/ourteam/OurTeamSlice"
import { useState } from "react";
import { useEffect } from "react";
import Styler from "./Styler";

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
                            document.body.style.overflowY = "hidden"
                        }}
                    >Add Styler
                    </button>
                }
                <select onClick={(e) => {
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
                        <Styler key={member.id}
                            member={member}
                            team={team}
                            setTeam={setTeam}
                            user={user}
                        />
                    )
                })}
            </div>
        </div >
    )
}