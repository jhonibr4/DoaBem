import React from 'react'
import { InputLogin, Main, TitleInput } from './style'
import { View } from 'react-native'

interface IInput {
  title: string
  type: string
  onChangeText: (text: string) => void
  value: string
  typeText: boolean

}

export default function Input({ title, type, onChangeText, value, typeText }: IInput) {
  return (
    <Main type={type}>
      <TitleInput >{title}</TitleInput>
      <InputLogin secureTextEntry={typeText} value={value} onChangeText={onChangeText} />
    </Main>
  )
}