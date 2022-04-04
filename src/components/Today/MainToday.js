import { useEffect,useContext, useState, React } from "react";
import styled from "styled-components"
import dayjs from "dayjs";
import axios from "axios";

import UsuarioContext from "../../context/UsuarioContext";
import Correct from "./../../assets/img/correct.png";

export default function Main(){

    const {token, tasksCompleted, setTasksCompleted,totalTasks,setTotalTasks} = useContext(UsuarioContext);
    const [habits,setHabits] = useState([]);
    
    


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

    
    function RenderToday(){
        setTotalTasks(habits.length);

        useEffect(() => {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            const URL_GET = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
            const promise = axios.get(URL_GET, config); 

            promise.then(response => {
                setTotalTasks(habits.length);
                const {data} = response;
                setHabits([...habits, ...data]);
            });

            promise.catch(err => console.log(err.response));
        },[token]);
    }


    RenderToday();


    function markedHabit(id){
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        
        const URL_POST = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
        const promise = axios.post(URL_POST,{
            done: true
        },config);
        promise.then(response => {
            setTasksCompleted(tasksCompleted + 1);
            const {data} = response;
            setHabits(habits.filter(habit => habit.id !== id));
            buildTasksToday();

        });
        promise.catch(err => console.log(err.response));
    }

    function markOffHabit(id){
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const URL_POST = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
        const promise = axios.post(URL_POST,{
            done: false
        },config);
        promise.then(response => {
            setTasksCompleted(tasksCompleted - 1);
            const {data} = response;
            setHabits(habits.filter(habit => habit.id !== id));
            buildTasksToday();

        });
        promise.catch(err => console.log(err.response));
    }


    function buildTasksToday(){
        if(habits.length >0){

            return(
                <>
                <Date>
                    <Day>{DayRequest()}, {dayjs().format("DD/MM")} </Day>
                    {(tasksCompleted !== 0) ? <CompletedHabits>{tasksCompleted}/{totalTasks} hábitos concluídos</CompletedHabits> : <CompletedHabits>Nenhum hábito concluído ainda</CompletedHabits>}
                </Date>
                <HabitsContainer>
                    {habits.map(habit => {
                        const {id,name, done, currentSequence,highestSequence } = habit;
                        return(
                            <>
                                
                                <Habit>
                                    <HabitName>{name}</HabitName>
                                    <HabitDescription>
                                        <CurrentSequence>Sequência Atual: {currentSequence} dias</CurrentSequence>
                                        <YourRecord>Seu recorde: {highestSequence} dias</YourRecord>
                                    </HabitDescription>
                                    
                                    {done === true ? <HabitProgressGreen onClick={()=> markOffHabit(id)}><img src={Correct} alt="Imagem V de correto"/></HabitProgressGreen> : <HabitProgressGray onClick={()=> markedHabit(id)}><img src={Correct} alt="Imagem V de correto"/></HabitProgressGray> }
                                    
                                </Habit>
                                </>
                                
                                )
                            })}
                    
                    </HabitsContainer>
                </>
            )
        } else {
            return(
                <>
                <Date>
                    <Day>{DayRequest()}, {dayjs().format("DD/MM")} </Day>
                    {(tasksCompleted !== 0) ? <CompletedHabits>{tasksCompleted} dos hábitos concluídos</CompletedHabits> : <CompletedHabits>Nenhum hábito concluído ainda</CompletedHabits>}
                </Date>
                <Text>
                <p>Você não possui tarefas Hoje!</p>
                </Text>
                </>
            )
        }
        
    }

    return (
        <Mainn>
            {buildTasksToday()}
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
    position: relative;
    margin-top: 28px;
    top: 107px;
    left: 18px;
    width: 340px;
    height: 340px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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

const HabitProgressGray = styled.div`
    position: absolute;
    width:69px;
    height: 69px;
    left: 258px;
    top: 13px;
    background-color: #EBEBEB ;
    border: 1px solid #E7E7E7;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;


`
const HabitProgressGreen = styled.div`
    position: absolute;
    width:69px;
    height: 69px;
    left: 258px;
    top: 13px;
    background-color: #8FC549;
    border: 1px solid #E7E7E7;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

`

const Text = styled.div`
    position: absolute;
    width: 338px;
    height: 74px;
    left: 15px;
    top: 100px;
    display: flex;
    justify-content: center;

    p{  
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }

`