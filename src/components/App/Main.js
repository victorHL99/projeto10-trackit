import styled from "styled-components"
import Loading from "./Loading"

export default function Main(){
    return (
        <Mainn>
            <Loading/>
        </Mainn>
    )
}

const Mainn = styled.div`
    position: absolute;
    width:100vw ;
    height: 527px;
    left: 0;
    top:70px;
    background-color: #E5E5E5;
`