import { useEffect,useContext, useState, React } from "react";
import styled from "styled-components"
import * as dayjs from "dayjs";
import * as isLeapYear from "dayjs/plugin/isLeapYear";
import 'dayjs/locale/pt-br';

import UsuarioContext from "../../context/UsuarioContext";
import Loading from "../App/Loading"
import Correct from "./../../assets/img/correct.png";

export default function Main(){

    const {token} = useContext(UsuarioContext);
    const [confirmTasks,setConfirmTasks] = useState(false);

    function DayRequest(){
        if(dayjs().day() === 1){
            return "Segunda";
        } else if( dayjs().day() === 2){
            return "Terça";
        } else if (dayjs().day() === 3){
            return "Quarta";
        } else if (dayjs().day() === 4){
            return "Quinta";
        } else if (dayjs().day() === 5){            
            return "Sexta";
        } else if (dayjs().day() === 6){
            return "Sábado";
        } else if(dayjs().day() === 0){
            return "Domingo";
        }
    }


    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    }
    )

    return (
        <Mainn>
            <Date>
                <Day>{DayRequest()}, {dayjs().format("DD/MM")} </Day>
                <CompletedHabits>Nenhum hábito concluído ainda</CompletedHabits>
            </Date>

            <HabitsContainer>
                <Habit>
                    <HabitName>Ler 1 capítulo de livro</HabitName>
                    <HabitDescription>
                        <CurrentSequence>Sequência Atual: 3 dias</CurrentSequence>
                        <YourRecord>Seu recorde: 5 dias</YourRecord>
                    </HabitDescription>
                    <HabitProgress confirmTasks={confirmTasks} onClick={(e) => setConfirmTasks(state =>!state)}>
                        <img src={Correct} alt="Imagem V de correto"/>
                    </HabitProgress>
                </Habit>
            </HabitsContainer>
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

const Date = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`
const Day = styled.p`
    position: absolute;
    width: 180px;
    height: 29px;
    display: flex;
    align-items: center;
    top: 28px;
    left: 17px;    
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
`


const CompletedHabits = styled.p`
    position: absolute;
    width: 278px;
    height: 22px;
    top: 59px;
    left: 17px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #BABABA;
`

const HabitsContainer = styled.div`
    position: absolute;
    margin-top: 28px;
    top: 107px;
    left: 18px;
    width: 340px;
    height: 340px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: pink;
    overflow-y: auto;
`

const Habit = styled.div`
    position: relative;
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    margin-bottom: 10px;
    border-radius: 5px;

`

const HabitName = styled.p`
    position: absolute;
    width: 208px;
    height: 25px;
    left: 15px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
`

const HabitDescription = styled.div`
    position: absolute;
    width: 150px;
    left: 15px;
    top: 40px;
`
const CurrentSequence = styled.p`
    position: absolute;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;

    color: #666666;
`

const YourRecord = styled.p`
    position: absolute;
    top: 15px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;

    color: #666666;
`

const HabitProgress = styled.div`
    position: absolute;
    width:69px;
    height: 69px;
    left: 258px;
    top: 13px;
    background-color: ${({confirmTasks}) => confirmTasks ? '#8FC549':'#EBEBEB' };
    border: 1px solid #E7E7E7;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

`

