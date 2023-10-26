import { useParams } from "react-router-dom";
import Stylists from "./Stylists";
import { useEffect, useState } from "react";
import "../services/services.css";
import { useSelector } from "react-redux";
import { ourTeamList } from "../home/ourteam/OurTeamSlice";



export default function Stylist() {
    const ourTeam = useSelector(ourTeamList);
    const { name } = useParams();
    const [stylerInfo, setStylerInfo] = useState([{
        image: '',
        name: '',
        lastName: '',
        role: '',
        description: ''
    }]);
    let fullName = name.split('-');


    useEffect(() => {
        setStylerInfo(ourTeam.filter(styler => {
            if (styler.name + styler.lastName === fullName.join('')) {
                return styler
            }
        }))

    }, [name])

    return (
        <div>
            <div className="service-container">
                <div className="styling">
                    <img className="stylist-image" src={stylerInfo[0].image} />
                    <div>
                        <h1 style={{ margin: 0 }}>{stylerInfo[0].name} {stylerInfo[0].lastName}</h1>
                        <h5 style={{ margin: 0 }}>{stylerInfo[0].role}</h5>
                        <p>{stylerInfo[0].description}</p>
                    </div>
                </div>
            </div>
            <Stylists />
        </div>
    )
}



