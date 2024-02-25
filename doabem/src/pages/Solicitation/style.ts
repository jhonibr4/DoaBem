import styled from "styled-components/native"

type TypesButton = 'accept' | 'decline'

interface IButton {
    button: TypesButton
}

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
export const ImageDonation = styled.Image`
    height: 400;
    width: 100%;
`
export const WrapperTypeDonation = styled.View`
    padding: 10px 0px 10px 0px;
    margin-top: 40;
    display: flex;
    align-items: center;
    width: 90%;
    background-color: #fff;
    border-radius: 15px;
    flex-wrap: wrap;
`
export const BoxTypeDonation = styled.View`
    padding: 2px;
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
export const WrapperLineinfo = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
`
export const WrapperAddress = styled.View`
    margin-top: 10;
    display: flex;
    width: 85%;
    gap: 5;
`
export const Title = styled.Text`
    margin-top: 20;
    margin-left: 30;
    display: flex;
    align-self: flex-start;
    font-size: 22;
    color: #DBB5E8;
    `
export const ValueAddress = styled.Text`
    display: flex;
    align-self: flex-start;
    font-size: 18;
    color: #FFF;
    `
export const WrapperDoubleButton = styled.View`
    margin-top: 25;
    display: flex;
    flex-direction: row;
    width: 85%;
    justify-content: space-between;
    
`
export const ButtonResponse = styled.TouchableOpacity<IButton>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 45%;
    height: 60;
    background-color: ${({ button }) => button === 'accept' ? '#6C3DCF' : '#e02'};
    
    `
export const TextButton = styled.Text`
    text-align: center;
    width: 100%;
  
    font-size: 22;
    color:#FFF;
    font-weight: bold;
    border-radius: 10px;
`
export const ViewResponse = styled.View`
    margin-top: 25;
    display: flex;
    flex-direction: row;
    width: 85%;
    
    
    `
export const TextButtonResponse = styled.Text`
    margin-top: 30;
    background-color: #6C3DCF;
    text-align: center;
    width: 90%;
    padding: 20px 0px 20px 0px;
    font-size: 22;
    color:#FFF;
    font-weight: bold;
    border-radius: 10px;
`