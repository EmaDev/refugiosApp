import React from 'react';
import {View, Button} from  "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { Perfil } from '../screens/PerfilScreen';
import { Icon } from '@rneui/themed';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

const activeColor = "#000"
export const TabNavigator = () => {
    return (
      <Tab.Navigator screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconName;
          let iconColor;

            if (route.name === 'Inicio') {
              iconColor = focused ? activeColor : "#696969";
              iconName = "home";
            } else if (route.name === 'Explorar') {
              iconColor = focused ? activeColor : "#696969";
              iconName = "earth-outline";
            }else if(route.name === "Likes"){
              iconColor = focused ? activeColor: "#696969";
              iconName = "heart-circle-outline";
            }else if(route.name === "Chat"){
                iconColor = focused ? activeColor: "#696969";
                iconName = "chatbubble-ellipses-outline";
            }
            else if(route.name === "Chat"){
              iconColor = focused ? activeColor: "#696969";
              iconName = "heart-circle-outline";
            }else{
              iconColor = focused ? activeColor: "#696969";
              iconName = "person-circle-outline";
            }
            return <Icon name={iconName} type='ionicon' size={28} color={iconColor} />;
        },
        tabBarActiveTintColor: '#131313',
        tabBarInactiveTintColor: '#696969',
        tabBarShowLabel: false,
      })}
      >
            <Tab.Screen name="Inicio" component={HomeScreen} />
            <Tab.Screen name="Explorar" component={NotificationsScreen} />
            <Tab.Screen name="Likes" component={HomeScreen} />
            <Tab.Screen name="Chat" component={HomeScreen} />
            <Tab.Screen name="Perfil" component={Perfil} />
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
