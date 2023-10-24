import { Link } from "react-router-dom"
import "./aboutsalon.css"

export default function () {

    let aboutSalon = 'Discover the epitome of hairstyling excellence at Haze Salon, proudly recognized as one of Armenia’s premier hair salons. With a legacy spanning 40 illustrious years on the iconic 2 Baghramyan Street, our commitment to unparalleled service and exceptional artistry has solidified our place as a trusted destination for all your haircare needs. At Haze Salon, we boast an elite team of highly skilled stylists, color specialists, and beauty consultants who continuously push the boundaries of creativity and innovation.'


    return (
        <div className="about-salon">
            <h1>Welcome to Haze - 2 Baghramyan str, Yerevan</h1>
            <p>{aboutSalon}</p>
            <Link onClick={() => {
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
            }} to='/services'>VIEW OUR SALON SERVICES</Link>
        </div>
    )
}