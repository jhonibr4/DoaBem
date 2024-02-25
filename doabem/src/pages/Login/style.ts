import styled from 'styled-components/native';

interface IButton {
    button: string
}

export const Main = styled.View`
    display:flex;
    width: 100%;
    height: 100%;
    background-color: #0B0530;
    justify-content: center;
    align-items: center;
    gap:60;

`
export const WrapperLogin = styled.View`
    margin-top: 40;
    display:flex;
    width: 90%;
    justify-content: center;
`
export const Title = styled.Text`
    font-size: 40;    
    color: #FFFF;
`
export const Subtitle = styled.Text`
    font-size: 18;    
    color: #DBB5E8;
    margin-bottom: 30;
`
export const WrapperInput = styled.View`
    gap: 20;
`
export const ButtonForgetPassword = styled.TouchableOpacity`
    margin-top: 15;
    align-self: flex-end;
    width: 55%;
`
export const TextButtonForgetPassword = styled.Text`
    font-size: 20;
    color: #BA8DCA;
`
export const WrapperButtonLogin = styled.View`
    gap: 20;
    width: 70%;
`
export const TextButton = styled.Text<IButton>`
    font-size: 30;
    font-weight: bold;
    color: ${({ button }) => button === 'login' ?'#EDE8FF' : '#6C3DCF' };
`
export const ButtonLogin = styled.TouchableOpacity<IButton>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ button }) => button === 'login' ? '#6C3DCF' : '#EDE8FF'  };
    width: 100%;
    height: 50;
    border-radius: 5px;
`