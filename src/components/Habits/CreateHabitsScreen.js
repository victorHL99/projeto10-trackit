import React from "react";
import axios from "axios";
import { useContext } from "react";

import UsuarioContext from "../../context/UsuarioContext";

import styled from "styled-components"
import { useEffect } from "react/cjs/react.production.min";



export default function CreateHabitsScreen(){

    const [habitName,setHabitName] = React.useState("");
    const [habitDays,setHabitDays] = React.useState([]);
    const {setShowCreateHabits,token} = useContext(UsuarioContext);
    
    
   /*  useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const URL_GET = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const promise = axios.get(URL_GET, config); // post? (URL, body, config)
        promise.then(response => {
            const {data} = response;
            console.log(data);
        });
        promise.catch(err => console.log(err.response));
        }, [])
    


 */

    function sendHabits(){
        setShowCreateHabits(false)
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        console.log("botão clicado")
        const URL_POST = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const promise = axios.post(URL_POST , {
            name: habitName,
            days: habitDays
    }, config);
    promise.then(console.log("Habitos enviados com sucesso"))
    }
    
    function addDays(day){
        console.log(habitDays);
        setHabitDays([...habitDays, day ]);
        console.log(habitDays)
    }

    console.log(habitDays)

    return(

        <>
        
        <ScreenHabits>
            <InputHabitsName value={habitName} onChange={(e)=>setHabitName(e.target.value)} placeholder="Escreva o Nome do Habito"/>
            <DayCreateHabits>
                <ButtonDays onClick={(e)=> addDays(7)}>D</ButtonDays>
                <ButtonDays onClick={(e)=> addDays(1)}>S</ButtonDays>
                <ButtonDays onClick={(e)=> addDays(2)}>T</ButtonDays>
                <ButtonDays onClick={(e)=> addDays(3)}>Q</ButtonDays>
                <ButtonDays onClick={(e)=> addDays(4)}>Q</ButtonDays>
                <ButtonDays onClick={(e)=> addDays(5)}>S</ButtonDays>
                <ButtonDays onClick={(e)=> addDays(6)}>S</ButtonDays>
            </DayCreateHabits>
            <CancelButton onClick={()=>{setShowCreateHabits(false)}}>Cancelar</CancelButton>
            <SaveButton onClick={sendHabits}>Salvar</SaveButton>
        </ScreenHabits>
        
        <TextHabits>
                    <p>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </p>
        </TextHabits>
        </>

    )
}

const ScreenHabits = styled.div`
    position: absolute;
    width: 340px;
    height: 180px;
    left:17px;
    top: 77px;
    border-radius: 5px;
    background: #FFFFFF;

`

const InputHabitsName = styled.input`
    position: absolute;
    width: 303px;
    height: 45px;
    top: 18px;
    left: 19px;
    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: 'lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color:#666666;
`

const DayCreateHabits = styled.div`
    position: absolute;
    width: auto;
    height: 30px;
    top: 71px;
    left: 19px;


`

const ButtonDays = styled.button`
    width: 30px;
    height: 30px;
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
const CancelButton = styled.div`
    position: absolute;
    width: 69px;
    height: 20px;
    top:137px;
    left:148px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52B6FF;
`
const SaveButton = styled.div`
    position: absolute;
    width: 84px;
    height: 35px;
    top:130px;
    left:240px;
    background-color: #52B6FF;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    border-radius: 4.64px;
`

const TextHabits = styled.div`
    position: absolute;
    width: 338px;
    height: 74px;
    left: 15px;
    top: 286px;
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