import { Link } from "react-router-dom"
import instaIcon from "../../assets/instaIcon.png"
import fbIcon from "../../assets/face.png"
import "./footer.css"

export default function Footer() {
    return (
        <div className="footer" style={{
            backgroundColor: "black",
            display: "flex",
            flexDirection: "column"
        }}>
            <div className="footer-container">
                <Link to="/">H A Z E</Link>
                <div>
                    <h3>BOOK AN APPOINTMENT</h3>
                    <div >
                        <p><a href="tel:+37495158155">(+374) 042 142-123</a></p>
                        <p><a href="mailto:salon@gmail.com">salon@gmail.com</a></p>
                        <Link to="/appointments/HairStylers" onClick={() => {
                            document.body.scrollTop = 0
                            document.documentElement.scrollTop = 0
                        }}>click here to check the appointments</Link>
                    </div>
                </div>
                <div>
                    <h3>VISIT OUR SALON</h3>
                    <div>
                        <p>2 Baghramyan str,</p>
                        <p>Yerevan 0002,</p>
                        <p>Armenia</p>
                        <Link to="https://maps.app.goo.gl/mNMvAcydPYDM9t3y9" target="_blank">View on Google Maps</Link>
                    </div>
                </div>
                <div>
                    <h3>SALON HOURS</h3>
                    <div>
                        <p>Sunday:10am-6pm</p>
                        <p>Monday:10am-8pm</p>
                        <p>Tues-Friday:9am-8pm</p>
                        <p>Saturday:9am-5pm</p>
                    </div>
                </div>
                <div>
                    <h3 style={{ marginBottom: "15px" }}>FOLLOW US</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                        <a href="https://www.instagram.com" target="_blank" ><img src={instaIcon} alt="instagram" /></a >
                        <a href="https://www.facebook.com" target="_blank"><img src={fbIcon} style={{ borderRadius: "90000px", width: "30px", height: "30px" }} alt="facebook" /></a >
                    </div>
                </div>
            </div>
            <p style={{ textAlign: "center", borderTop: "1px solid white", padding: "20px", lineHeight: "30px", color: "white" }}>Copyright © 2023 Haze Salon. All Rights Reserved.</p>
        </div>
    )
}