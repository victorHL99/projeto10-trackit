import { useEffect, useState, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import UsuarioContext from "../../context/UsuarioContext";

import CreateHabitsScreen from "./CreateHabitsScreen";

import Trash from "./../../assets/img/lixeira.png";


export default function MainHabits(){

    const {token} = useContext(UsuarioContext);
    const {setShowCreateHabits,showCreateHabits} = useContext(UsuarioContext);
    const [habits,setHabits] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const URL_GET = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const promise = axios.get(URL_GET, config); 

        promise.then(response => {
            const {data} = response;
            setHabits([...habits, ...data]);
        });

        promise.catch(err => console.log(err.response));
    },[token]);

    
    

    function deleteHabit(id){
        const answer = window.confirm("Deseja realmente excluir esse habito?");
        if(answer){
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const URL_DELETE = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
            const promise = axios.delete(URL_DELETE, config);
            promise.then(response => {
                const {data} = response;
                setHabits(habits.filter(habit => habit.id !== id));
            });
            promise.catch(err => console.log(err.response));
        }
    }
    
    function buildHabits(){
        if(habits.length > 0){
            return(
                <>
                
                <Text1>Meus hábitos</Text1>
                <CreateHabits onClick={()=> {setShowCreateHabits(true)}}>+</CreateHabits>
                {(showCreateHabits === true) ? 
                <CreateHabitsScreen/> : 
                <ContainerLowHabits>
                    {habits.map(habit => {
                        const {name, days, id} = habit;
                        return(
                            
                                <LowHabit key={name + id} name={name} days={days}>
                                    <NameLowHabit>{name}</NameLowHabit>
                                    <DayCreateHabits>
                                        <ButtonDays >D</ButtonDays>
                                        <ButtonDays >S</ButtonDays>
                                        <ButtonDays >T</ButtonDays>
                                        <ButtonDays >Q</ButtonDays>
                                        <ButtonDays >Q</ButtonDays>
                                        <ButtonDays >S</ButtonDays>
                                        <ButtonDays >S</ButtonDays>
                                    </DayCreateHabits>
                                    <Imagetrash onClick={()=> deleteHabit(id)} src={Trash} alt="delete"/> 
                                </LowHabit>
                            
                        )
                    })}
                </ContainerLowHabits>

                }
                </>
                
            )

    } else {
        return (
            <>
            <Text1>Meus hábitos</Text1>
                <CreateHabits onClick={()=> {setShowCreateHabits(true)}}>+</CreateHabits>
                
                {(showCreateHabits === true) ? 
                    <CreateHabitsScreen/> : 
                    <TextHabits>
                    <p>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </p>
            </TextHabits>}
            </>
        )
    }

    }

    return (
        <MainHabitss>
                {buildHabits()}
        </MainHabitss>
    )
}

const MainHabitss = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width:100vw ;
    height: 527px;
    left: 0;
    top:70px;
    background-color: #E5E5E5;
`

const Text1 = styled.div`
        position: absolute;
        width: 148px;
        height: 29px;
        left: 17px;
        top: 28px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;

`
const CreateHabits = styled.div`
    position: absolute;
    left: 317px;
    top:22px;
    width: 40px;
    height: 36px;
    background-color: #52B6FF;
    border-radius: 4.64px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 27px;
    line-height: 34px;
    text-align: center;
    color: #FFFFFF;
`


const TextHabits = styled.div`
    position: absolute;
    width: 338px;
    height: 74px;
    left: 15px;
    top: 74px;
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
const ContainerLowHabits = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 340px;
    height: 425px;
    top: 77px;
    left:17px ;
    overflow-x: hidden;
    overflow-y: scroll;


`

const LowHabit = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 340px;
    height:91px;
    background-color: #FFFFFF;
    border-radius: 4.64px;
    margin-bottom: 10px;

`

const NameLowHabit = styled.div`
    position: relative;
    width: 208px;
    height: 25px;
    left: 15px;
    top: 13px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
`


const ButtonDays = styled.button`
    width: 30px;
    height: 30px;
    left: 200px;
    margin-right: 4px;
    border-radius: 5px;
    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    font-family: 'lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
`

const DayCreateHabits = styled.div`
    position: absolute;
    width: auto;
    height: 30px;
    top: 46px;
    left: 14px;

`

const Imagetrash = styled.img`
    position: relative;
    width: 13px;
    height: 15px;
    top:11px;
    left:94px;


`