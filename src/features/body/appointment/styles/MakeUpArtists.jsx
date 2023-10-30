import { useEffect, useState } from "react";
import TimeTable from "./TimeTable/TimeTable";
import { dataRef } from "../../../../../firebase";


export default function MakeUpArtists() {
    const [styler, setStyler] = useState(
        { workingHours: [] }
    )
    const [stylerName, setStylerName] = useState({
        name: 'Ellen',
        fullName: 'EllenGirri'
    });
    useEffect(() => {
        dataRef.ref('MakeUpStylers/' + stylerName.fullName).on('value', (data) => {
            let objectData = (data.val())
            setStyler(objectData)
        })

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
                <option value="Ellen Girri">Ellen Girri</option>
                <option value="Emily Gusto">Emily Gusto</option>
            </select>

            <TimeTable styler={styler} stylerName={stylerName.name} stylerFullName={stylerName.fullName} />

        </div>
    )
}