import { useLoaderData, useParams } from "react-router-dom";
import Stylists from "./Stylists";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ourTeamList } from "../home/ourteam/OurTeamSlice";
import "../services/services.css";
import { dataRef } from "../../../firebase";


export default function Stylist() {
    const ourTeam = useSelector(ourTeamList);
    const { name } = useParams();
    const [stylerInfo, setStylerInfo] = useState({});
    let fullName = name.split('-');
    console.log(fullName);
    useEffect(() => {
        dataRef.ref('Stylers/' + fullName.join('')).on('value', (data) => {
            return setStylerInfo(data.val());
        })
    }, [fullName[0]])
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



