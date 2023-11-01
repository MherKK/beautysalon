import { dataRef } from "../../../../../../firebase";


export default function TimeButton({ time, index, stylerFullName }) {

    let path = (location.pathname.split('/')[2]);

    let admin = 'admin';
    return (
        <div>
            <button onClick={(e) => {
                let updates = {
                    time: time.time,
                    isBooked: !time.isBooked
                }


                if (admin === 'admin') {
                    dataRef.ref(`${path}/` + `${stylerFullName}/` + 'workingHours/' + index).update(updates)
                }
            }}>{time.isBooked === false ? time.time : "Booked"}</button>

        </div>
    )
}