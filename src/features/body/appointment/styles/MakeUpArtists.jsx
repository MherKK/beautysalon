import { useEffect, useState } from "react";
import TimeTable from "./TimeTable/TimeTable";
import { dataRef } from "../../../../../firebase";
import { useSelector } from "react-redux";
import { ourTeamList } from "../../home/ourteam/OurTeamSlice";
import { Link } from "react-router-dom";


export default function MakeUpArtists() {

    const ourTeam = useSelector(ourTeamList).filter(i => {
        let role = i.role;
        return role.slice(0, 4) === 'Make'
    })
    let currentDate = new Date().toDateString().split(' ')[0]


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
                            <Link to={'/appointments/MakeUpStylers/' + styler.name + styler.lastName + '/' + currentDate}>{styler.name}'s appointments</Link>
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
//     name: 'Ellen',
//     fullName: 'EllenGirri'
// });


// let makeUpStylersWorkingData = {
//     "EllenGirri": {
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
//     "EmilyGusto": {
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
//     }
// };

// useEffect(() => {
//     dataRef.ref('MakeUpStylers/' + stylerName.fullName).on('value', (data) => {
//         let objectData = (data.val())
//         setStyler(objectData)
//     })
//     //dataRef.ref('MakeUpStylers/').set(makeUpStylersWorkingData)
// }, [stylerName])



// return (
//     <div>
//         <select className="select-styler_appointment" onChange={(e) => {
//             let name = e.target.value;
//             let f = name.split(' ');
//             setStylerName({
//                 name: f[0],
//                 fullName: f.join('')
//             })
//         }}>
//             <option value="Ellen Girri">Ellen Girri</option>
//             <option value="Emily Gusto">Emily Gusto</option>
//         </select>

//         <TimeTable styler={styler} stylerName={stylerName.name} stylerFullName={stylerName.fullName} />

//     </div>
// )