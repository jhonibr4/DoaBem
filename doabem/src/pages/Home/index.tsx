import React, { useEffect, useState } from 'react'
import { ButtonLogout, HelloText, Logo, Main, TextButtonLogout, WrapperBoxInfo, WrapperButtons, WrapperTop } from './style'
import BoxInfo from '../../components/BoxInfo'
import ButtonMenu from '../../components/ButtonsMenu'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Divider } from 'react-native-paper'
import api from '../../service/api'
type RootStackParamList = {
  SearchDonation: undefined
  Address: undefined
  Donation: undefined
  EditProfile: undefined
}

interface IItem {
  name: string
}

export default function Home() {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  const [data, setData] = useState<IItem>([]);
  const [countPending, setCountPending] = useState(0)
  const [countAccept, setCountAccept] = useState(0)
  const [id_user, setIdUser] = useState('')
  const [status, setStatus] = useState('Aguardando Resposta')

  async function getItems() {
    const value: string | null = await AsyncStorage.getItem('data')
    setData(JSON.parse(value))
  }
  async function getUser() {
    const valueUser: any | null = await AsyncStorage.getItem('data')
    const data = JSON.parse(valueUser)
    setIdUser(data.id_users)
  }

  async function loadSolicitation() {
    const data = { status }
    await api.post('solicitationT', data, {
      headers: {
        Authorization: id_user
      }
    }).then(res => {
      setCountPending(res.headers['x-total-count'])
      setCountAccept(res.headers['y-total-count'])
    }).catch(err => {
      console.log(err)
    })
  }
  useEffect(() => {

    loadSolicitation()
    getUser()
    getItems()
    console.log(id_user)
  }, [id_user, status])


  return (
    <Main>
      <WrapperTop>
        <Logo>Logo</Logo>
        <HelloText>Olá, {data.name}</HelloText>
      </WrapperTop>
      <WrapperBoxInfo>
        <BoxInfo title='Doações Pendente' amount={countPending}></BoxInfo>
        <Divider style={{ height: 100, borderWidth: 1, borderColor: "#6C3DCF" }} />
        <BoxInfo title='Doações Agendada' amount={countAccept}></BoxInfo>
      </WrapperBoxInfo>
      <WrapperButtons>
        <ButtonMenu title="Doações" onPress={() => navigation.navigate('Donation')} />
        <ButtonMenu title="Endereços" onPress={() => navigation.navigate('Address')} />
        <ButtonMenu title="Editar Perfil" onPress={() => navigation.navigate('EditProfile')} />
        <ButtonMenu title="Histórico de Doação" onPress={() => navigation.navigate('SearchDonation')} />
      </WrapperButtons>
      <ButtonLogout>
        <TextButtonLogout>Sair</TextButtonLogout>
      </ButtonLogout>
    </Main>
  )
}