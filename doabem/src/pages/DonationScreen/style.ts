import styled from "styled-components/native";

export const Main = styled.View`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #0B0530;
`
export const WrapperRegister = styled.View`
    margin-top: 60;
    width: 85%;

`
export const Title = styled.Text`
    color: #FFF;
    font-size: 30;
    font-weight: bold;
    margin-bottom: 10;
`
export const Subtitle = styled.Text`
    font-size: 20;    
    color: #DBB5E8;
    margin-bottom: 30;
`
export const WrapperDonation = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 10;
    width: 96%;
    height: 100%;
`
export const ButtonAddAddress = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 40;
    right: 20;
    width: 80;
    height: 80;
    background-color: #6f00ee;
    border-radius:60px ;
`