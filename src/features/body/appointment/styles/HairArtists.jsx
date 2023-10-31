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


    let hairStylersWorkingData = {
        "AlexVazen": {
            workingHours: [
                { time: '9:00', isBooked: false },
                { time: '10:00', isBooked: false },
                { time: '11:00', isBooked: false },
                { time: '12:00', isBooked: false },
                { time: '13:00', isBooked: false },
                { time: '14:00', isBooked: false },
                { time: '15:00', isBooked: false },
                { time: '16:00', isBooked: false },
                { time: '17:00', isBooked: false },
                { time: '18:00', isBooked: false },
                { time: '19:00', isBooked: false },
                { time: '20:00', isBooked: false },
            ]
        },
        "EthanCarlos": {
            workingHours: [
                { time: '9:00', isBooked: false },
                { time: '10:00', isBooked: false },
                { time: '11:00', isBooked: false },
                { time: '12:00', isBooked: false },
                { time: '13:00', isBooked: false },
                { time: '14:00', isBooked: false },
                { time: '15:00', isBooked: false },
                { time: '16:00', isBooked: false },
                { time: '17:00', isBooked: false },
                { time: '18:00', isBooked: false },
                { time: '19:00', isBooked: false },
                { time: '20:00', isBooked: false },
            ]
        },
        "SarahMitchell": {
            workingHours: [
                { time: '9:00', isBooked: false },
                { time: '10:00', isBooked: false },
                { time: '11:00', isBooked: false },
                { time: '12:00', isBooked: false },
                { time: '13:00', isBooked: false },
                { time: '14:00', isBooked: false },
                { time: '15:00', isBooked: false },
                { time: '16:00', isBooked: false },
                { time: '17:00', isBooked: false },
                { time: '18:00', isBooked: false },
                { time: '19:00', isBooked: false },
                { time: '20:00', isBooked: false },
            ]
        },
        "JakeVille": {
            workingHours: [
                { time: '9:00', isBooked: false },
                { time: '10:00', isBooked: false },
                { time: '11:00', isBooked: false },
                { time: '12:00', isBooked: false },
                { time: '13:00', isBooked: false },
                { time: '14:00', isBooked: false },
                { time: '15:00', isBooked: false },
                { time: '16:00', isBooked: false },
                { time: '17:00', isBooked: false },
                { time: '18:00', isBooked: false },
                { time: '19:00', isBooked: false },
                { time: '20:00', isBooked: false },
            ]
        },
    };



    useEffect(() => {

        dataRef.ref('HairStylers/' + stylerName.fullName).on('value', (data) => {
            let objectData = (data.val())
            setStyler(objectData)
        })

        //dataRef.ref('HairStylers/').set(data)
    }, [stylerName])
    console.log(styler);

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