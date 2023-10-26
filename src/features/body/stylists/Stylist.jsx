import { useParams } from "react-router-dom";
import Stylists from "./Stylists";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ourTeamList } from "../home/ourteam/OurTeamSlice";
import "../services/services.css";


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
    let d = stylerInfo[0].description.split('.');


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
                <div id="stylist-container" className="styling">
                    <img id="stylist-image" src={stylerInfo[0].image} />
                    <div>
                        <h1 style={{ margin: 0 }}>{stylerInfo[0].name} {stylerInfo[0].lastName}</h1>
                        <h5 style={{ margin: 0 }}>{stylerInfo[0].role}</h5>
                        {d.map(textLine => {
                            return (
                                <p>{textLine + '.'}</p>

                            )
                        })}
                        <div style={{ marginTop: '40px' }}><a id="insta-link_styler" href={stylerInfo[0].instagram} target="_blank"> VIEW INSTAGRAM PROFILE</a></div>
                    </div>

                </div>

            </div>
            <Stylists />
        </div>
    )
}



