import TimeButton from "./TimeButton";


export default function Time({ time }) {
    return (
        <div className="time">
            <TimeButton time={time} />
        </div>
    )
}