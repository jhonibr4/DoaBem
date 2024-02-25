import styled from "styled-components/native";

export const ScrollView = styled.ScrollView`
    display: flex;
    background-color: #0B0530;
`
export const Main = styled.View`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #0B0530;
    padding-bottom: 40;
`
export const WrapperImageDonation = styled.View`
    margin-top: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 99.5%;
    height: 400;
    background-color: transparent;
    border:5px #c1c1c1 dashed;
    
`
export const TextImageNotFound = styled.Text`
    color: #c1c1c1;
    font-size: 25;
`
export const ButtonSelectPhoto = styled.TouchableOpacity`
    margin-top: 30;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: #6C3DCF;
    width: 50%;
    height: 60;
`
export const TextButtonSelectPhoto = styled.Text`
    color: #FFF;
    font-size: 20;
`
export const WrapperInput = styled.View`
    width: 95%;
    gap: 10;
`
export const TitleRadio = styled.Text`
    margin-top: 10;
    font-size: 20;    
    color: #DBB5E8;
`
export const WrapperDoubleRadio = styled.View`
    margin-top: 5;
    display: flex;
    flex-direction: row;
    width: 98%;
`
export const TextRadio = styled.Text`
    font-size: 20; 
    margin-bottom : 5;
    color: #FFF;
    align-self: center;
`
export const TextEmpty = styled.Text`
    font-size: 20; 
    margin-top : 10;
    color: #FFF;
    align-self: center;
`
export const TextArea = styled.TextInput`
    margin-top: 5;
    display: flex;
    width: 100%;
    height: 200;
 
    border-radius: 5px;
    background-color: #D8CEF5;
    font-size: 20;
    color: #2F0094;

`
export const ButtonCreateDonation = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-self: center;
    margin-top: 20;
    width: 80%;
    height: 60;
    background-color: #6C3DCF;
    border-radius: 15px;
`
export const TextButtonCreateDonation = styled.Text`
    font-size: 25; 
    font-weight: bold;
    align-self: center;
    color: #FFF;
`
