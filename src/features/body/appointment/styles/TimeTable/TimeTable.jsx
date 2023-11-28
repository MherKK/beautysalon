import { useParams } from "react-router-dom";
import Time from "./Time"



export default function TimeTable({ styler, stylerFullName }) {
    let currDay = new Date();
    let { day } = useParams();


    let array = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let thisWeek = [];
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let date = new Date().getDate();
    array.map((day, index) => {
        thisWeek.push(new Date(`${year}-${month}-${date + index}`).toDateString())
    })

    let chosenDay = thisWeek.filter(i => i.split(' ')[0] === day);
    return (
        <div className="calendar">

            <h4>{chosenDay}</h4>
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