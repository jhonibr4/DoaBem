import LottieView from "lottie-react-native"
import styled from "styled-components/native"

export const Main = styled.View`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #0B0530;
`
export const Title = styled.Text`
    color: #FFF;
    font-size: 25;
    font-weight: bold;
    margin-top: 20;
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
    background-color: #FFF;
    border-radius:60px ;
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