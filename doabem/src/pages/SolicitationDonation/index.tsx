import { Divider, RadioButton } from "react-native-paper";

import { BoxTypeDonation, ButtonCreateSolicitation, ButtonSelectHour, ImageDonation, Lottie, Main, NameDonation, ScrollView, TextAmount, TextButtonCreateSolicitation, TextButtonSelectHour, TextHourSelected, TextType, TitleBoxType, TitlePage, ViewCalendar, WrapperAddress, WrapperBoxItem, WrapperCalendar, WrapperInfo, WrapperTypeDonation, WrapperValueTypeDonation } from "./style";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useEffect, useLayoutEffect, useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TextEmpty, TitleRadio } from "../CreateDonation/style";
import api from "../../service/api";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackNavigationProp } from "@react-navigation/stack";
import Sucess from '../../animation/sucess.json'


interface IDay {
  day: string
  month: string
  year: string
}
interface IDonation {
  amount: string
  id_donation: string
  id_user: string
  name: string
  type_donation: string
  type_delivery: string

}
interface IAddress {
  public_place: string
  city: string
  state: string
  number: string
  neighborhood: string
}

LocaleConfig.locales['br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: ['Jan', 'Fev.', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set.', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: "Hoje"
};

LocaleConfig.defaultLocale = 'br';

type RootStackParamList = {
  Donation: undefined
}

export default function SolicitationDonation() {


  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  const route: any = useRoute();
  const donation: IDonation = route.params;

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [hour, setHour] = useState<any>();
  const [day, setDay] = useState<any>();
  const [selected, setSelected] = useState<any>();
  const [value, setValue] = useState<any>({});
  const [allAddress, setAllAddress] = useState([]);
  const [address, setAddress] = useState<IAddress>({});
  const [id_user, setIdUser] = useState([])
  const [name_person, setNamePerson] = useState('')
  const [reload, setReload] = useState(false);
  const [animationStart, setAnimationStart] = useState(false)

  async function getUser() {
    const valueUser: string | null = await AsyncStorage.getItem('data')
    const data = JSON.parse(valueUser)
    setIdUser(data.id_users)
    setNamePerson(data.name)
  }

  async function loadAddress() {
    await api.get('addressT', {
      headers: {
        Authorization: id_user
      }
    }).then(res => {
      setAllAddress(res.data)
      setReload(true)
    }).catch(err => {
      console.log(err)
    })
  }
  async function createSolicitation() {
    const data = {
      name_donation: donation.name,
      date: day,
      hour,
      name_person,
      public_place: address.public_place,
      neighborhood: address.neighborhood,
      city: address.city,
      state: address.state,
      number_address: address.number,
      id_donations: donation.id_donation
    }
    await api.post('solicitation', data, {
      headers: {
        Authorization: donation.id_user
      }
    }).then(res => {
      setAnimationStart(true)
    }).catch(err => {
      console.log(err)
    })
  }

  function showDatePicker() {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: object) => {

    const string = String(date)
    const newDate = string.split(" ")
    setHour(newDate[4])
    hideDatePicker();
  };
  const handleDay = (day1: IDay) => {
    setSelected(day1)
    setDay(`${day1.day}/${day1.month}/${day1.year}`)
    hideDatePicker();
  };

  useLayoutEffect(() => {
    loadAddress()
    getUser()

  }, [reload])
  return (
    <>
      {animationStart === false ?
        <ScrollView>
          <Main>
            <TitlePage>Criar Solicitação</TitlePage>
            <WrapperBoxItem>
              <ImageDonation source={{ uri: `http://192.168.15.14:3333/files/${donation.img_donation}` }}></ImageDonation>
              <WrapperInfo>
                <NameDonation>{donation.name}</NameDonation>
                <TextAmount>Quantidade: {donation.amount}</TextAmount>
              </WrapperInfo>
            </WrapperBoxItem>
            <WrapperTypeDonation>
              <BoxTypeDonation>
                <TitleBoxType>Tipo de entrega</TitleBoxType>
                <WrapperValueTypeDonation>
                  {donation.type_delivery === 'delivery' ?
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
                  {donation.type_donation === 'furniture' ?
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
            </WrapperTypeDonation>
            <WrapperCalendar>
              <ViewCalendar
                theme={{
                  backgroundColor: 'transparent',
                  calendarBackground: '#FFF',
                  textSectionTitleColor: '#b6c1cd',
                  selectedDayBackgroundColor: '#b393fa',
                  selectedDayTextColor: '#6C3DCF',
                  todayTextColor: '#6C3DCF',
                  dayTextColor: '#6C3DCF',
                  textDisabledColor: '#d9e'
                }}
                onDayPress={date => {
                  handleDay(date)
                }}
                markedDates={{
                  [selected]: { selected: true, disableTouchEvent: true }
                }}
              />

            </WrapperCalendar>

            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="time"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
            <ButtonSelectHour onPress={() => showDatePicker()}>
              <TextButtonSelectHour>Selecionar Hora</TextButtonSelectHour>
            </ButtonSelectHour>
            <WrapperTypeDonation>
              <BoxTypeDonation>
                <TitleBoxType>Hora</TitleBoxType>
                <WrapperValueTypeDonation>
                  <TextType>{hour}</TextType>
                  <Icon name='schedule' color='#6C3DCF' size={37} style={{ marginBottom: 5 }} />
                </WrapperValueTypeDonation>
              </BoxTypeDonation>
              <Divider style={{ height: 120, borderWidth: 1, borderColor: "#6C3DCF" }} />
              <BoxTypeDonation>
                <TitleBoxType>Data</TitleBoxType>
                <WrapperValueTypeDonation>
                  <TextType>{day}</TextType>
                  <Icon name='event' color='#6C3DCF' size={37} style={{ marginBottom: 5 }} />
                </WrapperValueTypeDonation>

              </BoxTypeDonation>
            </WrapperTypeDonation>
            <WrapperAddress>
              <TitleRadio>Endereço:</TitleRadio>
              <RadioButton.Group onValueChange={value => setAddress(value)} value={address}>
                {allAddress.length === 0 ?
                  <TextEmpty>Nenhum endereço cadastrado</TextEmpty> :
                  allAddress.map(address => (
                    <RadioButton.Item
                      labelStyle={{ color: '#fff' }}
                      label={address.name_address}
                      value={address} />
                  ))
                }
              </RadioButton.Group>
            </WrapperAddress>
            <ButtonCreateSolicitation onPress={() => createSolicitation()}>
              <TextButtonCreateSolicitation>Soliciar Doação</TextButtonCreateSolicitation>
            </ButtonCreateSolicitation>
          </Main>
        </ScrollView> :
        <Main>
          <Lottie
            source={Sucess}
            autoPlay
            loop={false}
            onAnimationFinish={() => navigation.navigate('Donation')}
          />
        </Main>
      }
    </>

  )
}