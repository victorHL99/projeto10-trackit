import { useEffect } from "react";
import { useContext } from "react";

import Header from "../App/Header";
import Main from "./MainToday";
import Footer from "../App/Footer";
import UsuarioContext from "../../context/UsuarioContext";


export default function Today(){

    const {token} = useContext(UsuarioContext);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    })

    

    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    )
}
