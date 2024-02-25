import React, { useEffect, useState } from 'react'
import { ButtonBack, ButtonRegister, Main, Subtitle, TextButtonBack, TextButtonRegister, Title, WrapperInput, WrapperRegister, WrapperTitle } from './style'
import Input from '../../components/Input'
import { useNavigation } from '@react-navigation/core';
import api from '../../service/api'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditProfile() {

  const navigation = useNavigation();

  interface IItem {
    id_users: string
    name: string
    email: string
    password: string
    cpf: string
    phone: string
  }


  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCPF] = useState('');
  const [phone, setPhone] = useState('');
  const [id_users, setIdUsers] = useState('');
  const [data, setData] = useState<IItem>([]);

  async function getItems() {
    const value: string | null = await AsyncStorage.getItem('data')
    const data = JSON.parse(value)
    setName(data.name)
    setEmail(data.email)
    setPassword(data.password)
    setCPF(data.cpf)
    setPhone(data.phone)
    setIdUsers(data.id_users)

  }
  useEffect(() => {
    getItems()
  }, [])

  const handleChangeName = (inputText: string) => setName(inputText)
  const handleChangePassword = (inputText: string) => setPassword(inputText)
  const handleChangeCPF = (inputText: string) => setCPF(inputText)
  const handleChangePhone = (inputText: string) => setPhone(inputText)

  async function editRegister() {
    const infos = { name, email, password, cpf, phone }
    console.log(infos)
    try {
      const response = await api.put('users', infos, {
        headers: {
          Authorization: id_users
        }
      })
      navigation.navigate('Home')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Main>
      <WrapperRegister>
        <WrapperTitle>
          <Title>Editar Cadastro</Title>
        </WrapperTitle>
        <WrapperInput>
          <Input typeText={false} type="complete" title='Nome' value={name} onChangeText={handleChangeName} />
          <Input typeText={true} type="complete" title='Senha' value={password} onChangeText={handleChangePassword} />
          <Input typeText={true} type="complete" title='Confirmar Senha' value={password} onChangeText={handleChangePassword} />
          <Input typeText={false} type="complete" title='CPF/CNPJ' value={cpf} onChangeText={handleChangeCPF} />
          <Input typeText={false} type="complete" title='Telefone' value={phone} onChangeText={handleChangePhone} />
        </WrapperInput>
        <ButtonRegister onPress={editRegister}>
          <TextButtonRegister>Alterar</TextButtonRegister>
        </ButtonRegister>


      </WrapperRegister>
    </Main>
  )
}