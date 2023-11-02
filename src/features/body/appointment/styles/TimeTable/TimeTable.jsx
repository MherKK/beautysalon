import { useParams } from "react-router-dom";
import Time from "./Time"



export default function TimeTable({ styler, stylerFullName }) {
    let currDay = new Date();
    let { day } = useParams();

    return (
        <div className="calendar">

            <h4>{currDay.toDateString()}</h4>
            <div className="time-container">
                {styler.workingHours.map((time, index) => {
                    return <Time
                        key={index}
                        time={time} index={index} stylerFullName={stylerFullName} />
                })}
            </div>
        </div>
    )
}