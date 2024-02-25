import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BoxTypeDonation, ButtonResponse, ImageDonation, Main, ScrollView, TextButton, TextButtonResponse, TextType, Title, TitleBoxType, ValueAddress, WrapperAddress, WrapperDoubleButton, WrapperLineinfo, WrapperTypeDonation, WrapperValueTypeDonation } from './style'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Divider } from 'react-native-paper'
import { useNavigation, useRoute } from '@react-navigation/native'
import api from '../../service/api'
import { StackNavigationProp } from '@react-navigation/stack'
import LottieView from 'lottie-react-native';

type RootStackParamList = {
    SerachDonation: undefined
}


export default function Solicitation() {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

    const route: any = useRoute();
    const solicitation: any = route.params;

    const [image, setImage] = useState('')
    const [type_delivery, setTypeDelivery] = useState('')
    const [type_donation, setTypeDonation] = useState('')



    async function loadDonation() {
        await api.get('donation', {
            headers: {
                Authorization: solicitation.id_donations
            }
        }).then(res => {
            setImage(res.data.img_donation)
            setTypeDelivery(res.data.type_delivery)
            setTypeDonation(res.data.type_donation)
            console.log(solicitation)
        }).catch(err => {
            console.log(err)
        })
    }
    async function responseDonation(status: string) {
        const data = { status }
        await api.put('solicitation', data, {
            headers: {
                Authorization: solicitation.id_solicitation
            }
        }).then(res => {
            navigation.navigate('SearchDonation')
        }).catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        loadDonation()
    }, [])

    return (
        <ScrollView>
            <Main>
                <ImageDonation source={{ uri: `http://192.168.15.14:3333/files/${image}` }} resizeMode='stretch' />
                <WrapperTypeDonation>
                    <WrapperLineinfo>
                        <BoxTypeDonation>
                            <TitleBoxType>Tipo de entrega</TitleBoxType>
                            <WrapperValueTypeDonation>
                                {type_delivery === 'delivery' ?
                                    <>
                                        <TextType>Entrega</TextType>
                                        <Icon name='local-shipping' color='#6C3DCF' size={37} style={{ marginBottom: 5 }} />
                                    </> :
                                    <>
                                        <TextType>Coleta</TextType>
                                        <Icon name='inventory-2' color='#6C3DCF' size={37} style={{ marginBottom: 5 }} />
                                    </>
                                }
                            </WrapperValueTypeDonation>
                        </BoxTypeDonation>
                        <Divider style={{ height: 120, borderWidth: 1, borderColor: "#6C3DCF" }} />
                        <BoxTypeDonation>
                            <TitleBoxType>Tipo de Items</TitleBoxType>
                            <WrapperValueTypeDonation>
                                {type_donation === 'furniture' ?
                                    <>
                                        <TextType>Mobiliário</TextType>
                                        <Icon name='local-laundry-service' color='#6C3DCF' size={37} style={{ marginBottom: 5 }} />
                                    </> :
                                    <>
                                        <TextType>Vestimentas</TextType>
                                        <Icon name='checkroom' color='#6C3DCF' size={37} style={{ marginBottom: 5 }} />
                                    </>
                                }
                            </WrapperValueTypeDonation>

                        </BoxTypeDonation>
                    </WrapperLineinfo>
                    <Divider style={{ width: '95%', height: 1, borderWidth: 1, borderColor: "#6C3DCF" }} />
                    <WrapperLineinfo>

                        <BoxTypeDonation>
                            <TitleBoxType>Hora</TitleBoxType>
                            <WrapperValueTypeDonation>
                                <TextType>{solicitation.hour}</TextType>
                                <Icon name='schedule' color='#6C3DCF' size={37} style={{ marginBottom: 5 }} />
                            </WrapperValueTypeDonation>
                        </BoxTypeDonation>

                        <Divider style={{ height: 120, borderWidth: 1, borderColor: "#6C3DCF" }} />
                        <BoxTypeDonation>
                            <TitleBoxType>Data</TitleBoxType>
                            <WrapperValueTypeDonation>
                                <TextType>{solicitation.date}</TextType>
                                <Icon name='event' color='#6C3DCF' size={37} style={{ marginBottom: 5 }} />
                            </WrapperValueTypeDonation>

                        </BoxTypeDonation>
                    </WrapperLineinfo>
                </WrapperTypeDonation>
                <Title>Endereço</Title>
                <WrapperAddress>
                    <ValueAddress>Logradouro: {solicitation.public_place}, {solicitation.number_address}</ValueAddress>
                    <ValueAddress>Cidade: {solicitation.city}, {solicitation.state}</ValueAddress>
                    <ValueAddress>Bairro: {solicitation.neighborhood}</ValueAddress>
                </WrapperAddress>

                {
                    solicitation.status === 'Aguardando Resposta' ?
                        <WrapperDoubleButton>
                            <ButtonResponse onPress={() => responseDonation('Aceito')} button='accept'>
                                <TextButton>Aceitar</TextButton>
                            </ButtonResponse>
                            <ButtonResponse onPress={() => responseDonation('Rejeitado')} button='decline'>
                                <TextButton>Recusar</TextButton>
                            </ButtonResponse>
                        </WrapperDoubleButton> :
                        <TextButtonResponse>Status: {solicitation.status}</TextButtonResponse>

                }

            </Main>
        </ScrollView>
    )
}