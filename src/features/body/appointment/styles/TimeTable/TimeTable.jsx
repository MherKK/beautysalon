import Time from "./Time"



export default function TimeTable({ styler }) {
    let currDay = new Date();

    let workingHours = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']
    console.log(workingHours);
    return (
        <div className="calendar">
            <h2>{styler.name + "'s Appointments"}</h2>
            <h4>{currDay.toDateString()}</h4>
            <div className="time-container">
                {workingHours.map((time, index) => {
                    return <Time key={index + styler.name} time={time} />
                })}
            </div>
        </div>
    )
}