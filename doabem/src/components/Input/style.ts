import styled from 'styled-components/native';

interface IType {
    type: string
}

export  const Main = styled.View <IType>`
    width: ${({ type }) => type === 'complete' ? '100%' : '47%'};
`
export const TitleInput = styled.Text `
    margin-bottom: 15;
    font-size: 20;    
    color: #DBB5E8;
`
export const InputLogin = styled.TextInput`
    display: flex;
    width: 100%;
    height: 60;
 
    border-radius: 5px;
    background-color: #D8CEF5;
    font-size: 20;
    color: #2F0094;
`