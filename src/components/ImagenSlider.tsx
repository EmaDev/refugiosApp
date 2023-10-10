import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, Image, GestureResponderEvent } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { getColors } from 'react-native-image-colors';
import { Pressable } from 'react-native';

interface Props {
    src: String;
    alt?: string;
    loading: boolean;
    trasladarEnSlider: (direccion: "LEFT" | "RIGHT") => void;
    width: number;
}

const dimensiones = Dimensions.get("window");

export const ImagenSlider = ({ src, alt = "Imagen", loading, trasladarEnSlider, width}: Props) => {

    const [color, setColor] = useState<{ primario: string, secundario: string }>({ primario: "#e1e1e1", secundario: "#e1e1e1" });

    useEffect(() => {
        const getColor = async () => {
            const resp: any = await getColors(src.toString(), {});
            setColor({
                primario: resp.dominant,
                secundario: resp.average
            });
        }
        getColor();
    }, []);

    const desplazarSegunPosicionPress = (event:GestureResponderEvent) => {
        const { locationX } = event.nativeEvent;
        const mitad = (dimensiones.width * 0.92) / 2;
        if(locationX > mitad){
            trasladarEnSlider("RIGHT");
        }else{
            trasladarEnSlider("LEFT");
        }
    }

    return (
        <Pressable onPress={desplazarSegunPosicionPress}>
            <LinearGradient colors={[color.primario, color.secundario]} 
            style={{ ...styles.gradient, backgroundColor: src.toString(), width}}>
                <Image style={styles.imagen} resizeMode='contain'
                    source={{ uri: src.toString() }} />
            </LinearGradient>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        borderRadius: 4,
        paddingBottom: 12
    },
    imagen: {
        flex: 1,
        padding: 0,
        position: "relative",
        borderRadius: 0,
    }
});