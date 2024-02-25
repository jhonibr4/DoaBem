import styled from "styled-components/native";

export const Item = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 95%;
    height: 120;
    margin-top: 20;
    background-color: #6C3DCF;
    border-radius: 10px;
`
export const WrapperSolicitation = styled.View`
    width: 80%;
    height: 100%;
`
export const Title = styled.Text`
    font-size: 20;
    width: 76%;
    font-weight: bold;
    margin-top: 20;
    margin-left: 20;
    color: #fff;
`
export const Solicitation = styled.Text`
    font-size: 15;
    width: 76%;
    line-height: 20;
    margin-top: 5;
    margin-left: 20;
    color: #fff;
`