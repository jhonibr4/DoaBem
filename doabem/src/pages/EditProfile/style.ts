import styled from 'styled-components/native';

export const Main = styled.View`
    display: flex;
    align-items: center;
  
    width: 100%;
    height: 100%;
    background-color: #0B0530;
`
export const WrapperRegister = styled.View`
  margin-top: 50;
    width: 85%;
`
export const WrapperTitle = styled.View`
    width: 100%;
`
export const WrapperInput = styled.View`
margin-top: 20;
    gap: 15;
    width: 100%;
`
export const Title = styled.Text`
    font-size: 40; 
    font-weight: bold ;
    color: #FFFF;
`
export const Subtitle = styled.Text`
    font-size: 17; 
    color: #DBB5E8;
`
export const TextButtonRegister = styled.Text`
    font-weight: bold;
    font-size: 25;
    color: #FFF;
`
export const ButtonRegister = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    margin-top: 40;
    width: 80%;
    height: 55;
    background-color: #6C3DCF;
    border-radius: 10px;
`
export const TextButtonBack = styled.Text`
    font-size: 20;
    color: #FFF;
    text-decoration: underline;
    height: 55;
`
export const ButtonBack = styled.TouchableOpacity`

    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    margin-top: 12;
    width: 80%;
    height: 55;
        
    border-radius: 10px;
`