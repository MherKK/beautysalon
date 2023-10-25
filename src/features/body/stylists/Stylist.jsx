import { useParams } from "react-router-dom";
import Stylists from "./Stylists";
import { dataRef } from "../../../firebase";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ourTeamList } from "../home/ourteam/OurTeamSlice";
import "../services/services.css";

export default function Stylist() {
    const ourTeam = useSelector(ourTeamList);
    const { id } = useParams();
    const [stylerInfo, setStylerInfo] = useState({});

    useEffect(() => {

        ourTeam.map(data => {
            if (data.id == id) {
                setStylerInfo(ourTeam[0])
            }
        })

    }, [])
    console.log(stylerInfo);
    return (
        <div>
            <div className="service-container">
                <div className="styling">

                    <img className="stylist-image" src={stylerInfo.image} />

                    <div>
                        <h1 style={{ margin: 0 }}>{stylerInfo.name} {stylerInfo.lastName}</h1>
                        <h5 style={{ margin: 0 }}>{stylerInfo.role}</h5>
                        <p>{stylerInfo.Description}</p>
                    </div>

                </div>
            </div>
            <Stylists />
        </div>

    )
}




