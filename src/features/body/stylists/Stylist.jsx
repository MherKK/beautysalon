import { useParams } from "react-router-dom";
import Stylists from "./Stylists";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ourTeamList } from "../home/ourteam/OurTeamSlice";
import "../services/services.css";

export default function Stylist() {
    const ourTeam = useSelector(ourTeamList);
    const { name } = useParams();
    const [stylerInfo, setStylerInfo] = useState({});
    let fullName = name.split('-');
    console.log(name);
    useEffect(() => {

        ourTeam.filter(data => {
            if (data.name + data.lastName == fullName.join('')) {
                console.log(data);
                return setStylerInfo(data)
            }
        })

    }, [ourTeam, stylerInfo, setStylerInfo])
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




