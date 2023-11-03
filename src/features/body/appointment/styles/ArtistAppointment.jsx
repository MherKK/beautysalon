import { Link, useParams } from "react-router-dom";
import TimeTable from "./TimeTable/TimeTable";
import { useEffect, useState } from "react";
import { dataRef } from "../../../../../firebase";


//hh bedagan dasagarkman dzev



export default function ArtistAppointment() {
    const { name } = useParams();
    let path = (location.pathname.split('/')[2]);
    let { day } = useParams();
    const [styler, setStyler] = useState(
        {
            workingHours: []
        }
    )

    let arrayOfDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let daya = d.getDate();

    useEffect(() => {

        dataRef.ref(path + '/' + name + '/' + day).on('value', (data) => {
            let objectData = (data.val())
            setStyler(objectData)
        })

        //dataRef.ref('HairStylers/').set(data)
    }, [day])


    let makeUpStylersWorkingData = {
        "EllenGirri": {
            "Mon": {
                workingHours: [
                    { time: '9:00', isBooked: false },
                    { time: '10:00', isBooked: false },
                    { time: '11:00', isBooked: false },
                    { time: '12:00', isBooked: false },
                    { time: '13:00', isBooked: false },
                    { time: '14:00', isBooked: false },
                    { time: '15:00', isBooked: false },
                    { time: '16:00', isBooked: false },
                    { time: '17:00', isBooked: false },
                    { time: '18:00', isBooked: false },
                    { time: '19:00', isBooked: false },
                    { time: '20:00', isBooked: false },
                ]
            },
            "Tue": {
                workingHours: [
                    { time: '9:00', isBooked: false },
                    { time: '10:00', isBooked: false },
                    { time: '11:00', isBooked: false },
                    { time: '12:00', isBooked: false },
                    { time: '13:00', isBooked: false },
                    { time: '14:00', isBooked: false },
                    { time: '15:00', isBooked: false },
                    { time: '16:00', isBooked: false },
                    { time: '17:00', isBooked: false },
                    { time: '18:00', isBooked: false },
                    { time: '19:00', isBooked: false },
                    { time: '20:00', isBooked: false },
                ]
            },
            "Wed": {
                workingHours: [
                    { time: '9:00', isBooked: false },
                    { time: '10:00', isBooked: false },
                    { time: '11:00', isBooked: false },
                    { time: '12:00', isBooked: false },
                    { time: '13:00', isBooked: false },
                    { time: '14:00', isBooked: false },
                    { time: '15:00', isBooked: false },
                    { time: '16:00', isBooked: false },
                    { time: '17:00', isBooked: false },
                    { time: '18:00', isBooked: false },
                    { time: '19:00', isBooked: false },
                    { time: '20:00', isBooked: false },
                ]
            },
            "Thu": {
                workingHours: [
                    { time: '9:00', isBooked: false },
                    { time: '10:00', isBooked: false },
                    { time: '11:00', isBooked: false },
                    { time: '12:00', isBooked: false },
                    { time: '13:00', isBooked: false },
                    { time: '14:00', isBooked: false },
                    { time: '15:00', isBooked: false },
                    { time: '16:00', isBooked: false },
                    { time: '17:00', isBooked: false },
                    { time: '18:00', isBooked: false },
                    { time: '19:00', isBooked: false },
                    { time: '20:00', isBooked: false },
                ]
            },
            "Fri": {
                workingHours: [
                    { time: '9:00', isBooked: false },
                    { time: '10:00', isBooked: false },
                    { time: '11:00', isBooked: false },
                    { time: '12:00', isBooked: false },
                    { time: '13:00', isBooked: false },
                    { time: '14:00', isBooked: false },
                    { time: '15:00', isBooked: false },
                    { time: '16:00', isBooked: false },
                    { time: '17:00', isBooked: false },
                    { time: '18:00', isBooked: false },
                    { time: '19:00', isBooked: false },
                    { time: '20:00', isBooked: false },
                ]
            },
            "Sat": {
                workingHours: [
                    { time: '9:00', isBooked: false },
                    { time: '10:00', isBooked: false },
                    { time: '11:00', isBooked: false },
                    { time: '12:00', isBooked: false },
                    { time: '13:00', isBooked: false },
                    { time: '14:00', isBooked: false },
                    { time: '15:00', isBooked: false },
                    { time: '16:00', isBooked: false },
                    { time: '17:00', isBooked: false },
                    { time: '18:00', isBooked: false },
                    { time: '19:00', isBooked: false },
                    { time: '20:00', isBooked: false },
                ]
            },
            "Sun": {
                workingHours: [
                    { time: '9:00', isBooked: false },
                    { time: '10:00', isBooked: false },
                    { time: '11:00', isBooked: false },
                    { time: '12:00', isBooked: false },
                    { time: '13:00', isBooked: false },
                    { time: '14:00', isBooked: false },
                    { time: '15:00', isBooked: false },
                    { time: '16:00', isBooked: false },
                    { time: '17:00', isBooked: false },
                    { time: '18:00', isBooked: false },
                    { time: '19:00', isBooked: false },
                    { time: '20:00', isBooked: false },
                ]
            }
        },
        "EmilyGusto": {
            "Mon": {
                workingHours: [
                    { time: '9:00', isBooked: false },
                    { time: '10:00', isBooked: false },
                    { time: '11:00', isBooked: false },
                    { time: '12:00', isBooked: false },
                    { time: '13:00', isBooked: false },
                    { time: '14:00', isBooked: false },
                    { time: '15:00', isBooked: false },
                    { time: '16:00', isBooked: false },
                    { time: '17:00', isBooked: false },
                    { time: '18:00', isBooked: false },
                    { time: '19:00', isBooked: false },
                    { time: '20:00', isBooked: false },
                ]
            },
            "Tue": {
                workingHours: [
                    { time: '9:00', isBooked: false },
                    { time: '10:00', isBooked: false },
                    { time: '11:00', isBooked: false },
                    { time: '12:00', isBooked: false },
                    { time: '13:00', isBooked: false },
                    { time: '14:00', isBooked: false },
                    { time: '15:00', isBooked: false },
                    { time: '16:00', isBooked: false },
                    { time: '17:00', isBooked: false },
                    { time: '18:00', isBooked: false },
                    { time: '19:00', isBooked: false },
                    { time: '20:00', isBooked: false },
                ]
            },
            "Wed": {
                workingHours: [
                    { time: '9:00', isBooked: false },
                    { time: '10:00', isBooked: false },
                    { time: '11:00', isBooked: false },
                    { time: '12:00', isBooked: false },
                    { time: '13:00', isBooked: false },
                    { time: '14:00', isBooked: false },
                    { time: '15:00', isBooked: false },
                    { time: '16:00', isBooked: false },
                    { time: '17:00', isBooked: false },
                    { time: '18:00', isBooked: false },
                    { time: '19:00', isBooked: false },
                    { time: '20:00', isBooked: false },
                ]
            },
            "Thu": {
                workingHours: [
                    { time: '9:00', isBooked: false },
                    { time: '10:00', isBooked: false },
                    { time: '11:00', isBooked: false },
                    { time: '12:00', isBooked: false },
                    { time: '13:00', isBooked: false },
                    { time: '14:00', isBooked: false },
                    { time: '15:00', isBooked: false },
                    { time: '16:00', isBooked: false },
                    { time: '17:00', isBooked: false },
                    { time: '18:00', isBooked: false },
                    { time: '19:00', isBooked: false },
                    { time: '20:00', isBooked: false },
                ]
            },
            "Fri": {
                workingHours: [
                    { time: '9:00', isBooked: false },
                    { time: '10:00', isBooked: false },
                    { time: '11:00', isBooked: false },
                    { time: '12:00', isBooked: false },
                    { time: '13:00', isBooked: false },
                    { time: '14:00', isBooked: false },
                    { time: '15:00', isBooked: false },
                    { time: '16:00', isBooked: false },
                    { time: '17:00', isBooked: false },
                    { time: '18:00', isBooked: false },
                    { time: '19:00', isBooked: false },
                    { time: '20:00', isBooked: false },
                ]
            },
            "Sat": {
                workingHours: [
                    { time: '9:00', isBooked: false },
                    { time: '10:00', isBooked: false },
                    { time: '11:00', isBooked: false },
                    { time: '12:00', isBooked: false },
                    { time: '13:00', isBooked: false },
                    { time: '14:00', isBooked: false },
                    { time: '15:00', isBooked: false },
                    { time: '16:00', isBooked: false },
                    { time: '17:00', isBooked: false },
                    { time: '18:00', isBooked: false },
                    { time: '19:00', isBooked: false },
                    { time: '20:00', isBooked: false },
                ]
            },
            "Sun": {
                workingHours: [
                    { time: '9:00', isBooked: false },
                    { time: '10:00', isBooked: false },
                    { time: '11:00', isBooked: false },
                    { time: '12:00', isBooked: false },
                    { time: '13:00', isBooked: false },
                    { time: '14:00', isBooked: false },
                    { time: '15:00', isBooked: false },
                    { time: '16:00', isBooked: false },
                    { time: '17:00', isBooked: false },
                    { time: '18:00', isBooked: false },
                    { time: '19:00', isBooked: false },
                    { time: '20:00', isBooked: false },
                ]
            }
        }
    };



    // useEffect(() => {
    //     dataRef.ref('MakeUpStylers').set(makeUpStylersWorkingData)
    // }, [])




    return (
        <div>

            <h2>{`${name}'s` + " Appointments"}</h2>

            <div className="appointment-days">{arrayOfDays.map((days, i) => {

                let date = new Date(`${year}-${month}-${daya + i}`);
                let currentDate = date.toDateString().split(' ')[0];

                return <Link
                    style={day === currentDate ? { fontWeight: '800', textDecoration: "underline", textUnderlineOffset: '5px' } : {}}
                    to={'/appointments/' + `${path}/` + name + '/' + currentDate} key={i} >{currentDate}</Link>
            })}
            </div>
            <TimeTable styler={styler} stylerFullName={name} />

        </div>
    )
}