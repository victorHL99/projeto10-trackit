import styled from "styled-components"

export default function MainHistoric(){
    return (
        <MainHistoricc>
            <History>
                <p>Histórico</p>
            </History>
            <Text>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Text>
        </MainHistoricc>
    )
}

const MainHistoricc = styled.div`
    position: absolute;
    width:100vw ;
    height: 527px;
    left: 0;
    top:70px;
    background-color: #E5E5E5;

`
const History = styled.div`
    position: absolute;
    top:28px;
    left: 17px;
    width: 100px;
    height: 29px;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }

`
const Text = styled.div`
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