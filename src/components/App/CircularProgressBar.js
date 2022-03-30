import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css"

export default function CircularProgressBar(){
    const percentage = 33;
    return (
        
        <CircularProgressbar
            value={percentage}
            background
            backgroundPadding={6}
            styles={buildStyles({
                backgroundColor: "#52B6FF",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
                fontFamily: 'Lexend Deca'
        })}
        />
    )
}




