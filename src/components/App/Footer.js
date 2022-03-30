

import styled from "styled-components";

import CircularProgressBar from "./CircularProgressBar";

export default function Footer(){
    return (
        <Footerr>
            <CircularProgressBar/>

        </Footerr>
    )
}

const Footerr = styled.footer`
    position: absolute;
    left:0;
    bottom:0;
    width: 100vw;
    height: 70px;
    background: yellow

`