import { useParams } from "react-router-dom";
import Stylists from "./Stylists";
import "../services/services.css";
import { dataRef } from "../../../firebase";
import { useEffect, useState } from "react";


export default function Stylist() {

    const { id } = useParams();
    const [stylerInfo, setStylerInfo] = useState({});

    useEffect(() => {
        dataRef.ref().child('Stylers').on('value', data => {
            const getData = Object.values(data.val());
            getData.map(data => {
                if (data.id == id) {
                    setStylerInfo(getData[0])
                }
            })
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
                        <p>{stylerInfo.description}</p>
                    </div>

                </div>
            </div>
            <Stylists />
        </div>

    )
}




