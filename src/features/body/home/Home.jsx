import homeImage from "../../../assets/home-image.png"
import AboutSalon from "./aboutsalon/AboutSalon"
import "./home.css"
import OurTeam from "./ourteam/OurTeam"
import OnlinePlatforms from "./platforms/OnlinePlatforms"

export default function Home() {


    return (
        <div className="home-container">
            <img style={{ width: '100%', height: "50%" }} src={homeImage} />
            <AboutSalon />
            <OnlinePlatforms />
            <OurTeam />
        </div>
    )
}