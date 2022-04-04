import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../HomePage";
import Register from "../Register";
import Habits from "../Habits";
import Today from "../Today";
import Historic from "../Historic";

import UsuarioContext from "../../context/UsuarioContext";

export default function App(){
    const [token, setToken] = React.useState("")
    const [picture, setPicture] = React.useState("")
    const [showCreateHabits, setShowCreateHabits] = React.useState(false);

    return (
        <UsuarioContext.Provider value={{token,setToken,picture,setPicture,showCreateHabits,setShowCreateHabits}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/cadastro" element={<Register/>}/>
                    <Route path="/habitos" element={<Habits/>}/>
                    <Route path="/hoje" element={<Today/>}/>
                    <Route path="/historico" element={<Historic/>}/>
                </Routes>
            </BrowserRouter>
        </UsuarioContext.Provider>
    )
}
