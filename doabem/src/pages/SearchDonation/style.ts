
import styled from "styled-components/native";
import LottieView from 'lottie-react-native';
import SelectDropdown from 'react-native-select-dropdown'

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
    width: 90%;
    gap: 10;
`
export const WrapperSolicitation = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    width: 96%;
    height: 100%;
`
export const WrapperAnimation = styled.View`
    display: flex;
    align-items: center;

    width: 96%;
    height: 100%;

`
export const Lottie = styled(LottieView)`
    align-self: center;
    width: 250;
    height: 250;
    margin-top: 100;
`
export const TextNotFound = styled.Text`
    text-align: center;
    margin-top: 15;
    color: #FFF;
    font-size: 24;
    font-weight: bold;
`
export const SelectDropdownItem = styled(SelectDropdown)`
    width: 100%;
`
