import styled from "styled-components/native";

export const WrapperItemDonation = styled.View`
display: flex;
    width: 49%;
    height: 40%;
    background-color: #FFF;
    border-radius: 5px;
`
export const ImageItem = styled.Image`
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    width: 100%;
    height: 65%;
`
export const TitleItem = styled.Text`
    font-size: 21;
    color: #6C3DCF;
    font-weight: bold;
    margin-left: 10;
`
export const AmountItem = styled.Text`
    font-size: 15;
    color: #818181;
    margin-left: 10;
`
export const ButtonViewDetails = styled.TouchableOpacity`
    position: absolute;
    bottom: 10;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #6C3DCF;
    width: 95%;
    height: 40;
    border-radius: 5px;
`
export const TextButtonViewDetails = styled.Text`
    display: flex;
    color: #fff;
    font-size: 18;
    font-weight: bold;
`