import { View, Text } from 'react-native'
import React from 'react'
import { Address, Item, Title, WrapperAddress } from './style'
import Icon from 'react-native-vector-icons/MaterialIcons'

interface IAddress {
  address: string
  number: number
  neighborhood: string
  name_address: string

}

export default function ItemAddress({address, number, neighborhood, name_address}: IAddress) {
  return (
    <Item>
      <WrapperAddress>
        <Title>{name_address}</Title>
        <Address>Endereço: {address}, Nº: {number}, {neighborhood}</Address>
      </WrapperAddress>
      <Icon name='chevron-right' size={50} color={'#FFF'}></Icon>
    </Item>
  )
}