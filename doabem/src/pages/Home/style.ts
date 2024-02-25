import styled from 'styled-components/native';

export const Main = styled.View`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #0B0530;
`
export const WrapperTop = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 85%;
    height: 15%;
`
export const Logo = styled.Text`
    font-size: 20;
    font-weight: bold;
    color: #FFF;
`
export const HelloText = styled.Text`
    font-size: 20;
    color: #FFF;
`
export const WrapperBoxInfo = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 85%;
    height: 15%;
    background-color: #FFF;
    border-radius: 20px;
    `
export const WrapperButtons = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    margin-top: 30;
    width: 85%;
    height: 45%;
`
export const ButtonLogout = styled.TouchableOpacity`
    margin-top: 40;
    align-items: center;
    justify-content: center;
    justify-self: flex-end;
    width: 30%;
    height: 45;
    background-color: #6C3DCF;
    border-radius: 15px;
`
export const TextButtonLogout = styled.Text`
    font-weight: bold;
    font-size: 25;
    color: #FFF;
`