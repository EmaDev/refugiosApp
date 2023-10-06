import React from 'react';
import {View, Button} from  "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown:false
        }}>
            <Tab.Screen name="Usuario" component={HomeScreen} />
            <Tab.Screen name="Explorar" component={NotificationsScreen} />
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Chat" component={HomeScreen} />
            <Tab.Screen name="Perfil" component={HomeScreen} />
        </Tab.Navigator>
    )
}

function NotificationsScreen({ navigation }:any) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
