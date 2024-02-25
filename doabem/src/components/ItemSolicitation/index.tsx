import { View, Text } from 'react-native'
import React from 'react'
import { Solicitation, Item, Title, WrapperSolicitation } from './style'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'

interface ISolicitation {
  name_donation: string
  city: string
  state: string
  requester: string
  solicitation: any
}

type RootStackParamList = {
  Solicitation: undefined
}



export default function ItemSolicitation({ name_donation, city, state, requester, solicitation }: ISolicitation) {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()



  return (
    <Item onPress={() => navigation.navigate('Solicitation', solicitation)}>
      <WrapperSolicitation>
        <Title>{name_donation}</Title>
        <Solicitation>Solicitante: {requester}{'\n'}Cidade: {city}, {state}</Solicitation>
      </WrapperSolicitation>
      <Icon name='chevron-right' size={50} color={'#FFF'}></Icon>
    </Item>
  )
}