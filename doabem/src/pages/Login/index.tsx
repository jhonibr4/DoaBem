import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WrapperLogin, WrapperInput, Main, Subtitle, Title, ButtonForgetPassword, TextButton, WrapperButtonLogin, TextButtonForgetPassword, ButtonLogin } from './style'
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import Input from '../../components/Input';
import api from '../../service/api';


type RootStackParamList = {
  Register: undefined
  Home: undefined
}

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState<string>('');
  const handleChangeEmail = (inputText: string) => setEmail(inputText)
  const handleChangePassword = (inputText: string) => setPassword(inputText)

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  async function login() {
    const data = { email, password }

    const response = await api.post('login', data).then(res => {
      navigation.navigate('Home')
      const info = JSON.stringify(res.data)
      AsyncStorage.setItem('data', info)
      console.log(info)
    }).catch(err => {
      console.log(err)
    })

  }

  return (
    <Main>
      <WrapperLogin>
        <Title>Login</Title>
        <Subtitle>Faça login agora em sua conta</Subtitle>
        <WrapperInput>
          <Input typeText={false} type='complete' title='E-mail' value={email} onChangeText={handleChangeEmail}></Input>
          <Input typeText={true} type='complete' title='Senha' value={password} onChangeText={handleChangePassword}></Input>
        </WrapperInput>
        <ButtonForgetPassword>
          <TextButtonForgetPassword>Esqueceu sua senha ?</TextButtonForgetPassword>
        </ButtonForgetPassword>
      </WrapperLogin>
      <WrapperButtonLogin>
        <ButtonLogin onPress={login} button='login' >
          <TextButton button='login'>Entrar</TextButton>
        </ButtonLogin>
        <ButtonLogin onPress={() => navigation.navigate('Register')} button='register'>
          <TextButton button='register'>Cadastrar-se</TextButton>
        </ButtonLogin>
      </WrapperButtonLogin>
    </Main>
  );
}

