import React, { useRef, useState } from 'react';
import { FlatList, View, Text, NativeSyntheticEvent, NativeScrollEvent, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { ImagenSlider } from './ImagenSlider';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from '@rneui/themed';

interface Props {
    lista: String[];
}


export const SliderImagenes = ({ lista }: Props) => {

    const [posicionIndicador, setPosicionIndicador] = useState<number>(0);
    const listRef: any = useRef(null);

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
        <View style={styles.contenedor}>
            <View style={styles.barraPosicion}>
                {renderPosicionIndicador()}
            </View>
            <FlatList
                data={lista}
                renderItem={(data) =>
                    <ImagenSlider loading={true} src={data.item} trasladarEnSlider={trasladarEnSlider} 
                    width={Dimensions.get("window").width * 0.9}/>
                }
                horizontal
                keyExtractor={(item, i) => (item + "-" + i)}
                pagingEnabled
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                ref={listRef}
                onScroll={(event) => { getPosicionItem(event) }}
                style={{ flex: 1 }}
            />
            <LinearGradient colors={["transparent", "#000", "#000"]} style={styles.descripcion}>
                <TouchableOpacity 
                //onPress={toggleOverlay}  
                style={{ margin: 5, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Text style={{ ...styles.text, fontSize: 32, fontWeight: "800" }}>Sultan</Text>
                    <Icon
                        name='caret-up-outline'
                        type='ionicon'
                        color={"white"}
                        size={20}
                        containerStyle={{ borderWidth: 2, borderColor: "white", height: 30, width: 30, borderRadius: 30 / 2, alignItems: "center", justifyContent: "center" }}
                    />
                </TouchableOpacity >
                <Text style={{ ...styles.text, fontSize: 18 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt dolorem nobis quasi veniam! Illum perferendis dolor</Text>
                <View style={{ margin: 5, display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Icon
                        name='location-outline'
                        type='ionicon'
                        color={"white"}
                        size={16}
                    />
                    <Text style={{ ...styles.text }}>A 10 km de distancia</Text>
                </View>
                <View style={{ margin: 5, display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Icon
                        name='person-outline'
                        type='ionicon'
                        color={"white"}
                        size={16}
                    />
                    <Text style={{ ...styles.text }}>Genero: Macho</Text>
                </View>
            </LinearGradient>
        </View>
    )
}


const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignContent: "center",
        margin: 6,
        position: "relative",
        borderWidth: 4,
        borderRadius: 6,
        borderColor: "white"
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
    descripcion: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        padding: 10
    },
    text: {
        color: "white"
    }
});