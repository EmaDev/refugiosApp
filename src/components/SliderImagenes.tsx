import React, { useRef, useState } from 'react';
import { FlatList, View, Text, NativeSyntheticEvent, NativeScrollEvent, Dimensions, StyleSheet } from 'react-native';
import { ImagenSlider } from './ImagenSlider';

interface Props {
    lista: String[];
}

const renderItem = (data: any) => {
    return (
        <ImagenSlider src={data.item} loading={true} />
    )
}

const dimensiones = Dimensions.get("window");
export const SliderImagenes = ({ lista }: Props) => {

    const [posicionIndicador, setPosicionIndicador] = useState<number>(0);
    const listRef = useRef(null);

    const renderPosicionIndicador = () => {
        return lista.map((item, index) => (
            <View key={index} style={{ backgroundColor: (index == posicionIndicador) ? "white" : "grey",
            flex: 1, height: 5, marginHorizontal: 1, borderRadius: 10}}>
            </View>
        ))
    }

    const getPosicionItem = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const scrollPos = event.nativeEvent.contentOffset.x;
        const index: number = Math.ceil(scrollPos / Dimensions.get("window").width);
        setPosicionIndicador(index);
    }


    return (
        <View style={styles.contenedor}>
            <View style={styles.barraPosicion}>
                 
            </View>
            <FlatList
                data={lista}
                renderItem={(data) => 
                    <ImagenSlider loading={true} src={data.item}/>
                }
                horizontal
                keyExtractor={(item, i) => (item + "-" + i)}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                ref={listRef}
                onScroll={(event) => { getPosicionItem(event) }}
                style={{flex: 1}}
            />
            
        </View>
    )
}


const styles = StyleSheet.create({
    contenedor: {
        height: dimensiones.height * 0.88,
        width: dimensiones.width * 0.92,
        alignContent: "center",
        margin: 6,
        position: "relative"
    },
    barraPosicion: {
        height: 10,
        top: 10,
        width: dimensiones.width * 0.92,
        borderRadius: 10,
        zIndex: 1,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "transparent"
    }
});