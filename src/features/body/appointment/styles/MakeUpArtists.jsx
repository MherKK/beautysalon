import Time from "./TimeTable/Time";



export default function MakeUpArtists({ makeUpStlylers }) {
    let currDay = new Date();
    let workingHours = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']
    return (
        <div>
            <select>
                {
                    makeUpStlylers.map(styler => {
                        return (
                            <option key={styler.name}>{styler.name}</option>
                        )
                    })
                }
            </select>
            {makeUpStlylers.map(styler => {
                return (
                    <div key={styler.lastName} className="calendar">
                        <h2>{styler.name + "'s Appointments"}</h2>
                        <h4>{currDay.toDateString()}</h4>
                        <div className="time-container">
                            {workingHours.map(time => {
                                return <Time key={time} time={time} />
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}