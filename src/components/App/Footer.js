

import { Link } from "react-router-dom";
import styled from "styled-components";

import CircularProgressBar from "./CircularProgressBar";

export default function Footer(){
    return (
        <Footerr>
            <Link to="/habitos">
                <Habitos>
                    <p>Hábitos</p>
                </Habitos>
            </Link>

            <Link to="/hoje">

                <Circle>
                    <p>HOJE</p>
                    <CircularProgressBar/>
                </Circle>

            </Link>

            <Link to="/historico">
                <Historico>
                    <p>Histórico</p>
                </Historico>
            </Link>
        </Footerr>
    )
}

const Footerr = styled.footer`
    position: absolute;
    left:0;
    bottom:0;
    width: 100vw;
    height: 70px;
    background: #FFFFFF;
    display: flex;
`

const Habitos = styled.div`
    position: absolute;
    width: 68px;
    height: 22px;
    left: 36px;
    display: flex;
    cursor: pointer;

    p {
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
        text-decoration: none;
    }
`
const Historico = styled.div`
    position: absolute;
    width: 70px;
    height: 22px;
    left: 265px;
    display: flex;
    cursor: pointer;

    p {
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
        text-decoration: none;
    }
`

const Circle = styled.div`
    position: absolute;
    width: 91px;
    height: 91px;
    left: 142px;
    bottom: 10px;
    cursor: pointer;
    
    p{
        width: 40px;
        height: 22px;
        position: absolute;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976;
        line-height: 22px;
        text-align: center;
        left: 23px;
        bottom: 22px;
        color: #FFFFFF;
    }
`