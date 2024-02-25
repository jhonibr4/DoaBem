import React, { useState } from 'react'
import { ButtonBack, ButtonRegister, Lottie, Main, Subtitle, TextButtonBack, TextButtonRegister, Title, WrapperInput, WrapperRegister, WrapperTitle } from './style'
import Input from '../../components/Input'
import { useNavigation } from '@react-navigation/core';
import api from '../../service/api'
import LottieView from 'lottie-react-native';
import Sucess from '../../animation/sucess.json'


export default function Register() {

  const navigation = useNavigation();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCPF] = useState('');
  const [phone, setPhone] = useState('');
  const [animationStart, setAnimationStart] = useState(false)

  const handleChangeName = (inputText: string) => setName(inputText)
  const handleChangeEmail = (inputText: string) => setEmail(inputText)
  const handleChangePassword = (inputText: string) => setPassword(inputText)
  const handleChangeCPF = (inputText: string) => setCPF(inputText)
  const handleChangePhone = (inputText: string) => setPhone(inputText)

  async function createRegister() {
    const data = { name, email, password, cpf, phone }
    try {
      const response = await api.post('users', data)
      console.log(response.data)
      setAnimationStart(true)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {animationStart === false ?
        <Main>
          <WrapperRegister>
            <WrapperTitle>
              <Title>Cadastro</Title>
              <Subtitle>Aqueça corações, cadastre-se já!</Subtitle>
            </WrapperTitle>
            <WrapperInput>
              <Input typeText={false} type="complete" title='Nome' value={name} onChangeText={handleChangeName} />
              <Input typeText={false} type="complete" title='E-mail' value={email} onChangeText={handleChangeEmail} />
              <Input typeText={true} type="complete" title='Senha' value={password} onChangeText={handleChangePassword} />
              <Input typeText={false} type="complete" title='CPF/CNPJ' value={cpf} onChangeText={handleChangeCPF} />
              <Input typeText={false} type="complete" title='Telefone' value={phone} onChangeText={handleChangePhone} />
            </WrapperInput>
            <ButtonRegister onPress={createRegister}>
              <TextButtonRegister >Cadastrar</TextButtonRegister>
            </ButtonRegister>
            <ButtonBack onPress={() => navigation.goBack()}>
              <TextButtonBack>Já tenho uma conta</TextButtonBack>
            </ButtonBack>
          </WrapperRegister>
        </Main>
        :
        <Main>
          <Lottie
            source={Sucess}
            autoPlay
            loop={false}
            onAnimationFinish={() => navigation.navigate('Login')}
          />
        </Main>
      }

    </>

  )
}