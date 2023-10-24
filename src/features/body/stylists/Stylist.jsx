import { useLoaderData } from "react-router-dom";
import axios from "axios";
import Stylists from "./Stylists";
import "../services/services.css";


export default function Stylist() {
    const stylerData = useLoaderData();
    const styler = (stylerData[0]);



    return (
        <div>
            <div className="service-container">
                <div className="styling">

                    <img className="stylist-image" src={styler.image} />

                    <div>
                        <h1 style={{ margin: 0 }}>{styler.name} {styler.lastName}</h1>
                        <h5 style={{ margin: 0 }}>{styler.role}</h5>
                        <p>{styler.description}</p>
                    </div>

                </div>
            </div>
            <Stylists />
        </div>

    )
}


export const stylistLoader = async ({ params }) => {
    const { id } = params;
    let response = await axios.get("http://localhost:5000/stylists/" + id);
    return response.data;

}


