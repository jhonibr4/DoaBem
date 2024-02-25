import { View, Text, Dimensions, ImageSourcePropType, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ButtonInterest, ImageDonation, Main, NameDonation, NameInfo, TextBox, TextDescription, TextInterest, TitleBox, TitleDescription, WrapperBoxInfo, WrapperDescription, WrapperInfos, WrapperTripleBox, WrapperUserAndLocation } from './style'
import Carousel from 'react-native-snap-carousel'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation, useRoute } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '../../service/api'
import { StackNavigationProp } from '@react-navigation/stack'

export default function PageDonation() {

  interface IDonation {
    amount: string
    id_donation: string
    id_addressDonation: string
    id_user: string
    name: string
    type_donation: string
    type_delivery: string
    description: string

  }

  type RootStackParamList = {
    SolicitationDonation: undefined
  }
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  const route: any = useRoute();
  const donation: any = route.params;

  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  async function getUser() {
    const valueUser: string | null = await AsyncStorage.getItem('data')
    const data = JSON.parse(valueUser)
    setName(data.name)
    console.log(data)
  }
  async function getAddress() {
    await api.get('address', {
      headers: {
        Authorization: donation.id_addressDonation
      }
    }).then(res => {
      setCity(res.data.city)
      setState(res.data.state)
    }).catch(err => {
      console.log(err)
    })
  }
  useEffect(() => {
    getUser()
    getAddress()
  }, [])

  return (
    <Main>
      <ScrollView>


        <ImageDonation source={{ uri: `http://192.168.15.14:3333/files/${donation.img_donation}` }} resizeMode='stretch' />
        <WrapperInfos>
          <NameDonation>{donation.name}</NameDonation>

          <WrapperTripleBox>
            <WrapperBoxInfo>
              <TitleBox>Quantidade</TitleBox>
              <TextBox>{donation.amount}</TextBox>
            </WrapperBoxInfo>
            <WrapperBoxInfo>
              <TitleBox>Categoria</TitleBox>
              <TextBox>
                {donation.type_donation === 'clothing' ? 'Roupas' : 'Mobiliário'}
              </TextBox>
            </WrapperBoxInfo>
            <WrapperBoxInfo>
              <TitleBox>Tipo de Entrega</TitleBox>
              <TextBox>
                {donation.type_delivery === 'delivery' ? 'Entrega' : 'Coleta'}
              </TextBox>
            </WrapperBoxInfo>
          </WrapperTripleBox>
          <WrapperUserAndLocation>
            <Icon name='person' size={25} style={{ color: '#6C3DCF' }} />
            <NameInfo>{name}</NameInfo>
          </WrapperUserAndLocation>
          <WrapperUserAndLocation>
            <Icon name='location-on' size={25} style={{ color: '#6C3DCF' }} />
            <NameInfo>{city} - {state}</NameInfo>
          </WrapperUserAndLocation>
          <WrapperDescription>
            <TitleDescription>Descrição</TitleDescription>
            <TextDescription>{donation.description}</TextDescription>
          </WrapperDescription>
          <ButtonInterest onPress={() => navigation.navigate('SolicitationDonation', donation)}>
            <TextInterest>Tenho Interesse</TextInterest>
          </ButtonInterest>
        </WrapperInfos>
      </ScrollView>
    </Main>
  )
}