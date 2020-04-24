import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useSelector } from 'react-redux'

import Login from "./pages/Login";
import ApartmentList from "./pages/ApartmentList";
import ModalMeterType from './pages/ModalMeterType';
import Apartment from "./pages/Apartment";
import Home from "./pages/Home";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function TabRoutes() {
    return (
        <Tab.Navigator shifting={true}>
            <Tab.Screen name="HomeScreen" options={{ headerShown: false }} component={Home} />
            <Tab.Screen name="SettingsScreen" component={ApartmentList} />
        </Tab.Navigator>
    );
}

export default function Route() {
    const token = useSelector(state => state.user.token);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{
                headerStyle: {
                    backgroundColor: '#037EAB',
                },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                ...TransitionPresets.SlideFromRightIOS,
            }} >
                { !token &&
                <Stack.Screen name="Login" headerMode="screen" component={Login} options={{ headerShown: false }} />}
                <Stack.Screen name="Tab" component={TabRoutes} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
