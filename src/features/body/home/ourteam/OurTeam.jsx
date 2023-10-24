import { useSelector } from "react-redux"
import "./ourteam.css"
import { ourTeamList } from "./OurTeamSlice";

import MembersCarousel from "./MembersCarousel";
import { Link } from "react-router-dom";

export default function OurTeam() {
    const ourTeam = useSelector(ourTeamList)
    return (
        <div className="our-team-container">
            <p>Our Advanced Team of Stylists and Colorists</p>
            <div >
                <MembersCarousel ourTeam={ourTeam} />
            </div>
            <Link onClick={() => {
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
            }} to="/stylists" style={{ width: "300px", marginBottom: "30px" }}>View Full List of our Stylists</Link>
        </div>
    )
}