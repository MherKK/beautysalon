import Time from "./Time"



export default function TimeTable({ styler, stylerName, stylerFullName }) {
    let currDay = new Date();

    return (
        <div className="calendar">
            <h2>{`${stylerName}'s` + " Appointments"}</h2>
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