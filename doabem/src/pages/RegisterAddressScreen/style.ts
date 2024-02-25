import styled from 'styled-components/native';

export const ScrollView = styled.ScrollView`
    display: flex;
    background-color: #0B0530;
`
export const Main = styled.View`
    display:flex;
    width: 100%;
    height: 100%;
    background-color: #0B0530;
    align-items: center;
    padding-bottom: 40;
`
export const WrapperRegister = styled.View`
    margin-top: 60;
    width: 85%;
    gap: 10;
`
export const Title = styled.Text`
    color: #FFF;
    font-size: 30;
    font-weight: bold;
    margin-bottom: 40;
`
export const WrapperDoubleInput = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`
export const ButtonRegisterAddress = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30;
    width: 60%;
    height: 60;
    background-color: #6C3DCF;
    border-radius: 5px;
`
export const TextButtonRegisterAddress = styled.Text`
    color: #FFF;
    font-size: 25;
    font-weight: bold;
`