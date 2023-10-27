import { useEffect, useState } from "react";
import Time from "./TimeTable/Time";
import TimeTable from "./TimeTable/TimeTable";



export default function HairArtists({ hairStylers }) {

    const [styler, setStyler] = useState([{}]);
    let workingHours = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']
    useEffect(() => {
        setStyler(hairStylers)
    }, [hairStylers])
    console.log('f', styler);
    return (
        <div>
            <select onChange={(e) => {

                setStyler(hairStylers.filter((styler) => {
                    if (e.target.value === styler.name + ' ' + styler.lastName) {
                        return styler
                    }

                }))
            }}>
                {
                    hairStylers.map(styler => {
                        return (
                            <option value={styler.name + ' ' + styler.lastName} key={styler.name}>{styler.name + ' ' + styler.lastName}</option>
                        )
                    })
                }
            </select>
            <TimeTable styler={styler[0]} workingHours={workingHours} />
        </div>
    )
}