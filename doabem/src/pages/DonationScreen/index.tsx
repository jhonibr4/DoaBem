import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ButtonAddAddress, Main, Subtitle, Title, WrapperDonation, WrapperRegister } from './style'
import ItemDonation from '../../components/ItemDonation'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import api from '../../service/api'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Donation() {

  type RootStackParamList = {
    CreateDonation: undefined
  }

  

  const [ allDonations , setAllDonations ] = useState([])
  const [ id_user , setIdUser ] = useState([])

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  async function getUser(){
    const valueUser: string | null = await AsyncStorage.getItem('data')
    const data = JSON.parse(valueUser)
    setIdUser(data.id_users)
  }

  async function loadDonations(){
    await api.get('donations', {
      headers:{
        Authorization: id_user
      }
    }).then(res => {
      setAllDonations(res.data)
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    })
  }
  useEffect(() => {
    loadDonations()
    getUser()
  },[id_user])

  return (
    <Main>
        <WrapperRegister>
            <Title>Doação de Peças</Title>
            <Subtitle>Aqui você encontra o seu conforto</Subtitle>
        </WrapperRegister>
        <WrapperDonation>
            {allDonations.length === 0 ? 
            <Text>Não possui nenhuma doação cadastrada</Text> 
            :
            allDonations.map(donation => (
              <ItemDonation 
              name={donation.name} 
              amount={donation.amount} 
              image={donation.img_donation}
              donation={donation}
              />
            ))

          }
        </WrapperDonation>
        <ButtonAddAddress onPress={() => navigation.navigate('CreateDonation')}>
          <Icon name='add' size={60} color='#FFF'/>
        </ButtonAddAddress>
    </Main>
  )
}