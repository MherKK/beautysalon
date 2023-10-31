import { useState } from "react";
import { dataRef } from "../../../../../../firebase";


export default function TimeButton({ time, index, stylerFullName }) {

    const [book, setBook] = useState(false);
    let admin = 'admin';
    return (
        <div>
            <button onClick={(e) => {
                let updates = {
                    time: time.time,
                    isBooked: !time.isBooked
                }
                setBook(!book)
                dataRef.ref('HairStylers/' + `${stylerFullName}/` + 'workingHours/' + index).update(updates)
                if (admin === 'admin') {

                }
            }}>{time.isBooked === false ? time.time : "Booked"}</button>
            {/* <span className="booked" style={time.isBooked === false ? { display: 'none' } : { display: 'block' }}>booked</span> */}
        </div>
    )
}