import { useEffect, useState } from "react";
import TimeTable from "./TimeTable/TimeTable";
import { dataRef } from "../../../../../firebase";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ourTeamList } from "../../home/ourteam/OurTeamSlice";
import "./styler.appointment.css"



export default function HairArtists() {

    const ourTeam = useSelector(ourTeamList).filter(i => {
        let role = i.role;
        return role.slice(0, 4) === 'Hair'
    })
    let currentDate = date.toDateString().split(' ')[0]


    return (
        <div className="stylers-appointment_container">
            {ourTeam.map(styler => {
                return (
                    <div className="styler-appointment_container" key={styler.id}>
                        <div>
                            <img src={styler.image} />
                        </div>
                        <div>
                            <h3>{styler.name + " " + styler.lastName}</h3>
                            <h5>{styler.role}</h5>
                            <Link to={'/appointments/HairStylers/' + styler.name + styler.lastName + currentDate}>{styler.name}'s appointments</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}








// const [styler, setStyler] = useState(
//     { workingHours: [] }
// )
// const [stylerName, setStylerName] = useState({
//     name: 'Alex',
//     fullName: 'AlexVazen'
// });


// let hairStylersWorkingData = {
//     "AlexVazen": {
//         workingHours: [
//             { time: '9:00', isBooked: false },
//             { time: '10:00', isBooked: false },
//             { time: '11:00', isBooked: false },
//             { time: '12:00', isBooked: false },
//             { time: '13:00', isBooked: false },
//             { time: '14:00', isBooked: false },
//             { time: '15:00', isBooked: false },
//             { time: '16:00', isBooked: false },
//             { time: '17:00', isBooked: false },
//             { time: '18:00', isBooked: false },
//             { time: '19:00', isBooked: false },
//             { time: '20:00', isBooked: false },
//         ]
//     },
//     "EthanCarlos": {
//         workingHours: [
//             { time: '9:00', isBooked: false },
//             { time: '10:00', isBooked: false },
//             { time: '11:00', isBooked: false },
//             { time: '12:00', isBooked: false },
//             { time: '13:00', isBooked: false },
//             { time: '14:00', isBooked: false },
//             { time: '15:00', isBooked: false },
//             { time: '16:00', isBooked: false },
//             { time: '17:00', isBooked: false },
//             { time: '18:00', isBooked: false },
//             { time: '19:00', isBooked: false },
//             { time: '20:00', isBooked: false },
//         ]
//     },
//     "SarahMitchell": {
//         workingHours: [
//             { time: '9:00', isBooked: false },
//             { time: '10:00', isBooked: false },
//             { time: '11:00', isBooked: false },
//             { time: '12:00', isBooked: false },
//             { time: '13:00', isBooked: false },
//             { time: '14:00', isBooked: false },
//             { time: '15:00', isBooked: false },
//             { time: '16:00', isBooked: false },
//             { time: '17:00', isBooked: false },
//             { time: '18:00', isBooked: false },
//             { time: '19:00', isBooked: false },
//             { time: '20:00', isBooked: false },
//         ]
//     },
//     "JakeVille": {
//         workingHours: [
//             { time: '9:00', isBooked: false },
//             { time: '10:00', isBooked: false },
//             { time: '11:00', isBooked: false },
//             { time: '12:00', isBooked: false },
//             { time: '13:00', isBooked: false },
//             { time: '14:00', isBooked: false },
//             { time: '15:00', isBooked: false },
//             { time: '16:00', isBooked: false },
//             { time: '17:00', isBooked: false },
//             { time: '18:00', isBooked: false },
//             { time: '19:00', isBooked: false },
//             { time: '20:00', isBooked: false },
//         ]
//     },
// };



// useEffect(() => {

//     dataRef.ref('HairStylers/' + stylerName.fullName).on('value', (data) => {
//         let objectData = (data.val())
//         setStyler(objectData)
//     })

//     //dataRef.ref('HairStylers/').set(data)
// }, [stylerName])

// let arrayOfDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
// let d = new Date();
// let year = d.getFullYear();
// let month = d.getMonth() + 1;
// let day = d.getDate();






// <select className="select-styler_appointment" onChange={(e) => {
//                 let name = e.target.value;
//                 let f = name.split(' ');
//                 setStylerName({
//                     name: f[0],
//                     fullName: f.join('')
//                 })
//                 location.pathname = '/appointments/HairStylers'
//             }}>
//                 <option value="Alex Vazen">Alex Vazen</option>
//                 <option value="Ethan Carlos">Ethan Carlos</option>
//                 <option value="Sarah Mitchell">Sarah Mitchell</option>
//                 <option value="Jake Ville">Jake Ville</option>
//             </select>
//             <h2>{`${stylerName.name}'s` + " Appointments"}</h2>

//             <div className="appointment-days">{arrayOfDays.map((days, i) => {

//                 let date = new Date(`${year}-${month}-${day + i}`);
//                 let currentDate = date.toDateString().split(' ')[0]
//                 return <Link to={'/appointments/HairStylers/' + stylerName.fullName + '/' + currentDate} key={days} >{currentDate}</Link>
//             })}
//             </div>

//             <TimeTable styler={styler} stylerFullName={stylerName.fullName} />