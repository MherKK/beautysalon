import { useParams } from "react-router-dom";
import { dataRef } from "../../../../../../firebase";
import { useState } from "react";


export default function TimeButton({ time, index, stylerFullName }) {

    let path = (location.pathname.split('/')[2]);
    let { day } = useParams();
    let admin = 'admin';

    let updates = {
        time: time.time,
        isBooked: false
    }
    const [booked, setBooked] = useState(updates);

    return (
        <div>
            <button onClick={(e) => {

                setBooked(
                    {
                        time: time.time,
                        isBooked: true
                    }
                )
                console.log(time.isBooked);
                if (admin === 'admin') {
                    dataRef.ref(`${path}/` + `${stylerFullName}/` + `${day}/` + 'workingHours/' + index).update(booked)
                }
            }}>{time.isBooked === false ? time.time : "Booked"}</button>

        </div>
    )
}