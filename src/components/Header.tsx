import React from 'react'
import { Text } from 'react-native'
import { StyleSheet } from 'react-native'
import { View, Platform } from 'react-native'
import Colores from '../utils/colores'

export const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.titulo}>Refugios App</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        padding: 10,
        zIndex: 99,
        borderBottomWidth: 1,
        borderBottomColor: "#e1e1e1"
    },
    titulo: {
        fontSize: 24,
        fontWeight: "800",
        color: Colores.primario
    }
});
