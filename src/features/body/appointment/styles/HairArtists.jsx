import { useEffect, useState } from "react";
import TimeTable from "./TimeTable/TimeTable";
import { dataRef } from "../../../../../firebase";



export default function HairArtists() {

    const [styler, setStyler] = useState(
        { workingHours: [] }
    )
    const [stylerName, setStylerName] = useState({
        name: 'Alex',
        fullName: 'AlexVazen'
    });






    useEffect(() => {

        dataRef.ref('HairStylers/' + stylerName.fullName).on('value', (data) => {
            let objectData = (data.val())
            setStyler(objectData)
        })

        // dataRef.ref('HairStylers/AlexVazen/workingHours').push(array)
    }, [stylerName])


    return (
        <div>
            <select className="select-styler_appointment" onChange={(e) => {
                let name = e.target.value;
                let f = name.split(' ');
                setStylerName({
                    name: f[0],
                    fullName: f.join('')
                })
            }}>
                <option value="Alex Vazen">Alex Vazen</option>
                <option value="Ethan Carlos">Ethan Carlos</option>
                <option value="Sarah Mitchell">Sarah Mitchell</option>
                <option value="Jake Ville">Jake Ville</option>
            </select>

            <TimeTable styler={styler} stylerName={stylerName.name} stylerFullName={stylerName.fullName} />

        </div>
    )
}