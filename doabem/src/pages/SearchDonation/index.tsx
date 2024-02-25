
import { useEffect, useState } from 'react'

import { Lottie, Main, ScrollView, SelectDropdownItem, TextNotFound, WrapperAnimation, WrapperRegister, WrapperSolicitation } from './style'
import { Subtitle, Title } from '../Login/style'
import ItemDonation from '../../components/ItemDonation'
import { ButtonAddAddress } from '../Address/style'
import Icon from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '../../service/api'
import { Text } from 'react-native-paper'
import ItemSolicitation from '../../components/ItemSolicitation'
import NotFound from '../../animation/notfound.json'



export default function SearchDonation() {

  const [allSolicitation, setAllSolicitation] = useState<string[]>([])
  const [id_user, setIdUser] = useState('')
  const [status, setStatus] = useState('Aguardando Resposta')


  const response = ["Aguardando Resposta", "Aceito", "Rejeitado"]

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
      setAllSolicitation(res.data)
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    })
  }
  useEffect(() => {

    loadSolicitation()
    getUser()
    console.log(id_user)
  }, [id_user, status])


  return (
    <ScrollView>
      <Main>
        <WrapperRegister>
          <Title>Solicitações</Title>
          <SelectDropdownItem

            defaultButtonText='Aguardando Resposta'
            buttonStyle={{ width: '100%', borderRadius: 5 }}
            data={response}
            onSelect={(selectedItem) => {
              setStatus(selectedItem)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item
            }}
          />
        </WrapperRegister>
        <WrapperSolicitation>
          {allSolicitation.length !== 0 ?

            allSolicitation.map(solicitation => (
              <ItemSolicitation
                solicitation={solicitation}
                requester={solicitation.name_person}
                city={solicitation.city}
                state={solicitation.state}
                name_donation={solicitation.name_donation}
              />
            ))
            :
            <WrapperAnimation>
              <Lottie
                source={NotFound}
                autoPlay
              />
              <TextNotFound>Nenhuma Encontramos nenhuma solicitação</TextNotFound>
            </WrapperAnimation >

          }
        </WrapperSolicitation>

      </Main>
    </ScrollView>
  )
}