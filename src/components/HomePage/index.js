import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import styled from "styled-components";
import Loading from "../App/Loading";

import Logo from "./../../assets/img/logo.png";
import UsuarioContext from "../../context/UsuarioContext";


export default function HomePage(){
    const context = useContext(UsuarioContext);
    
    
    

    const [email,setEmail] = React.useState("");
    const [senha,setSenha] = React.useState("");
    const [ActiveButton, setActiveButton] = React.useState(false);
    const [LoadingSign,setLoadingSign] = React.useState("Entrar")

    const navigate = useNavigate();
    

    function tryLogin(){

        setLoadingSign(<Loading/>)
        setActiveButton(true);
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
        const promise = axios.post(URL, {
            email: email,
            password: senha
        });

        promise.then(response => {
            const {data} = response;
            console.log(data)
            console.log(data.token);
            context.setToken(data.token)
            console.log(data.image);
            context.setPicture(data.image);

            navigate("/hoje")
        });
        promise.catch(err => {
            console.log(err.response)
            alert("Preencha o Email e a Senha corretamente!")
            setActiveButton(false);
            setLoadingSign("Entrar")
        });
    }

    return (
        <Main>
            <LogoCSS src={Logo} alt="Logo do TrackIt"/>
            <Input placeholder="Email" disabled={ActiveButton} value={email} onChange={(e)=> setEmail(e.target.value)}></Input>
            <Input placeholder="Senha" disabled={ActiveButton} type="password" value={senha} onChange={(e)=> setSenha(e.target.value)}></Input>
            <Button onClick={tryLogin}><p>{LoadingSign}</p></Button>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Main>
    )
}

const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction:column;
    align-items:center;
    padding: 0;
    margin-top:68px;

    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF ;
    }
    
`
    
const LogoCSS = styled.img`
    width: 180px;
    height: 178.83px;
    margin-bottom:32.62px
    
`
const Input = styled.input`
    font-family: 'Lexend Deca';
    width: 303px;
    height: 45px;
    margin-bottom: 6px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    ::placeholder{
        color: #DBDBDB;
    };
`

const Button = styled.button`
    background: #52B6FF  ;
    width: 303px;
    height: 45px;
    border-radius: 4.64px;
    margin-bottom: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    
    cursor: pointer;

    p{
        width: 64px;
        height: 26px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
        text-decoration: none;
    }
`


