import Countdown from "../islands/Countdown.tsx";

export default function Page() {
    const date = new Date();
    date.setSeconds(date.getSeconds() + 15);
    return (
        <p>Here it comes!: <Countdown target={date.toISOString()}/></p>
    )
}