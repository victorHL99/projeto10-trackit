import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useContext } from "react";

import UsuarioContext from "../../context/UsuarioContext";
import "react-circular-progressbar/dist/styles.css"

export default function CircularProgressBar(){
    const {tasksCompleted, totalTasks} = useContext(UsuarioContext);
    const percentage = tasksCompleted;
    return (
        
        <CircularProgressbar
            value={percentage}
            minValue={0}
            maxValue={totalTasks}
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




