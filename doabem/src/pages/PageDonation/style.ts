
import { Dimensions } from "react-native"
import styled from "styled-components/native"

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = SLIDER_WIDTH * 0.88

export const Main = styled.SafeAreaView`
    display:flex;
   ;
    width: 100%;
    height: 100%;
    background-color: #FFF;
    padding-bottom: 30;
`
export const WrapperInfos = styled.View`
    display:flex;
    align-items: center;
    width: 100%;
    height: 100%;
`
export const ImageDonation = styled.Image`
    height: 400;
    width: 100%;

`
export const NameDonation = styled.Text`
    align-self: flex-start;

    margin-top: 10;
    margin-left: 20;
    
    font-size: 30;
    font-weight: bold;
    color: #6C3DCF;

`

export const WrapperUserAndLocation = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20;
    gap: 5;
    width: 90%;
`

export const NameInfo = styled.Text`
    display: flex;
    font-size: 19;
    font-weight: bold;
    color: #919191;
`
export const WrapperTripleBox = styled.View`
        display: flex;
        flex-direction: row;
        margin-top: 20;
        height: 60;
        `
export const WrapperBoxInfo = styled.View`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 33%;
`
export const TitleBox = styled.Text`
    display: flex;
    font-size: 17;
    font-weight: bold;
    color: #6C3DCF;
`
export const TextBox = styled.Text`
    display: flex;
    font-size: 17;
    font-weight: bold;
    color: #919191;
`
export const WrapperDescription = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
`
export const TitleDescription = styled.Text`
    display: flex;
    font-size: 20;
    margin-top: 20;
    font-weight: bold;
    align-self: flex-start;
    color: #6C3DCF;
`
export const TextDescription = styled.Text`
    display: flex;
    font-size: 18;
    margin-top: 5;
    text-align: justify;
    align-self: flex-start;
    font-weight: bold;
    color: #919191;
`
export const ButtonInterest = styled.TouchableOpacity`
margin-top: 30;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 60;
    border-radius: 10px;
    background-color: #6C3DCF;
`
export const TextInterest = styled.Text`
    font-size: 20;
    color: #FFF;
`