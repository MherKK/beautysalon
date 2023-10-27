import Time from "./Time"



export default function TimeTable({ styler, workingHours }) {
    let currDay = new Date();

    return (
        <div className="calendar">
            <h2>{styler.name + "'s Appointments"}</h2>
            <h4>{currDay.toDateString()}</h4>
            <div className="time-container">
                {workingHours.map(time => {
                    return <Time key={time} time={time} />
                })}
            </div>
        </div>
    )
}