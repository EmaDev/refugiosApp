import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, View } from "react-native";
import Swiper from 'react-native-deck-swiper';
import { Icon } from '@rneui/themed';
import { usuarioData } from '../mock/Usuario';
import { SliderImagenes } from '../components/SliderImagenes';
import { TouchableOpacity } from 'react-native';
import Colores from '../utils/colores';
import { ModalCard } from '../components/ModalCard';

interface Props {
    navigation: any;
}

export const HomeScreen = ({ navigation }: Props) => {
    return (
        <SafeAreaView style={styles.contenedor}>
            <View style={styles.cards}>
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
                    containerStyle={{ flex: 1, backgroundColor: "traparent" }}
                    keyExtractor={(card) => card}
                />
            </View>
            <View style={styles.botonera}>
                <TouchableOpacity>
                    <Icon
                        name='close'
                        type='ionicon'
                        color={Colores.botones.cancelar.texto}
                        size={40}
                        containerStyle={{ ...styles.icono, backgroundColor: Colores.botones.cancelar.fondo }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon
                        name='bookmark-outline'
                        type='ionicon'
                        color={Colores.botones.informacion.texto}
                        size={40}
                        containerStyle={{ ...styles.icono, backgroundColor: Colores.botones.informacion.fondo }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon
                        name='heart'
                        type='ionicon'
                        color={Colores.botones.aceptar.texto}
                        size={40}
                        containerStyle={{ ...styles.icono, backgroundColor: Colores.botones.aceptar.fondo }}
                    />
                </TouchableOpacity>
            </View>
            <ModalCard lista={usuarioData.imagenes}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
    },
    cards: {
        height: Dimensions.get("window").height * 0.85,
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
        zIndex: 999,
        bottom: 0,
        height: Dimensions.get("screen").height * 0.15,
        paddingHorizontal: 40,
        flexDirection: "row",
        justifyContent: "center",
    },
    icono: {
        padding: 10,
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginHorizontal: 10
    },
    card: {
        borderRadius: 4,
        justifyContent: "center",
        height: Dimensions.get("window").height * 0.8,
    }
});