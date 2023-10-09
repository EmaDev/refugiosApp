import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Swiper from 'react-native-deck-swiper';
import { Image, Button } from 'react-native';
import { Icon } from '@rneui/themed';
import { usuarioData } from '../mock/Usuario';
import { SliderImagenes } from '../components/SliderImagenes';
import { Header } from '../components/Header';
import { Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Colores from '../utils/colores';

interface Props {
    navigation: any;
}

export const HomeScreen = ({ navigation }: Props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Swiper
                cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY', 'DO1', 'MORE1', 'OF1', 'WHAT1', 'MAKES1', 'YOU1', 'HAPPY1']}
                renderCard={(card) => {
                    return (
                        <View style={styles.card}>
                            <SliderImagenes lista={usuarioData.imagenes} />
                        </View>
                    )
                }}
                onSwiped={(cardIndex) => { console.log(cardIndex) }}
                onSwipedAll={() => { console.log('onSwipedAll') }}
                cardIndex={0}
                stackSize={3}
                containerStyle={styles.swiper}
            />
            <View style={styles.botonera}>
                <TouchableOpacity>
                    <Icon
                        name='close'
                        type='ionicon'
                        color={Colores.botones.cancelar.texto}
                        size={40}
                        containerStyle={{...styles.icono, backgroundColor: Colores.botones.cancelar.fondo}}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon
                        name='bookmark-outline'
                        type='ionicon'
                        color={Colores.botones.informacion.texto}
                        size={40}
                        containerStyle={{...styles.icono, backgroundColor: Colores.botones.informacion.fondo}}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                <Icon
                    name='heart'
                    type='ionicon'
                    color={Colores.botones.aceptar.texto}
                    size={40}
                    containerStyle={{...styles.icono, backgroundColor: Colores.botones.aceptar.fondo}}
                />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    swiper: {
        backgroundColor: "traparent",
        flex: 1,
        padding: 0
    },
    card: {
        height: Dimensions.get("window").height * 0.84,
        width: Dimensions.get("window").width * 0.92,
        justifyContent: "center",
        padding: 0,
        margin: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    botonera: {
        position: "absolute",
        zIndex: 999,
        bottom: 0,
        height: Dimensions.get("window").height * 0.1,
        width: Dimensions.get("window").width,
        flex: 1,
        paddingHorizontal: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    icono:{
        padding: 10,
        width: 60,
        height: 60,
        borderRadius: 60/2,
        marginHorizontal: 10
    }
});
