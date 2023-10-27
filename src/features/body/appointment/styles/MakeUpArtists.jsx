import { useEffect, useState } from "react";
import TimeTable from "./TimeTable/TimeTable";


export default function MakeUpArtists({ makeUpStlylers }) {
    const [styler, setStyler] = useState([{}]);

    useEffect(() => {
        setStyler(makeUpStlylers)
    }, [makeUpStlylers])
    return (
        <div>
            <select onChange={(e) => {

                setStyler(makeUpStlylers.filter((styler) => {
                    if (e.target.value === styler.name + ' ' + styler.lastName) {
                        return styler
                    }
                }))
            }}>
                {
                    makeUpStlylers.map(styler => {
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