import { useEffect, useState } from "react";
import Time from "./TimeTable/Time";
import TimeTable from "./TimeTable/TimeTable";



export default function HairArtists({ hairStylers }) {

    const [styler, setStyler] = useState([{}]);

    useEffect(() => {
        setStyler(hairStylers)
    }, [hairStylers])
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

            <TimeTable styler={styler[0]} />

        </div>
    )
}