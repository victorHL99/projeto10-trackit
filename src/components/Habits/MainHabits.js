import styled from "styled-components";

export default function MainHabits(){
    return (
        <MainHabitss>
                <Text1>Meus hábitos</Text1>
                <CreateHabits>+</CreateHabits>
                <TextHabits>
                    <p>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </p>
                </TextHabits>
        </MainHabitss>
    )
}

const MainHabitss = styled.div`
    position: absolute;
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