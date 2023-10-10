import { Icon, Overlay } from '@rneui/themed';
import React, { useRef, useState } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, TouchableOpacity, View } from 'react-native';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';
import Colores from '../utils/colores';
import { Text } from '@rneui/base';
import { FlatList } from 'react-native';
import { usuarioData } from '../mock/Usuario';
import { ImagenSlider } from './ImagenSlider';

const dimensiones = Dimensions.get("window");

interface Prosp {
    lista: string[]
}
export const ModalCard = ({ lista }: Prosp) => {

    const [visible, setVisible] = useState(true);
    const [posicionIndicador, setPosicionIndicador] = useState<number>(0);
    const listRef: any = useRef(null);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    const renderPosicionIndicador = () => {
        return lista.map((item, index) => (
            <View key={index} style={{
                backgroundColor: (index == posicionIndicador) ? "white" : "rgba(255,255,255,0.3)",
                flex: 1, height: 5, marginHorizontal: 1, borderRadius: 10
            }}>
            </View>
        ))
    }

    const getPosicionItem = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const scrollPos = event.nativeEvent.contentOffset.x;
        const index: number = Math.ceil(scrollPos / Dimensions.get("window").width);
        setPosicionIndicador(index);
    }

    const trasladarEnSlider = (direccion: "LEFT" | "RIGHT" = "RIGHT") => {
        if (posicionIndicador == lista.length - 1 && direccion == "RIGHT") {
            setPosicionIndicador(0);
            listRef.current.scrollToIndex({
                index: 0,
                animation: true
            })
        } else if (direccion == "RIGHT") {
            listRef.current.scrollToIndex({
                index: posicionIndicador + 1,
                animation: true
            })
            setPosicionIndicador((prev) => prev + 1);
        } else if (direccion == "LEFT" && posicionIndicador > 0) {
            listRef.current.scrollToIndex({
                index: posicionIndicador - 1,
                animation: true
            });
            setPosicionIndicador((prev) => prev - 1);
        }
    }

    return (
        <>
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}
                overlayStyle={{ flex: 1, width: dimensiones.width }}
            >
                <ScrollView>
                    <View style={styles.imgContenedor}>
                        <View style={styles.barraPosicion}>
                            {renderPosicionIndicador()}
                        </View>
                        <FlatList
                            data={usuarioData.imagenes}
                            renderItem={(data) =>
                                <ImagenSlider loading={true} src={data.item} trasladarEnSlider={trasladarEnSlider}
                                    width={dimensiones.width} />
                            }
                            horizontal
                            keyExtractor={(item, i) => (item + "-" + i)}
                            pagingEnabled
                            scrollEnabled={false}
                            showsHorizontalScrollIndicator={false}
                            ref={listRef}
                            onScroll={(event) => { /*getPosicionItem(event)*/ }}
                            style={{ flex: 1 }}
                        />
                        <TouchableOpacity style={styles.icono}>
                            <Icon
                                name='caret-down-outline'
                                type='ionicon'
                                color={Colores.botones.informacion.texto}
                                size={30}
                                containerStyle={{ ...styles.icono, backgroundColor: Colores.botones.informacion.fondo }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.descripContenedor}>
                        <Text style={{ fontSize: 30, fontWeight: "800", marginBottom: 10 }}>Sultan</Text>
                        <View style={{ margin: 5, display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <Icon
                                name='location-outline'
                                type='ionicon'
                                color={""}
                                size={16}
                            />
                            <Text style={{ ...styles.text }}>A 10 km de distancia</Text>
                        </View>
                        <View style={{ margin: 5, display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <Icon
                                name='location-outline'
                                type='ionicon'
                                color={""}
                                size={16}
                            />
                            <Text style={{ ...styles.text }}>A 10 km de distancia</Text>
                        </View>
                        <View style={{ margin: 5, display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <Icon
                                name='location-outline'
                                type='ionicon'
                                color={""}
                                size={16}
                            />
                            <Text style={{ ...styles.text }}>A 10 km de distancia</Text>
                        </View>
                        <View style={{height: 1, backgroundColor: "rgba(0,0,0,0.3)", width: "100%", margin: 10}}>
                        </View>
                    </View>
                </ScrollView>
            </Overlay>
        </>
    )
}


const styles = StyleSheet.create({
    imgContenedor: {
        height: dimensiones.height * 0.7,
        backgroundColor: "orange",
        position: "relative",
        zIndex: 4,
        alignItems: "center",
        justifyContent: "center"
    },
    barraPosicion: {
        position: "absolute",
        height: 10,
        top: 2,
        width: "100%",
        borderRadius: 10,
        zIndex: 1,
        display: "flex",
        flexDirection: "row",
    },
    icono: {
        position: "absolute",
        right: 8,
        bottom: -12,
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center"
    },
    descripContenedor: {
        flex: 1,
        zIndex: 2,
        paddingHorizontal: 12,
        paddingBottom: 20,
    },
    text:{
        textAlign: "left"
    }

});