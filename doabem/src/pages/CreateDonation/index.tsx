import React, { useEffect, useState } from 'react'
import { ButtonCreateDonation, ButtonSelectPhoto, Main, ScrollView, TextArea, TextButtonCreateDonation, TextButtonSelectPhoto, TextEmpty, TextImageNotFound, TextRadio, TitleRadio, WrapperDoubleRadio, WrapperImageDonation, WrapperInput } from './style'
import Input from '../../components/Input'
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../service/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchImageLibrary} from 'react-native-image-picker';
import { ImageDonation } from '../PageDonation/style';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export default function CreateDonation() {

  type RootStackParamList = {
    Home: undefined
  }
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

    const [ allAddress, setAllAddress ] = useState('');
    const [ id_users, setIdUser ] = useState<string>('');
    const [ id_addressDonation, setIdAddress ] = useState<string>('');
    const [ name, setName ] = useState<string>('');
    const [ amount, setAmout ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ description, setDescription ] = useState('');
    const [type_delivery, setTypeDelivery] = React.useState('delivery');
    const [type_donation, setTypeDonation] = React.useState('clothing');
    const [img_donation, setImageDonation] = React.useState('');
    const [imageSelected, setImageSelected] = React.useState('');
    const [ data , setData ] = React.useState('');

    const [ value, setValue ] = React.useState('');


    const handleChangeName = (inputText: string) => setName(inputText)
    const handleChangeAmout = (inputText: string) => setAmout(inputText)
    const handleChangeDescription = (inputText: string) => setDescription(inputText)

    async function createDonation(){

      
      
      await api.post('donations', data, {
        headers: {
        "Content-Type": `multipart/form-data`,
         Authorization: id_users,
        }
       }).then(res => {
        navigation.navigate('Home')
         
       }).catch(err => {
         console.log(err)
       })
    }

    async function joinFormdata(){
      
    }
    async function getUser(){
        const valueUser: string | null = await AsyncStorage.getItem('data')
        const data = JSON.parse(valueUser)
        setPhone(data.phone)
        setIdUser(data.id_users)
        console.log(id_users)
      }

    async function loadAddress(){    

          await api.get('addressT', {
           headers: {
            Authorization: id_users,

           }
          }).then(res => {
            setAllAddress(res.data)
          }).catch(err => {
            console.log(err)
          })
      }
   
      const openImagePicker = async () => {
        const options: any = {
          mediaType: 'photo',
          includeBase64: false,
          maxHeight: 2000,
          maxWidth: 2000,
        };
    
        const image = await launchImageLibrary(options);
        setImageDonation(image)
        setImageSelected(image.assets[0].uri)

        var formdata = new FormData()

        formdata.append('file', {
          uri: image.assets[0].uri,
          type: image.assets[0].type,
          name: image.assets[0].fileName,
        })
        formdata.append('id_addressDonation', value)
        formdata.append('name', name)
        formdata.append('amount', amount)
        formdata.append('phone', phone)
        formdata.append('description', description)
        formdata.append('type_delivery', type_delivery)
        formdata.append('type_donation', type_donation)
        setData(formdata)
        
        
        console.log(formdata)
      };

      useEffect(() => {
        getUser()
        loadAddress()
      },[id_users, data])
      
  return (
    <ScrollView>
        <Main>
            
                {imageSelected === '' ? 
                <WrapperImageDonation>
                <TextImageNotFound>Nenhuma imagem selecionada</TextImageNotFound>
                </WrapperImageDonation>
                 :
                <ImageDonation source={{ uri: imageSelected }}/>
            }
           
            <ButtonSelectPhoto onPress={openImagePicker}>
                <TextButtonSelectPhoto >Escolher Foto</TextButtonSelectPhoto>
            </ButtonSelectPhoto> 
            <ButtonSelectPhoto onPress={() => console.log(data)}>
                <TextButtonSelectPhoto >Escolher Foto</TextButtonSelectPhoto>
            </ButtonSelectPhoto> 
            <WrapperInput>
                <Input title='Nome' type='complete' value={name} onChangeText={handleChangeName}/>
            <TitleRadio>Tipo de Entrega</TitleRadio>
                <WrapperDoubleRadio>
                <RadioButton
                    value="delivery"
                    status={ type_delivery === 'delivery' ? 'checked' : 'unchecked' }
                    onPress={() => setTypeDelivery('delivery')}
                    />
                    <TextRadio>Entrega</TextRadio>
                    <Icon name='local-shipping' color='#6C3DCF' size={37} style={{marginLeft:10}}/>
                <RadioButton
                    value="colect"
                    status={ type_delivery === 'colect' ? 'checked' : 'unchecked' }
                    onPress={() => setTypeDelivery('colect')}
                    />
                    <TextRadio>Coleta</TextRadio>
                    <Icon name='inventory-2' color='#6C3DCF' size={37} style={{marginLeft:10}}/>
                </WrapperDoubleRadio>
                <TitleRadio>Tipo de Doação</TitleRadio>
                <WrapperDoubleRadio>
                    <RadioButton
                        value="clothing"
                        status={ type_donation === 'clothing' ? 'checked' : 'unchecked' }
                        onPress={() => setTypeDonation('clothing')}
                        />
                        <TextRadio>Vestimentas</TextRadio>
                        <Icon name='checkroom' color='#6C3DCF' size={37} style={{marginLeft:10}}/>
                    <RadioButton
                        value="furniture"
                        status={ type_donation === 'furniture' ? 'checked' : 'unchecked' }
                        onPress={() => setTypeDonation('furniture')}
                        />
                        <TextRadio>Mobiliário</TextRadio>
                        <Icon name='local-laundry-service' color='#6C3DCF' size={37} style={{marginLeft:10}}/>
                </WrapperDoubleRadio>
                <Input title='Quantidade' type='complete' value={amount} onChangeText={handleChangeAmout}/>
                <TitleRadio>Endereço:</TitleRadio>
                <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                    {allAddress.length === 0 ? 
                        <TextEmpty>Nenhum endereço cadastrado</TextEmpty> :
                        allAddress.map(address => (
                            <RadioButton.Item labelStyle={{color: '#fff'}} label={address.name_address} onPress={() => setIdAddress(address.id_address)} value={address.id_address}/>
                            ))
                        }
                    
                </RadioButton.Group>
                <TitleRadio>Descrição</TitleRadio>
                <TextArea value={description} onChangeText={text => setDescription(text)} />
                <ButtonCreateDonation onPress={() => createDonation()}>
                    <TextButtonCreateDonation >Cadastrar</TextButtonCreateDonation>
                </ButtonCreateDonation>
            </WrapperInput>
        </Main>
    </ScrollView>
  )
}