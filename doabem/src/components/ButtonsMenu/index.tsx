import React from 'react'
import { Button, TextButton } from './style'

interface IButton {
    title: string
    onPress: () => void
}

export default function ButtonMenu({ title, onPress }: IButton) {
  return (
    <Button onPress={onPress}>
        <TextButton>{title}</TextButton> 
    </Button>
  )
}