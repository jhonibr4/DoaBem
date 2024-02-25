import styled from "styled-components/native";
import {Calendar, LocaleConfig} from 'react-native-calendars';
import LottieView from "lottie-react-native";

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
    justify-content: center;
    padding-bottom: 40;
`
export const TitlePage = styled.Text`
    margin-top: 30;
    margin-left: 20;
    display: flex;
    align-self: flex-start;
    font-size: 32;
    color: #fff;

`
export const WrapperBoxItem = styled.View`
    padding: 0px 5px 0px 5px;
    flex-direction: row;
    margin-top: 20;
    width: 95%;
    height: 120;
    background-color: #b393fa;
    border-radius: 15px;
`
export const WrapperInfo = styled.View`
    margin-left: 10;
    width: 68%;

`

export const NameDonation = styled.Text`
    margin-top: 15;
    color: #FFF;
    font-size: 22;
    font-weight: bold;
    `
export const TextAmount = styled.Text`
    margin-top: 2;
    color: #FFF;
    font-size: 18;
    `
export const ImageDonation = styled.Image`
    display: flex;
    align-self: center;
    height: 110;
    width: 110;
    border-radius: 15px;
    `
export const WrapperTypeDonation = styled.View`
    padding: 10px 0px 10px 0px;
    margin-top: 20;
    display: flex;
    flex-direction: row;
    width: 90%;
    background-color: #fff;
    border-radius: 15px;
`
export const BoxTypeDonation = styled.View`
    align-items: center;
    justify-content: space-between;
    width: 48%;
    height: 120;
`
export const WrapperValueTypeDonation = styled.View`
   display:flex;
   align-items: center;
`

export const TitleBoxType = styled.Text`
    margin-top: 2;
    color: #6C3DCF;
    font-size: 18;
    font-weight: bold;
    `
export const TextType = styled.Text`
    display: flex;
    font-size: 20; 
    color: #6C3DCF;
    align-self: center;
`
export const WrapperCalendar = styled.View`
    width: 90%;
    border-radius: 15px;
`
export const ViewCalendar = styled(Calendar)`
    margin-top:20;
    border-radius: 15px;
`
export const TextButtonSelectHour = styled.Text`
    font-size: 18;
    color: #6C3DCF;
    font-weight: bold;

`
export const ButtonSelectHour = styled.TouchableOpacity`
    margin-top: 30;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 60;
    background-color: #FFF;
`
export const TextHourSelected = styled.Text`
    margin-top: 10;
    display: flex;
    font-size: 20;
    font-weight: bold;
    color: #FFF;
    `
export const ButtonCreateSolicitation = styled.TouchableOpacity`
    margin-top: 30;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 60;
    background-color: #6C3DCF;
`
export const TextButtonCreateSolicitation = styled.Text`
    font-size: 20;
    color: #FFF;
    font-weight: bold;

`
export const TitleRadio = styled.Text`
    margin-top: 10;
    font-size: 20;    
    color: #DBB5E8;
`
export const WrapperAddress = styled.View`
    display: flex;
    align-self: flex-start;
    margin-left: 20;
`
export const Lottie = styled(LottieView)`

   width: 300;
   height: 300;
`