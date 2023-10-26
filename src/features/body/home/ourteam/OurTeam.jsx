
import MembersCarousel from "./MembersCarousel";
import { Link } from "react-router-dom";
import "./ourteam.css"

export default function OurTeam() {

    return (
        <div className="our-team-container">
            <p>Our Advanced Team of Stylists and Colorists</p>
            <div >
                <MembersCarousel />
            </div>
            <Link onClick={() => {
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
            }} to="/stylists" style={{ width: "300px", marginBottom: "30px" }}>View Full List of our Stylists</Link>
        </div>
    )
}