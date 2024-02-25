import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Main, WrapperRegister, Title, WrapperDoubleInput, TextButtonRegisterAddress, ButtonRegisterAddress, ScrollView, } from './style'
import Input from '../../components/Input'
import api from '../../service/api';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterAddress() {

  type RootStackParamList = {
    Register: undefined
    Home: undefined
  }

  const [id_user, setIdUser] = useState<string>('');
  const [name_address, setNameAddress] = useState<string>('');
  const [cep, setCep] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [public_place, setPublicPlace] = useState('');
  const [state, setState] = useState('');
  const [neighborhood, setNeighborhood] = useState('');

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  const handleChangeNameAddress = (inputText: string) => setNameAddress(inputText)
  const handleChangeCep = (inputText: string) => setCep(inputText)
  const handleChangeNumber = (inputText: string) => setNumber(inputText)
  const handleChangeCity = (inputText: string) => setCity(inputText)
  const handleChangePublicPlace = (inputText: string) => setPublicPlace(inputText)
  const handleChangeState = (inputText: string) => setState(inputText)
  const handleChangeNeighborhood = (inputText: string) => setNeighborhood(inputText)

  async function getUser() {
    const valueUser: string | null = await AsyncStorage.getItem('data')
    const data = JSON.parse(valueUser)
    setIdUser(data.id_users)
    console.log(id_user)
  }

  async function createAddress() {

    const data = { name_address, cep, number, city, state, public_place, neighborhood }
    const response = await api.post('address', data, {
      headers: {
        Authorization: id_user
      }
    })
    console.log(response.data)
    navigation.goBack()
  }

  useState(() => {
    getUser()
  })

  return (
    <ScrollView>
      <Main>
        <WrapperRegister>
          <Title>Registro de Endereços</Title>
          <Input typeText={false} type='complete' title='Nome Endereço' value={name_address} onChangeText={handleChangeNameAddress} />
          <WrapperDoubleInput>
            <Input typeText={false} type='double' title='CEP' value={cep} onChangeText={handleChangeCep} />
            <Input typeText={false} type='double' title='Nº' value={number} onChangeText={handleChangeNumber} />
          </WrapperDoubleInput>
          <Input typeText={false} type='complete' title='Logradouro' value={public_place} onChangeText={handleChangePublicPlace} />
          <Input typeText={false} type='complete' title='Cidade' value={city} onChangeText={handleChangeCity} />
          <Input typeText={false} type='complete' title='Estado' value={state} onChangeText={handleChangeState} />
          <Input typeText={false} type='complete' title='Bairro' value={neighborhood} onChangeText={handleChangeNeighborhood} />
        </WrapperRegister>
        <ButtonRegisterAddress onPress={createAddress}>
          <TextButtonRegisterAddress >Cadastrar</TextButtonRegisterAddress>
        </ButtonRegisterAddress>
        <ButtonRegisterAddress onPress={() => console.log(id_user)}>
          <TextButtonRegisterAddress >Cadastrar</TextButtonRegisterAddress>
        </ButtonRegisterAddress>
      </Main>
    </ScrollView>
  )
}