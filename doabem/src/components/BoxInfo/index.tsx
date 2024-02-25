
import React from 'react'
import { AmountInfo, TitleInfo, WrapperInfo } from './style'

interface IInfo {
  title:string
  amount: number
}

export default function BoxInfo({ title, amount }: IInfo) {
  return (
    <WrapperInfo>
        <TitleInfo>{title}</TitleInfo>
        <AmountInfo>{amount}</AmountInfo>
    </WrapperInfo>
  )
}