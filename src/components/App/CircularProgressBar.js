import { CircularProgressbar } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css"

export default function CircularProgressBar(){
    const percentage = 33;
    return (
        
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
    )
}



