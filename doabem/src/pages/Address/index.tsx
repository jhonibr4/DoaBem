import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ButtonAddAddress, Lottie, Main, TextNotFound, Title, WrapperAnimation } from './style'
import Icon from 'react-native-vector-icons/MaterialIcons'
import ItemAddress from '../../components/ItemAddress'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import api from '../../service/api'
import NotFound from '../../animation/notfound.json'
import AsyncStorage from '@react-native-async-storage/async-storage'

type RootStackParamList = {
  Register: undefined
  Home: undefined
}

export default function Address() {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  const [id_users, setIdUser] = useState<string>('');
  const [address, setAddress] = useState<string[]>([]);

  async function getUser() {
    const valueUser: string | null = await AsyncStorage.getItem('data')
    const data = JSON.parse(valueUser)
    setIdUser(data.id_users)
  }

  async function loadAddress() {
    await api.get('addressT', {
      headers: {
        Authorization: id_users
      }
    }).then(res => {
      setAddress(res.data)
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    getUser()
    loadAddress()
    console.log(id_users)
  }, [id_users])

  return (
    <Main>
      <Title>Endereços</Title>
      {address.length === 0 ?
        <WrapperAnimation>
          <Lottie
            source={NotFound}
            autoPlay
          />
          <TextNotFound>Nenhuma Encontramos nenhuma solicitação...</TextNotFound>
        </WrapperAnimation > :
        address.map(address => (
          <ItemAddress
            name_address={address.name_address}
            address={address.public_place}
            number={address.number}
            neighborhood={address.neighborhood}
          />
        ))
      }
      <ButtonAddAddress onPress={() => navigation.navigate('RegisterAddress')}>
        <Icon name='add' size={60} color='#6f00ee' />
      </ButtonAddAddress>
    </Main>
  )
}