import React from 'react';
import { LogBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import HomeScreen from './pages/Home/index'
import LoginScreen from './pages/Login/index'
import AddressScreen from './pages/Address/index'
import RegisterAddressScreen from './pages/RegisterAddressScreen/index'
import DonationScreen from './pages/DonationScreen/index'
import RegisterScreen from './pages/Register/index'
import EditProfileScreen from './pages/EditProfile/index'
import PageDonationScreen from './pages/PageDonation/index'
import CreateDonation from './pages/CreateDonation';
import SolicitationDonationScreen from './pages/SolicitationDonation';
import SearchDonationScreen from './pages/SearchDonation';
import SolicitationScreen from './pages/Solicitation';

const Stack = createNativeStackNavigator()


export default function Routes() {
    LogBox.ignoreAllLogs();

    return (

        <NavigationContainer>
            <Stack.Navigator screenOptions={{ statusBarColor: '#0B0530', headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SearchDonation" component={SearchDonationScreen} />
                <Stack.Screen name="Solicitation" component={SolicitationScreen} />
                <Stack.Screen name="Donation" component={DonationScreen} />
                <Stack.Screen name="SolicitationDonation" component={SolicitationDonationScreen} />
                <Stack.Screen name="CreateDonation" component={CreateDonation} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="EditProfile" component={EditProfileScreen} />
                <Stack.Screen name="RegisterAddress" component={RegisterAddressScreen} />
                <Stack.Screen name="Address" component={AddressScreen} />
                <Stack.Screen name="PageDonation" component={PageDonationScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />

            </Stack.Navigator>
        </NavigationContainer>

    )
}