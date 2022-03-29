import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from "./../../assets/img/logo.png";


export default function HomePage(){
    return (
        <Main>
            <LogoCSS src={Logo} alt="Logo do TrackIt"/>
            <Input placeholder="Email"></Input>
            <Input placeholder="Senha"></Input>
            <Button>Entrar</Button>
            <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>


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
    
`
    
const LogoCSS = styled.img`
    width: 180px;
    height: 178.83px;
    margin-bottom:32.62px
    
`
const Input = styled.input`
    width: 303px;
    height: 45px;
    margin-bottom: 6px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    cursor: pointer;
`

const Button = styled.button`
    width: 303px;
    height: 45px;
    border-radius: 4.64px;
    margin-bottom: 25px;
    cursor: pointer;
`


