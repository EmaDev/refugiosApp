import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Perfil } from '../screens/PerfilScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { TabNavigator } from './TabNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{
            headerShown:true
        }}>
            <Drawer.Screen name="SobreNosotros" component={TabNavigator} options={{title: "RefugiosApp"}}/>
            <Drawer.Screen name="Configuracion" component={Perfil} />
        </Drawer.Navigator>
    )
}
