import { useState } from "react";


export default function TimeButton({ time }) {

    const [book, setBook] = useState('none');
    let admin = 'admin'
    return (
        <button onClick={() => {
            if (admin === 'admin') {
                setBook('block')
            }
        }}><span className="booked" style={{ display: book }}>booked</span>
            {time}</button>
    )
}