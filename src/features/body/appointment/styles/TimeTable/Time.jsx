import TimeButton from "./TimeButton";


export default function Time({ time, index, stylerFullName }) {
    console.log('tieadad', stylerFullName);
    return (
        <div className="time">
            <TimeButton time={time} index={index} stylerFullName={stylerFullName} />
        </div>
    )
}