import React from "react";

import styled from "styled-components";

export default function Header(){
    return (
        <Headerr>
            <p>TrackIt</p>
            <SmallLogo></SmallLogo>
        </Headerr>
    )
}

const Headerr = styled.div`
    position:absolute;
    left:0;
    top:0;
    width: 100vw;
    height: 70px;
    background: #126BA5;
    display: flex;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.15);
    
    
    p{
        font-size:38.982px;
        color:white;
        margin-left: 18px;
    }
`
const SmallLogo = styled.img`
    position: absolute;
    left:306px;
    top: 9px;
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    background: white;
    margin-right: 18px;
`