import { View, Text } from 'react-native'
import React from 'react'
import { AmountItem, ButtonViewDetails, ImageItem, TextButtonViewDetails, TitleItem, WrapperItemDonation } from './style'

import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'

type RootStackParamList = {
  PageDonation: undefined
  }



interface IDonation {
  name: string,
  amount: number
  image: string
  donation: any
}

export default function ItemDonation({name, amount, image, donation}: IDonation) {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  return (
    <WrapperItemDonation>
        <ImageItem source={{ uri: `http://192.168.15.14:3333/files/${image}` }} />
        <TitleItem>{name}</TitleItem>
        <AmountItem>Quantidade de peças: {amount}</AmountItem>
        <ButtonViewDetails onPress={() => navigation.navigate('PageDonation', donation)}>
            <TextButtonViewDetails>Ver Detalhes</TextButtonViewDetails>
        </ButtonViewDetails>
    </WrapperItemDonation>
  )
}